import React from 'react';
import { createStackNavigator } from 'react-navigation';
import IconChevronLeft from 'anchor-ui-native/icons/chevron-left';
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
      headerTintColor: defaultColors.accentBlue,
      headerBackImage: ({ tintColor }) => ( // eslint-disable-line react/prop-types
        <IconChevronLeft style={{ marginLeft: 5, marginRight: 2 }} size={20} color={tintColor} />
      )
    }
  }
);

Navigator.navigationOptions = {
  tabBarIcon: ({ tintColor }) => <IconEvents color={tintColor} /> // eslint-disable-line react/display-name, react/prop-types, max-len
};

export default Navigator;
