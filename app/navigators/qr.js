import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Qr from '../screens/qr';
import IconQr from '../components/icons/qr';
import defaultColors from '../defaults/colors';

const Navigator = createStackNavigator(
  {
    QR: {
      screen: Qr
    }
  },
  {
    initialRouteName: 'QR',
    navigationOptions: {
      headerStyle: {
        backgroundColor: defaultColors.darkGray,
        borderBottomWidth: 0,
      },
      headerTitleStyle: {
        color: 'white'
      },
      headerTintColor: defaultColors.accentBlue
    }
  }
);

Navigator.navigationOptions = {
  tabBarIcon: ({ tintColor }) => <IconQr color={tintColor} /> // eslint-disable-line react/display-name, react/prop-types, max-len
};

export default Navigator;
