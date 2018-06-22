import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatList, Text, Animated } from 'react-native';
import Card from '../../components/card';
import getStyles from './styles';

const propTypes = {
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
    this.props.navigation.setParams({
      headerOpacity: this.headerOpacity.interpolate({
        inputRange: [34, 46], outputRange: [0, 1]
      })
    });
  }

  onItemPress = title => this.props.navigation.navigate('Event', { event: title });

  renderItem = ({ item, index }) => (
    <Card
      imageSource={{ uri: `https://source.unsplash.com/1600x900/?drink,${index}` }}
      title={item.title}
      subTitle={`subtitle ${index}`}
      onPress={() => this.onItemPress(item.title)}
    />
  )

  render() {
    const { theme, safeArea } = this.props;
    const styles = getStyles(theme, safeArea);

    const AnimatedFlatlist = Animated.createAnimatedComponent(FlatList);

    return (
      <AnimatedFlatlist
        ListHeaderComponent={<Text style={styles.heading}>Events</Text>}
        data={[
          { title: 'Title 0' },
          { title: 'Title 1' },
          { title: 'Title 2' },
          { title: 'Title 3' },
          { title: 'Title 4' },
          { title: 'Title 5' }
        ]}
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
