import React from 'react';
import { createStackNavigator } from 'react-navigation';
import IconChevronLeft from 'anchor-ui-native/icons/chevron-left';
import Deals from '../screens/deals';
import Detail from '../screens/detail';
import IconDeals from '../components/icons/deals';
import defaultColors from '../defaults/colors';

const Navigator = createStackNavigator(
  {
    Deals: {
      screen: Deals
    },
    Deal: {
      screen: Detail,
      path: 'event/:event',
      navigationOptions: {
        title: null
      }
    }
  },
  {
    initialRouteName: 'Deals',
    headerMode: 'float',
    navigationOptions: {
      title: 'Deals',
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
  tabBarIcon: ({ tintColor }) => <IconDeals color={tintColor} /> // eslint-disable-line react/display-name, react/prop-types, max-len
};

export default Navigator;
