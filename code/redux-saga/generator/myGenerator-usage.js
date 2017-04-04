const iterator = myGenerator();

iterator.next();
// { value: 'hello', done: false }

iterator.next();
// { value: 'world', done: false }

iterator.next(21);
// { value: 42, done: true }

iterator.next();
// { value: undefined, done: true }
