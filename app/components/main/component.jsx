import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  FlatList,
  View,
  Text,
  ActivityIndicator
} from 'react-native';

const propTypes = {
  getData: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  data: PropTypes.shape({
    instructions: PropTypes.array.isRequired
  }).isRequired,
  style: PropTypes.shape({
    activityIndicatorContainer: PropTypes.object.isRequired,
    row: PropTypes.object.isRequired,
    title: PropTypes.object.isRequired,
    description: PropTypes.object.isRequired
  }).isRequired
};

class Main extends Component {
  componentDidMount() {
    const { getData } = this.props;

    getData();
  }

  renderItem = ({ item, index }) => {
    const { style } = this.props;

    return (
      <View style={style.row}>
        <Text style={style.title}>
          {(parseInt(index) + 1)}{". "}{item.title}
        </Text>
        <Text style={style.description}>
          {item.description}
        </Text>
      </View>
    )
  }

  render() {
    const { style, data, loading } = this.props;

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
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

Main.propTypes = propTypes;

export default Main;
