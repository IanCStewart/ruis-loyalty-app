import React from 'react';
import { createStackNavigator } from 'react-navigation';
import IconChevronLeft from 'anchor-ui-native/icons/chevron-left';
import Home from '../screens/home';
import Detail from '../screens/detail';
import IconHome from '../components/icons/home';
import defaultColors from '../defaults/colors';

const Navigator = createStackNavigator(
  {
    Home: {
      screen: Home
    },
    Article: {
      screen: Detail,
      path: 'home/:article',
      navigationOptions: {
        title: null
      }
    }
  },
  {
    initialRouteName: 'Home',
    headerMode: 'float',
    navigationOptions: {
      title: 'Home',
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
  tabBarIcon: ({ tintColor }) => <IconHome color={tintColor} /> // eslint-disable-line react/display-name, react/prop-types, max-len
};

export default Navigator;
