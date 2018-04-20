import React, { Component } from 'react';
import { YellowBox } from 'react-native';
import { Provider } from 'react-redux';
import store from './app/store';
import Main from './app/components/main';

YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillUpdate is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
  'Warning: isMounted(...) is deprecated',
]);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}
