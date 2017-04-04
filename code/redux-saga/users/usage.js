import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { call, put, take } from 'redux-saga/effects';
import axios from 'axios';

const initialState = {
  users: [],
  isFetching: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'REQUEST_USERS':
      return { ...state, isFetching: true };

    case 'RECEIVE_USERS':
      return {
        ...state,
        isFetching: false,
        users: action.payload,
      };

    default:
      return state;
  }
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
);

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

sagaMiddleware.run(fetchUsersSaga);

store.subscribe(() => {
  console.log('state =', store.getState());
});

store.dispatch(requestUsers());
