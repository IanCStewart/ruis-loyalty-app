import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Home from '../screens/home';
import Detail from '../screens/detail';
import IconHome from '../components/icons/home';
import defaultColors from '../defaults/colors';

const Navigator = createStackNavigator(
  {
    Home: {
      screen: Home
    },
    Details: {
      screen: Detail,
      path: 'home/:article',
      navigationOptions: ({ navigation }) => ({
        title: navigation.state.params.article
      })
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
      headerTintColor: defaultColors.accentBlue
    }
  }
);

Navigator.navigationOptions = {
  tabBarIcon: ({ tintColor }) => <IconHome color={tintColor} /> // eslint-disable-line react/display-name, react/prop-types, max-len
};

export default Navigator;
