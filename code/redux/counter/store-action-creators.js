const unsubscribe = store.subscribe(() => {
  console.log('state =', store.getState());
});

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());

// state = 1
// state = 2
// state = 1
