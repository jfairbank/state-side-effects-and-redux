function* fetchUsersSaga() {
  const action = yield take('REQUEST_USERS');

  const requests = action.payload.map(
    id => call(axios.get, `/users/${id}`)
  );

  const responses = yield requests;
  const users = responses.map(response => response.data);

  yield put(receiveUsers(users));
}
