const unsubscribe = store.subscribe(() => {
  console.log('state =', store.getState());
});

store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });

// state = 1
// state = 2
// state = 1
