function fetchUsers() {
  store.dispatch(requestUsers());

  axios.get('/users')
    .then(({ data }) => {
      store.dispatch(receiveUsers(data));
    });
}

fetchUsers();
