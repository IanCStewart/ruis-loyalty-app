import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import getStyles from './styles';

const propTypes = {
  text: PropTypes.node.isRequired,
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,
  style: View.propTypes.style,
  touchableOpacityProps: PropTypes.object,
  theme: PropTypes.shape({
    colors: PropTypes.object.isRequired,
    fonts: PropTypes.object.isRequired
  }).isRequired
};

const defaultProps = {
  onPress: null,
  onLongPress: null,
  style: {},
  touchableOpacityProps: {}
};

const Button = ({
  theme,
  text,
  onPress,
  onLongPress,
  style,
  touchableOpacityProps
}) => {
  const styles = getStyles(theme);

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      activeOpacity={0.75}
      style={styles.touchableHighlight}
      {...touchableOpacityProps}
    >
      <View style={[styles.container, style]}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
