import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  FlatList,
  View,
  Text,
  ActivityIndicator
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import style from './style';
import IconHome from '../../components/icons/home';

const propTypes = {
  getData: PropTypes.func.isRequired,
  getDataSuccess: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(Object).isRequired
};

const navigationOptions = {
  tabBarIcon: ({ tintColor }) => <IconHome color={tintColor} /> // eslint-disable-line react/display-name, react/prop-types
};

class Home extends Component {
  componentDidMount() {
    const { getData, getDataSuccess } = this.props;

    getData();
    setTimeout(getDataSuccess, 3000);
  }

  renderItem = ({ item, index }) => (
    <View style={style.row}>
      <Text style={style.title}>
        {(parseInt(index) + 1)}{". "}{item.title}
      </Text>
      <Text style={style.description}>
        {item.description}
      </Text>
    </View>
  )

  render() {
    const { data, loading } = this.props;

    if (loading) {
      return (
        <View style={style.activityIndicatorContainer}>
          <ActivityIndicator animating={true}/>
        </View>
      );
    }

    return (
      <SafeAreaView style={style.root}>
        <FlatList
          data={data}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => `item-${index}`}
        />
      </SafeAreaView>
    );
  }
}

Home.propTypes = propTypes;
Home.navigationOptions = navigationOptions;

export default Home;
