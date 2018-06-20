import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  FlatList,
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  Animated
} from 'react-native';
import getStyles from './styles';
import ProfileHeader from '../../components/profile-header';

const propTypes = {
  getData: PropTypes.func.isRequired,
  getDataSuccess: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(Object).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    setParams: PropTypes.func.isRequired
  }).isRequired
};

const styles = getStyles();

class Home extends Component {
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
    const { getData, getDataSuccess } = this.props;

    this.props.navigation.setParams({
      headerOpacity: this.headerOpacity.interpolate({
        inputRange: [34, 46], outputRange: [0, 1]
      })
    });

    getData();
    setTimeout(getDataSuccess, 3000);
  }

  onItemPress = title => this.props.navigation.navigate('Details', { article: title });

  renderItem = ({ item, index }) => (
    <TouchableOpacity
      onPress={() => this.onItemPress(item.title)}
      activeOpacity={0.5}
    >
      <View style={styles.row}>
        <Text style={styles.title}>
          {(index + 1)}{'. '}{item.title}
        </Text>
        <Text style={styles.description}>
          {item.description}
        </Text>
      </View>
    </TouchableOpacity>
  )

  renderFlatListHeader = () => (
    <View>
      <ProfileHeader
        avatar={{ uri: 'https://source.unsplash.com/160x160/?portait,person' }}
        username="Username"
        coins={273}
        ranking="ranking"
        progress={40}
      />
      <Text style={styles.heading}>Latest News</Text>
    </View>
  )

  render() {
    const { data, loading } = this.props;

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
        ListHeaderComponent={this.renderFlatListHeader}
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

Home.propTypes = propTypes;

export default Home;
