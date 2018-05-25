import React from 'react';
import { View, Text } from 'react-native';
import style from './style';
import IconProfile from '../../components/icons/profile';

const navigationOptions = {
  tabBarIcon: ({ tintColor }) => <IconProfile color={tintColor} /> // eslint-disable-line react/display-name, react/prop-types
};

const Profile = () => (
  <View style={style.root}>
    <Text>Profile</Text>
  </View>
);

Profile.navigationOptions = navigationOptions;

export default Profile;
