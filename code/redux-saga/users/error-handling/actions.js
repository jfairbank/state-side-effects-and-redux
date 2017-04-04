const requestUsers = () => ({
  type: 'REQUEST_USERS',
});

const receiveUsers = users => ({
  type: 'RECEIVE_USERS',
  payload: users,
});

const failUsers = error => ({
  type: 'FAIL_USERS',
  error,
});
