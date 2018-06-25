import React from 'react';
import { createStackNavigator } from 'react-navigation';
import IconChevronLeft from 'anchor-ui-native/icons/chevron-left';
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
      headerTintColor: defaultColors.accentBlue,
      headerBackImage: ({ tintColor }) => ( // eslint-disable-line react/prop-types
        <IconChevronLeft style={{ marginLeft: 5, marginRight: 2 }} size={20} color={tintColor} />
      )
    }
  }
);

Navigator.navigationOptions = {
  tabBarIcon: ({ tintColor }) => <IconQr color={tintColor} /> // eslint-disable-line react/display-name, react/prop-types, max-len
};

export default Navigator;
