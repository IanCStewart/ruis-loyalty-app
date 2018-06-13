import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Home from '../screens/home';
import IconHome from '../components/icons/home';

const Navigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: 'Home',
        headerStyle: {
          backgroundColor: '#212121',
          borderBottomWidth: 0
        },
        headerTitleStyle: {
          color: 'white'
        },
        headerBackTitleStyle: {
          color: '#4B77BE'
        }
      }
    },
    Details: {
      screen: Home,
      path: 'home/:article',
      navigationOptions: ({ navigation }) => ({
        title: navigation.state.params.article,
        headerStyle: {
          backgroundColor: '#212121',
          borderBottomWidth: 0
        },
        headerTitleStyle: {
          color: 'white'
        },
        headerBackTitleStyle: {
          color: '#4B77BE'
        }
      })
    }
  },
  {
    initialRouteName: 'Home',
    headerMode: 'float'
  }
);

Navigator.navigationOptions = {
  tabBarIcon: ({ tintColor }) => <IconHome color={tintColor} /> // eslint-disable-line react/display-name, react/prop-types
};

export default Navigator;
