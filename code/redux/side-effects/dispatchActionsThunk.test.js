import axios from 'axios';

const requestUsers = () => ({
  type: 'REQUEST_USERS',
});

const receiveUsers = users => ({
  type: 'RECEIVE_USERS',
  payload: users,
});

function fetchUsers() {
  return dispatch => {
    dispatch(requestUsers());

    return axios.get('/users')
      .then(({ data }) => {
        dispatch(receiveUsers(data));
      });
  };
}

jest.mock('axios');

it('requests and receives users', async () => {
  const users = [{ name: 'Bob' }, { name: 'Alice' }];
  const response = { data: users };
  const spy = jest.fn();
  axios.get.mockImplementationOnce(() => (
    Promise.resolve(response)
  ));

  await fetchUsers()(spy);
  expect(spy).toHaveBeenCalledWith(requestUsers());
  expect(spy).toHaveBeenCalledWith(receiveUsers(users));
});
