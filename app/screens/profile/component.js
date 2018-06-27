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
        avatar={{ uri: 'https://images.unsplash.com/photo-1495647073092-135157cc8085?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=250&h=250&fit=crop&ixid=eyJhcHBfaWQiOjF9&s=5215669cd809109b9828d2300beb2376' }}
        username="Callie Hart"
        email="callie.hart@hotmail.com"
        coins={273}
        ranking="intermediate"
        progress={40}
      />
    </View>
  );
};

Profile.propTypes = propTypes;
Profile.navigationOptions = navigationOptions;

export default Profile;
