function* fetchUsersSaga() {
  const response = yield call(axios.get, '/users');
  yield put(receiveUsers(response.data));
}

function* mainSaga() {
  while (true) {
    yield take('REQUEST_USERS');
    yield call(fetchUsersSaga);
  }
}
