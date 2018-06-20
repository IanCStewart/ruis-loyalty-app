import React, { Component } from 'react';
import { YellowBox, StatusBar, View } from 'react-native';
import { AppLoading, Font } from 'expo';
import map from 'lodash/map';
import { Provider } from 'react-redux';
import ThemeProvider from 'anchor-ui-native/theme-provider';
import store from './app/store';
import AppRouter from './app/navigators/app';
import defaultFonts from './app/defaults/fonts';
import defaultColors from './app/defaults/colors';

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
        'avant-garde-book-condensed-oblique': require('./assets/fonts/ITCAvantGardeStd-BkCnObl.ttf'), // eslint-disable-line global-require
        'avant-garde-book-oblique': require('./assets/fonts/ITCAvantGardeStd-BkObl.ttf'), // eslint-disable-line global-require
        'avant-garde-bold': require('./assets/fonts/ITCAvantGardeStd-Bold.ttf'), // eslint-disable-line global-require
        'avant-garde-bold-condensed': require('./assets/fonts/ITCAvantGardeStd-BoldCn.ttf'), // eslint-disable-line global-require
        'avant-garde-bold-condensed-oblique': require('./assets/fonts/ITCAvantGardeStd-BoldCnObl.ttf'), // eslint-disable-line global-require
        'avant-garde-bold-oblique': require('./assets/fonts/ITCAvantGardeStd-BoldObl.ttf'), // eslint-disable-line global-require
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
        <ThemeProvider fonts={defaultFonts} colors={defaultColors}>
          <View style={{ flex: 1 }}>
            <StatusBar barStyle="light-content" />
            <AppRouter />
          </View>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
