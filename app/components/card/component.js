import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo';
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
      <LinearGradient
        style={styles.gradient}
        colors={['rgba(0,0,0,0.5)', 'transparent', 'transparent', 'rgba(0,0,0,0.5)']}
        locations={[0, 0.5, 0.65, 1]}
      >
        <View>
          <Text style={styles.subTitle} numberOfLines={1}>SUBTITLE</Text>
          <Text style={styles.title} numberOfLines={1}>Card Title</Text>
        </View>
        <Button style={{ alignSelf: 'flex-start' }} />
      </LinearGradient>
    </ImageBackground>
  );
};

Card.propTypes = propTypes;

export default Card;
