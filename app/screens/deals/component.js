import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  FlatList,
  View,
  Text,
  ActivityIndicator,
  Animated
} from 'react-native';
import getStyles from './styles';
import Card from '../../components/card';

const propTypes = {
  getDeals: PropTypes.func.isRequired,
  getDealsSuccess: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(Object).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    setParams: PropTypes.func.isRequired
  }).isRequired,
  theme: PropTypes.shape({
    colors: PropTypes.object.isRequired,
    fonts: PropTypes.object.isRequired
  }).isRequired,
  safeArea: PropTypes.shape({
    top: PropTypes.number.isRequired,
    right: PropTypes.number.isRequired,
    bottom: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
  }).isRequired
};

class Deals extends Component {
  constructor(props) {
    super(props);

    this.headerOpacity = new Animated.Value(0);
  }

  static navigationOptions = ({ navigation }) => ({
    headerStyle: {
      opacity: !navigation.state.params ? 0 : navigation.state.params.headerOpacity,
      backgroundColor: '#212121',
      borderBottomWidth: 0
    },
    headerTransparent: true
  });

  componentDidMount() {
    const { getDeals, getDealsSuccess } = this.props;

    this.props.navigation.setParams({
      headerOpacity: this.headerOpacity.interpolate({
        inputRange: [34, 46], outputRange: [0, 1]
      })
    });

    getDeals();
    setTimeout(getDealsSuccess, 500);
  }

  onItemPress = item => this.props.navigation.navigate('Deal', { item });

  renderItem = ({ item, index }) => (
    <Card
      imageSource={{ uri: `https://source.unsplash.com/1600x900/?drinks,night-club,${index}` }}
      title={item.title}
      subTitle={item.subtitle}
      onPress={() => this.onItemPress(item)}
      buttonText={`${item.price} coins`}
    />
  )

  render() {
    const {
      data,
      loading,
      theme,
      safeArea
    } = this.props;
    const styles = getStyles(theme, safeArea);

    if (loading) {
      return (
        <View style={styles.activityIndicatorContainer}>
          <ActivityIndicator animating={true}/>
        </View>
      );
    }

    const AnimatedFlatlist = Animated.createAnimatedComponent(FlatList);

    return (
      <AnimatedFlatlist
        ListHeaderComponent={<Text style={styles.heading}>Deals</Text>}
        data={data}
        renderItem={this.renderItem}
        keyExtractor={(item, index) => `item-${index}`}
        style={styles.container}
        onScroll={
          Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.headerOpacity } } }],
            { useNativeDriver: true }
          )
        }
        scrollEventThrottle={16}
      />
    );
  }
}

Deals.propTypes = propTypes;

export default Deals;
