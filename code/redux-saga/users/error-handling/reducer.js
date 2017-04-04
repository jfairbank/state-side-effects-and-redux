function reducer(state = initialState, action) {
  switch (action.type) {
    case 'REQUEST_USERS':
      return { ...state, isFetching: true };

    case 'RECEIVE_USERS':
      return {
        ...state,
        isFetching: false,
        users: action.payload,
      };

    case 'FAIL_USERS':
      return { ...state, error: action.error };

    default:
      return state;
  }
}
