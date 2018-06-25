import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  FlatList,
  View,
  Text,
  ActivityIndicator,
  Animated
} from 'react-native';
import get from 'lodash/get';
import EventCard from '../../components/event-card';
import getStyles from './styles';

const propTypes = {
  getEvents: PropTypes.func.isRequired,
  getEventsSuccess: PropTypes.func.isRequired,
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
    top: PropTypes.number.isRequired
  }).isRequired
};

class Events extends Component {
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
    const { getEvents, getEventsSuccess } = this.props;

    this.props.navigation.setParams({
      headerOpacity: this.headerOpacity.interpolate({
        inputRange: [34, 46], outputRange: [0, 1]
      })
    });

    getEvents();
    setTimeout(getEventsSuccess, 500);
  }

  onItemPress = item => this.props.navigation.navigate('Event', { event: item.style, item });

  renderItem = ({ item, index }) => (
    <EventCard
      eventImage={{ uri: `https://source.unsplash.com/1600x900/?event,${index}` }}
      title={item.title}
      date={item.date}
      description={item.description}
      attendees={item.attendees}
      onPress={() => this.onItemPress(item)}
      liked={get(item, 'liked', false)}
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
        ListHeaderComponent={<Text style={styles.heading}>Events</Text>}
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

Events.propTypes = propTypes;

export default Events;
