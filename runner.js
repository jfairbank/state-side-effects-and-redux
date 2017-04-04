/* eslint-disable no-console */
const fs = require('fs');
const childProcess = require('child_process');
const p = require('path');
const chokidar = require('chokidar');
const sh = require('shelljs');
const { Observable } = require('rxjs');

function readFile(path, encoding) {
  return Observable.create((observer) => {
    fs.readFile(path, encoding, (err, data) => {
      if (err) {
        observer.error(err);
      } else {
        observer.next(data);
        observer.complete();
      }
    });
  });
}

function spawn(command, args, stdin) {
  return Observable.create((subscriber) => {
    const child = childProcess.spawn(command, args);

    child.stdout.setEncoding('utf8');
    child.stderr.setEncoding('utf8');

    child.stdout.on('data', (data) => {
      subscriber.next({
        proc: child,
        stdout: data,
        stderr: null,
      });
    });

    child.stderr.on('data', (data) => {
      subscriber.next({
        proc: child,
        stdout: null,
        stderr: data,
      });
    });

    child.on('close', () => {
      subscriber.complete();
    });

    child.stdin.write(stdin);
    child.stdin.end();
  });
}

function contextPath(path) {
  const basename = p.basename(path, '.js');
  const dirname = p.dirname(path);

  return `${dirname}/_${basename}.context.js`;
}

const fileWatcher = chokidar.watch('./code/**/*.js');

const fileWatch$ = Observable.fromEvent(fileWatcher, 'change');

fileWatch$
  .mergeMap(path => Observable.forkJoin(
    readFile(path, 'utf8'),
    readFile(contextPath(path), 'utf8').catch(() => Observable.of(''))
  ))
  .map(([contents, context]) => (`
    ${context}
    ${contents}
  `))
  .do(() => sh.exec('clear'))
  .mergeMap(contents => spawn('babel', ['--filename', 'input.js'], contents))
  .mergeMap(({ stdout, stderr }) => {
    if (stderr) {
      return Observable.throw(stderr);
    }

    return spawn('node', [], stdout);
  })
  .scan((prev, next) => {
    if (prev && prev.proc !== next.proc) {
      prev.proc.kill();
    }

    return next;
  }, null)
  .catch((err) => {
    console.error(err);
    return fileWatch$;
  })
  .subscribe(({ stdout, stderr }) => {
    if (stdout) {
      console.log(stdout.trim());
    }

    if (stderr) {
      console.error(stderr.trim());
    }
  });
