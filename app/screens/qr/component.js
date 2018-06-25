import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, Text, Image } from 'react-native';
import IconQr from '../../components/icons/qr';
import qrCode from '../../../assets/images/qr.png';
import getStyles from './styles';

const propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.object.isRequired,
    fonts: PropTypes.object.isRequired
  }).isRequired,
};

const navigationOptions = {
  tabBarIcon: ({ tintColor }) => <IconQr color={tintColor} /> // eslint-disable-line react/display-name, react/prop-types, max-len
};

const Qr = ({ theme }) => {
  const styles = getStyles(theme);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.pageTitle}>Persoonlijke Code</Text>
      <Image style={styles.image} source={qrCode} />
    </SafeAreaView>
  );
};

Qr.propTypes = propTypes;
Qr.navigationOptions = navigationOptions;

export default Qr;
