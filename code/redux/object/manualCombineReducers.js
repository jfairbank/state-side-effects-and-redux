function reducer(state = {}, action) {
  return {
    counter: counterReducer(state.counter, action),
    car: carReducer(state.car, action),
  };
}
