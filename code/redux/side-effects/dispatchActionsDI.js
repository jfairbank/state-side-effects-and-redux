function fetchUsers(dispatch) {
  dispatch(requestUsers());

  axios.get('/users')
    .then(({ data }) => {
      dispatch(receiveUsers(data));
    });
}

fetchUsers(store.dispatch);
