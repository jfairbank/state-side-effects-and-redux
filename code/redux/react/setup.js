import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

render((
  <Provider store={store}>
    <MyAppContainer />
  </Provider>
), document.getElementById('main'));
