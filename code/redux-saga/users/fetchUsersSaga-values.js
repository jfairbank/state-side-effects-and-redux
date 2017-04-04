import { call, put, take } from 'redux-saga/effects';
import axios from 'axios';

const receiveUsers = users => ({
  type: 'RECEIVE_USERS',
  payload: users,
});

function* fetchUsersSaga() {
  yield take('REQUEST_USERS');

  const response = yield call(axios.get, '/users');

  yield put(receiveUsers(response.data));
}

const iterator = fetchUsersSaga();

console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next({}).value);
