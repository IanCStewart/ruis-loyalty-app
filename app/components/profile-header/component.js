import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import WithSafeArea from 'anchor-ui-native/with-safe-area';
import getStyles from './styles';

const propTypes = {
  avatar: Image.propTypes.source.isRequired,
  username: PropTypes.node.isRequired,
  coins: PropTypes.number.isRequired,
  ranking: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
  onPress: PropTypes.func,
  safeArea: PropTypes.shape({
    top: PropTypes.number.isRequired,
    right: PropTypes.number.isRequired,
    bottom: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
  }).isRequired,
  theme: PropTypes.shape({
    colors: PropTypes.object.isRequired,
    fonts: PropTypes.object.isRequired
  }).isRequired
};

const defaultProps = {
  onPress: null
};

const ProfileHeader = ({
  avatar,
  username,
  coins,
  ranking,
  progress,
  onPress,
  safeArea,
  theme
}) => {
  const styles = getStyles(theme, safeArea, progress);

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image resizeMode='cover' style={styles.avatar} source={avatar} />
        <View style={styles.textContainer}>
          <Text style={styles.heading}>{username}</Text>
          <View style={styles.progressContainer}>
            <View style={styles.progressBar}><View style={styles.progressIndicator} /></View>
            <Text style={styles.coins}>{coins} coins</Text></View>
          <Text style={styles.ranking}>{ranking}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

ProfileHeader.propTypes = propTypes;
ProfileHeader.defaultProps = defaultProps;

export default WithSafeArea(ProfileHeader);
