const logMiddleware = api => next => action => {
  console.log('dispatch', action);

  const result = next(action);

  console.log('state =', api.getState());

  return result;
};
