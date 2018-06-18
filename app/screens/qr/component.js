import React from 'react';
import { View, Text } from 'react-native';
import style from './style';
import IconQr from '../../components/icons/qr';

const navigationOptions = {
  tabBarIcon: ({ tintColor }) => <IconQr color={tintColor} /> // eslint-disable-line react/display-name, react/prop-types, max-len
};

const Qr = () => (
  <View style={style.root}>
    <Text>Qr</Text>
  </View>
);

Qr.navigationOptions = navigationOptions;

export default Qr;
