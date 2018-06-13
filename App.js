import React, { Component } from 'react';
import { YellowBox, StatusBar, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './app/store';
import AppRouter from './app/navigators/app';

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
        <View style={{ flex: 1 }}>
          <StatusBar barStyle="light-content" />
          <AppRouter />
        </View>
      </Provider>
    );
  }
}
