import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Home from '../screens/home';
import IconHome from '../components/icons/home';

const Navigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: 'Je Kale Vader'
      }
    },
    Details: {
      screen: Home,
      path: 'home/:article',
      navigationOptions: ({ navigation }) => ({
        title: `${navigation.state.params.article}'s Profile'`,
      })
    }
  },
  {
    initialRouteName: 'Home'
  }
);

Navigator.navigationOptions = {
  tabBarIcon: ({ tintColor }) => <IconHome color={tintColor} /> // eslint-disable-line react/display-name, react/prop-types
};

export default Navigator;
