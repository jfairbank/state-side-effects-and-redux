function* fetchUsersSaga() {
  yield take('REQUEST_USERS');

  const responses = yield [
    call(axios.get, '/users/1'),
    call(axios.get, '/users/2'),
    call(axios.get, '/users/3'),
  ];

  const users = responses.map(resp => resp.data);

  yield put(receiveUsers(users));
}
