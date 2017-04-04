import { call, put, take } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';
import axios from 'axios';

const requestUsers = () => ({
  type: 'REQUEST_USERS',
});

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

  return expectSaga(fetchUsersSaga)
    .provide({
      call: ({ fn }, next) => (fn === axios.get ? response : next()),
    })
    .put(receiveUsers(users))
    .dispatch(requestUsers())
    .run();
});
