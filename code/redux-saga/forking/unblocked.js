function* mainSaga() {
  yield fork(fetchUsersSaga);
  yield take('LOGOUT');
  yield call(logoutSaga);
}
