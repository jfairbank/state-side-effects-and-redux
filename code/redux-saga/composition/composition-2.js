function* fetchUsersSaga() {
  const response = yield call(axios.get, '/users');
  yield put(receiveUsers(response.data));
}

function* fetchPostsSaga() {
  const response = yield call(axios.get, '/posts');
  yield put(receivePosts(response.data));
}

function* mainSaga() {
  yield take('REQUEST_DATA');

  yield [
    call(fetchUsersSaga),
    call(fetchPostsSaga),
  ];

  yield put(setIsFetching(false));
}
