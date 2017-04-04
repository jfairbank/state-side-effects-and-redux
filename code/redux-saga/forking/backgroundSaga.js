import { call, fork, put, select, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchUsersSaga() {
  try {
    const response = yield call(axios.get, '/users');
    yield put(receiveUsers(response.data));
  } catch (e) {
    yield put(failUsers(e));
  }
}

const getUser = state => state.currentUser;

const delay = time => new Promise((resolve) => {
  setTimeout(resolve, time);
});

function* autosaveSaga() {
  while (true) {
    const user = yield select(getUser);

    if (user) {
      const url = `/users/${user.id}`;
      yield call(axios.put, url, user);
    }

    yield call(delay, 1000);
  }
}

function* mainSaga() {
  yield takeLatest('REQUEST_USERS', fetchUsersSaga);
  yield fork(autosaveSaga);
}
