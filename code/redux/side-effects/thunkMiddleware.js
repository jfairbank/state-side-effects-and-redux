const thunkMiddleware = store => next => action => {
  if (typeof action === 'function') {
    return action(store.dispatch);
  }

  return next(action);
};

const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware)
);
