import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, ImageBackground } from 'react-native';
import getStyles from './styles';
import Button from '../button';

const propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.object.isRequired,
    fonts: PropTypes.object.isRequired
  }).isRequired
};

const Card = ({ theme }) => {
  const styles = getStyles(theme);

  return (
    <ImageBackground
      resizeMode='cover'
      source={{ uri: 'https://source.unsplash.com/1600x900/?drinks' }}
      style={styles.container}
      borderRadius={8}
    >
      <View>
        <Text style={styles.subTitle} numberOfLines={1}>SUBTITLE</Text>
        <Text style={styles.title} numberOfLines={1}>Card Title</Text>
      </View>
      <Button />
    </ImageBackground>
  );
};

Card.propTypes = propTypes;

export default Card;
