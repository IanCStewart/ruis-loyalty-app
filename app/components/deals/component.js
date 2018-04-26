import React from 'react';
import { View, Text } from 'react-native';
import style from './style';
import IconDeals from '../icons/deals';

const navigationOptions = {
  tabBarIcon: ({ tintColor }) => <IconDeals color={tintColor} /> // eslint-disable-line react/display-name, react/prop-types
};

const Deals = () => (
  <View style={style.root}>
    <Text>Deals</Text>
  </View>
);

Deals.navigationOptions = navigationOptions;

export default Deals;
