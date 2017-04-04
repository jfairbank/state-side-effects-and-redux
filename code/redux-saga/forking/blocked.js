function* mainSaga() {
  yield take('REQUEST_USERS');
  yield call(fetchUsersSaga);

  yield take('LOGOUT');
  yield call(logoutSaga);
}
