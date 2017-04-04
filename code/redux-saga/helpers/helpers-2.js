import { call, put, takeEvery } from 'redux-saga/effects';

function* fetchUsersSaga() {
  const response = yield call(axios.get, '/users');
  yield put(receiveUsers(response.data));
}

function* mainSaga() {
  yield takeEvery('REQUEST_USERS', fetchUsersSaga);
}
