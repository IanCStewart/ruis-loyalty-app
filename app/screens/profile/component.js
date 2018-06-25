import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import getStyles from './styles';
import IconProfile from '../../components/icons/profile';
import SettingsHeader from '../../components/settings-header';

const propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.object.isRequired,
    fonts: PropTypes.object.isRequired
  }).isRequired
};

const navigationOptions = {
  tabBarIcon: ({ tintColor }) => <IconProfile color={tintColor} /> // eslint-disable-line react/display-name, react/prop-types, max-len
};

const Profile = ({ theme }) => {
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <SettingsHeader
        avatar={{ uri: 'https://source.unsplash.com/250x250/?portait,person' }}
        username="Username"
        email="email.address@email.com"
        coins={273}
        ranking="ranking"
        progress={40}
      />
    </View>
  );
};

Profile.propTypes = propTypes;
Profile.navigationOptions = navigationOptions;

export default Profile;
