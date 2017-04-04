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

const saga = fetchUsersSaga();

it('waits for REQUEST_USERS', () => {
  const actual = saga.next().value;
  const expected = take('REQUEST_USERS');

  expect(actual).toEqual(expected);
});

it('fetches users', () => {
  const actual = saga.next().value;
  const expected = call(axios.get, '/users');

  expect(actual).toEqual(expected);
});

it('dispatches the users', () => {
  const users = [{ name: 'Bob' }, { name: 'Alice' }];
  const response = { data: users };
  const actual = saga.next(response).value;
  const expected = put(receiveUsers(users));

  expect(actual).toEqual(expected);
});
