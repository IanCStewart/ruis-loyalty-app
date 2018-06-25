import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Events from '../screens/events';
import Detail from '../screens/detail';
import IconEvents from '../components/icons/event';
import defaultColors from '../defaults/colors';

const Navigator = createStackNavigator(
  {
    Events: {
      screen: Events
    },
    Event: {
      screen: Detail,
      path: 'event/:event',
      navigationOptions: ({ navigation }) => ({
        title: navigation.state.params.event
      })
    }
  },
  {
    initialRouteName: 'Events',
    headerMode: 'float',
    navigationOptions: {
      title: 'Events',
      headerStyle: {
        backgroundColor: defaultColors.darkGray,
        borderBottomWidth: 0
      },
      headerTitleStyle: {
        color: 'white'
      },
      headerTintColor: defaultColors.accentBlue
    }
  }
);

Navigator.navigationOptions = {
  tabBarIcon: ({ tintColor }) => <IconEvents color={tintColor} /> // eslint-disable-line react/display-name, react/prop-types, max-len
};

export default Navigator;
