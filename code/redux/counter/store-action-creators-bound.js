import { bindActionCreators } from 'redux';

const actions = bindActionCreators(
  { increment, decrement },
  store.dispatch
);

store.subscribe(() => {
  console.log('state =', store.getState());
});

actions.increment();
actions.increment();
actions.decrement();

// state = 1
// state = 2
// state = 1
