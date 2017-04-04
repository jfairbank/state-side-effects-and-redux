function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return Object.assign({}, state, {
        counter: state.counter + 1,
      });

    case 'DECREMENT':
      return Object.assign({}, state, {
        counter: state.counter - 1,
      });

    case 'CHANGE_COLOR':
      return Object.assign({}, state, {
        car: { color: action.payload },
      });

    default:
      return state;
  }
}
