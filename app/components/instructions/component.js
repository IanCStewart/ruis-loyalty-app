import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  FlatList,
  View,
  Text,
  ActivityIndicator
} from 'react-native';
import style from './style';

const propTypes = {
  getData: PropTypes.func.isRequired,
  getDataSuccess: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(Object).isRequired
};

class Instructions extends Component {
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
      <View style={style.root}>
        <FlatList
          data={data}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => `item-${index}`}
        />
      </View>
    );
  }
}

Instructions.propTypes = propTypes;

export default Instructions;
