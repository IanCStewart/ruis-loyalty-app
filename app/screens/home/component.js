import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  FlatList,
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native';
import style from './style';

const propTypes = {
  getData: PropTypes.func.isRequired,
  getDataSuccess: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(Object).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
};

class Home extends Component {
  componentDidMount() {
    const { getData, getDataSuccess } = this.props;

    getData();
    setTimeout(getDataSuccess, 3000);
  }

  onItemPress = (title) => this.props.navigation.navigate('Details', { article: title });

  renderItem = ({ item, index }) => (
    <TouchableOpacity
      onPress={() => this.onItemPress(item.title)}
      activeOpacity={0.5}
    >
      <View style={style.row}>
        <Text style={style.title}>
          {(parseInt(index) + 1)}{". "}{item.title}
        </Text>
        <Text style={style.description}>
          {item.description}
        </Text>
      </View>
    </TouchableOpacity>
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
      <FlatList
        data={data}
        renderItem={this.renderItem}
        keyExtractor={(item, index) => `item-${index}`}
        style={style.container}
      />
    );
  }
}

Home.propTypes = propTypes;

export default Home;
