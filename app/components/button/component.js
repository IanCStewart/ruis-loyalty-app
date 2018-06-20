import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import getStyles from './styles';

const propTypes = {
  text: PropTypes.node,
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,
  theme: PropTypes.shape({
    colors: PropTypes.object.isRequired,
    fonts: PropTypes.object.isRequired
  }).isRequired
};

const defaultProps = {
  text: 'Learn more',
  onPress: null,
  onLongPress: null
};

const Button = ({
  theme,
  text,
  onPress,
  onLongPress
}) => {
  const styles = getStyles(theme);

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      // underlayColor={theme.colors.lighterGray}
      activeOpacity={0.75}
      style={styles.touchableHighlight}
    >
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
