import React from 'react';
import { View } from 'react-native';
import style from './style';
import IconEvents from '../../components/icons/event';
import ProfileHeader from '../../components/profile-header';

const navigationOptions = {
  tabBarIcon: ({ tintColor }) => <IconEvents color={tintColor} /> // eslint-disable-line react/display-name, react/prop-types, max-len
};

const Events = () => (
  <View style={style.root}>
    <ProfileHeader
      avatar={{ uri: 'https://source.unsplash.com/160x160/?portait,person' }}
      username="Username"
      coins={273}
      ranking="ranking"
      progress={40}
    />
  </View>
);

Events.navigationOptions = navigationOptions;

export default Events;
