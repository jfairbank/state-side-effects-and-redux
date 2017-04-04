function* fetchUsersSaga() {
  const action = yield take('REQUEST_USERS');
  const users = [];

  for (const id of action.payload) {
    const response = yield call(axios.get, `/users/${id}`);
    users.push(response.data);
  }

  yield put(receiveUsers(users));
}
