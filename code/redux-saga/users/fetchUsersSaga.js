import { call, put, take } from 'redux-saga/effects';

function* fetchUsersSaga() {
  yield take('REQUEST_USERS');

  const response = yield call(axios.get, '/users');

  yield put(receiveUsers(response.data));
}
