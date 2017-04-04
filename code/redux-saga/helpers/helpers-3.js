import { call, put, takeLatest } from 'redux-saga/effects';

function* fetchUsersSaga() {
  const response = yield call(axios.get, '/users');
  yield put(receiveUsers(response.data));
}

function* mainSaga() {
  yield takeLatest('REQUEST_USERS', fetchUsersSaga);
}
