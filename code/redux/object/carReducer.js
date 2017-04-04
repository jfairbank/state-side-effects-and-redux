const initialState = { color: 'red' };

function carReducer(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_COLOR':
      return { ...state, color: action.payload };

    default:
      return state;
  }
}
