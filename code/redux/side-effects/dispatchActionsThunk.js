const thunkMiddleware = api => next => action => {
  if (typeof action === 'function') {
    return action(api.dispatch);
  }

  return next(action);
};

const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware)
);
