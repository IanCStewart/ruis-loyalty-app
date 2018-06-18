import React from 'react';
import { View, Text, Image } from 'react-native';
import getStyles from './styles';

const ProfileHeader = () => {
  const styles = getStyles();

  return (
    <View style={styles.container}>
      <Image resizeMode='cover' style={styles.avatar} source={{ uri: 'https://source.unsplash.com/160x160/?portait,person' }} />
      <View style={styles.textContainer}>
        <Text style={styles.heading}>Username</Text>
        <View style={styles.progressContainer}>
          <View style={styles.progressBar}><View style={styles.progressIndicator} /></View>
          <Text style={styles.coins}>amount coins</Text></View>
        <Text style={styles.ranking}>ranking</Text>
      </View>
    </View>
  );
};

export default ProfileHeader;
