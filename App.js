import React, { Component } from 'react';
import { YellowBox, StatusBar, View } from 'react-native';
import { AppLoading, Font } from 'expo';
import map from 'lodash/map';
import { Provider } from 'react-redux';
import store from './app/store';
import AppRouter from './app/navigators/app';

YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillUpdate is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
  'Warning: isMounted(...) is deprecated',
]);

const cacheFonts = fonts => map(fonts, Font.loadAsync);

class App extends Component {
  state = {
    isReady: false
  };

  loadAssetsAsync = async () => {
    const fontAssets = cacheFonts([
      {
        'avant-garde-book': require('./assets/fonts/ITCAvantGardeStd-Bk.ttf'), // eslint-disable-line global-require
        'avant-garde-book-condensed': require('./assets/fonts/ITCAvantGardeStd-BkCn.ttf'), // eslint-disable-line global-require
        'avant-garde-book-condensed-italic': require('./assets/fonts/ITCAvantGardeStd-BkCnObl.ttf'), // eslint-disable-line global-require
        'avant-garde-book-italic': require('./assets/fonts/ITCAvantGardeStd-BkObl.ttf'), // eslint-disable-line global-require
        'avant-garde-bold': require('./assets/fonts/ITCAvantGardeStd-Bold.ttf'), // eslint-disable-line global-require
        'avant-garde-bold-condensed': require('./assets/fonts/ITCAvantGardeStd-BoldCn.ttf'), // eslint-disable-line global-require
        'avant-garde-bold-condensed-italic': require('./assets/fonts/ITCAvantGardeStd-BoldCnObl.ttf'), // eslint-disable-line global-require
        'avant-garde-bold-italic': require('./assets/fonts/ITCAvantGardeStd-BoldObl.ttf'), // eslint-disable-line global-require
        'avant-garde-demi': require('./assets/fonts/ITCAvantGardeStd-Demi.ttf'), // eslint-disable-line global-require
        'avant-garde-demi-condensed': require('./assets/fonts/ITCAvantGardeStd-DemiCn.ttf'), // eslint-disable-line global-require
      }
    ]);

    return Promise.all([...fontAssets]);
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this.loadAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }

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

export default App;
