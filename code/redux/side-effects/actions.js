const requestUsers = () => ({
  type: 'REQUEST_USERS',
});

const receiveUsers = users => ({
  type: 'RECEIVE_USERS',
  payload: users,
});
