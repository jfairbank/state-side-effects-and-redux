function fetchUsers() {
  return dispatch => {
    dispatch(requestUsers());

    return axios.get('/users')
      .then(({ data }) => {
        dispatch(receiveUsers(data));
      })
      .catch((e) => {
        dispatch(failUsers(e));
      });
  };
}

store.dispatch(fetchUsers());
