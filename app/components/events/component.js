import React from 'react';
import { View, Text } from 'react-native';
import style from './style';
import IconEvents from '../icons/event';

const navigationOptions = {
  tabBarIcon: ({ tintColor }) => <IconEvents color={tintColor} /> // eslint-disable-line react/display-name, react/prop-types
};

const Events = () => (
  <View style={style.root}>
    <Text>Events</Text>
  </View>
);

Events.navigationOptions = navigationOptions;

export default Events;
