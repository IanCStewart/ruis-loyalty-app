import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native';
import WithSafeArea from 'anchor-ui-native/with-safe-area';
import getStyles from './styles';

const propTypes = {
  avatar: Image.propTypes.source.isRequired,
  username: PropTypes.node.isRequired,
  email: PropTypes.node.isRequired,
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

const SettignsHeader = ({
  avatar,
  username,
  email,
  coins,
  ranking,
  progress,
  safeArea,
  theme
}) => {
  const styles = getStyles(theme, safeArea, progress);

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Image resizeMode='cover' style={styles.avatar} source={avatar} />
        <Text style={styles.heading}>{username}</Text>
        <Text style={styles.subtitle}>{email}</Text>
      </View>
      <View style={styles.textContainer}>
        <View style={[styles.infoContainer, { borderRightWidth: 0.5 }]}>
          <Text style={styles.coins}>{coins} coins</Text>
          <View style={styles.progressBar}><View style={styles.progressIndicator} /></View>
        </View>
        <View style={[styles.infoContainer, { borderLeftWidth: 0.5 }]}>
          <Text style={styles.rankingTitle}>Ranking</Text>
          <Text style={styles.ranking}>{ranking}</Text>
        </View>
      </View>
    </View>
  );
};

SettignsHeader.propTypes = propTypes;
SettignsHeader.defaultProps = defaultProps;

export default WithSafeArea(SettignsHeader);
