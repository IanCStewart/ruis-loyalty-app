import React from 'react';
import { View, Text } from 'react-native';
import style from './style';
import IconEvents from '../../components/icons/event';

const navigationOptions = {
  tabBarIcon: ({ tintColor }) => <IconEvents color={tintColor} /> // eslint-disable-line react/display-name, react/prop-types, max-len
};

const Events = () => (
  <View style={style.root}>
    <Text>Event</Text>
  </View>
);

Events.navigationOptions = navigationOptions;

export default Events;
