import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './app/store';
import Main from './app/components/main';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}
