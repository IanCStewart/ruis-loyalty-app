import React from 'react';
import { View, Text } from 'react-native';
import style from './style';
import IconEvents from '../../components/icons/event';
import Card from '../../components/card';

const navigationOptions = {
  tabBarIcon: ({ tintColor }) => <IconEvents color={tintColor} /> // eslint-disable-line react/display-name, react/prop-types, max-len
};

const Events = () => (
  <View style={style.root}>
    <Text>Events</Text>
    <Card
      imageSource={{ uri: 'https://source.unsplash.com/1600x900/?drink' }}
      title="Title"
      subTitle="subtitle"
    />
  </View>
);

Events.navigationOptions = navigationOptions;

export default Events;
