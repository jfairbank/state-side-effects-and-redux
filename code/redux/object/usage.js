store.subscribe(() => {
  console.log('state =', store.getState());
});

store.dispatch(increment());
store.dispatch(changeColor('green'));
store.dispatch(decrement());

// state = { counter: 1, car: { color: 'red' } }
// state = { counter: 1, car: { color: 'green' } }
// state = { counter: 0, car: { color: 'green' } }
