import { call, put, take } from 'redux-saga/effects';
import { testSaga } from 'redux-saga-test-plan';
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

it('fetchUsersSaga', () => {
  const users = [{ name: 'Bob' }, { name: 'Alice' }];
  const response = { data: users };

  testSaga(fetchUsersSaga)
    .next()
    .take('REQUEST_USERS')
    .next()
    .call(axios.get, '/users')
    .next(response)
    .put(receiveUsers(users));
});
