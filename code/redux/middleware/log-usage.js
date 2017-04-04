import { applyMiddleware } from 'redux';

const store = createStore(
  reducer,
  applyMiddleware(logMiddleware)
);

store.dispatch(increment());
store.dispatch(changeColor('green'));

// dispatch { type: 'INCREMENT' }
// state = { counter: 1, car: { color: 'red' } }
// dispatch { type: 'CHANGE_COLOR', payload: 'green' }
// state = { counter: 1, car: { color: 'green' } }
