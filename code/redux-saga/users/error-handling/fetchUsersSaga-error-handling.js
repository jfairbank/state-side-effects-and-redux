function* fetchUsersSaga() {
  try {
    yield take('REQUEST_USERS');
    const response = yield call(axios.get, '/users');
    yield put(receiveUsers(response.data));
  } catch (e) {
    yield put(failUsers(e));
  }
}
