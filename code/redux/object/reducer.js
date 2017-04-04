function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, counter: state.counter + 1 };

    case 'DECREMENT':
      return { ...state, counter: state.counter - 1 };

    case 'CHANGE_COLOR':
      return { ...state, car: { color: action.payload } };

    default:
      return state;
  }
}
