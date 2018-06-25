import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native';
import qrCode from '../../../assets/images/qr.png';
import getStyles from './styles';

const propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.object.isRequired,
    fonts: PropTypes.object.isRequired
  }).isRequired,
};

const Qr = ({ theme }) => {
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Persoonlijke Code</Text>
      <Image style={styles.image} source={qrCode} />
    </View>
  );
};

Qr.propTypes = propTypes;

export default Qr;
