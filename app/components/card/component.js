import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo';
import toUpper from 'lodash/toUpper';
import getStyles from './styles';
import Button from '../button';

const propTypes = {
  imageSource: Image.propTypes.source.isRequired,
  title: PropTypes.node.isRequired,
  subTitle: PropTypes.node.isRequired,
  buttonText: PropTypes.node,
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,
  theme: PropTypes.shape({
    colors: PropTypes.object.isRequired,
    fonts: PropTypes.object.isRequired
  }).isRequired
};

const defaultProps = {
  buttonText: 'Learn more',
  onPress: null,
  onLongPress: null
};

const Card = ({
  imageSource,
  title,
  subTitle,
  buttonText,
  onPress,
  onLongPress,
  theme
}) => {
  const styles = getStyles(theme);

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      activeOpacity={0.75}
    >
      <ImageBackground
        resizeMode='cover'
        source={imageSource}
        style={styles.container}
        borderRadius={8}
      >
        <LinearGradient
          style={styles.gradient}
          colors={['rgba(0,0,0,0.75)', 'transparent', 'transparent', 'rgba(0,0,0,0.75)']}
          locations={[0, 0.5, 0.65, 1]}
        >
          <View>
            <Text style={styles.subTitle} numberOfLines={1}>{toUpper(subTitle)}</Text>
            <Text style={styles.title} numberOfLines={1}>{title}</Text>
          </View>
          <Button
            style={{ alignSelf: 'flex-start' }}
            text={buttonText}
            touchableOpacityProps={{ disabled: true, activeOpacity: 1 }}
          />
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
};

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;
