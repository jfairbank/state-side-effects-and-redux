function* fetchUsersSaga() {
  yield take('REQUEST_USERS');

  const resp1 = yield call(axios.get, '/users/1');
  const resp2 = yield call(axios.get, '/users/2');
  const resp3 = yield call(axios.get, '/users/3');

  const users = [resp1.data, resp2.data, resp3.data];

  yield put(receiveUsers(users));
}
