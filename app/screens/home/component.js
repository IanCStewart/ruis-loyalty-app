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
import ProfileHeader from '../../components/profile-header';
import Card from '../../components/card';

const propTypes = {
  getNews: PropTypes.func.isRequired,
  getNewsSuccess: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(Object).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    setParams: PropTypes.func.isRequired
  }).isRequired,
  theme: PropTypes.shape({
    colors: PropTypes.object.isRequired,
    fonts: PropTypes.object.isRequired
  }).isRequired
};

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
    const { getNews, getNewsSuccess } = this.props;

    this.props.navigation.setParams({
      headerOpacity: this.headerOpacity.interpolate({
        inputRange: [154, 166], outputRange: [0, 1]
      })
    });

    getNews();
    setTimeout(getNewsSuccess, 500);
  }

  onItemPress = item => this.props.navigation.navigate('Article', { article: item.title, item });

  renderItem = ({ item, index }) => (
    <Card
      imageSource={{ uri: `https://source.unsplash.com/1600x900/?event,night-club,${index}` }}
      title={item.title}
      subTitle={item.subtitle}
      onPress={() => this.onItemPress(item)}
      buttonText="Lees verder"
    />
  )

  render() {
    const { data, loading, theme } = this.props;
    const styles = getStyles(theme);

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
        ListHeaderComponent={
          <View>
            <ProfileHeader
              avatar={{ uri: 'https://images.unsplash.com/photo-1495647073092-135157cc8085?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=160&h=160&fit=crop&ixid=eyJhcHBfaWQiOjF9&s=5215669cd809109b9828d2300beb2376' }}
              username="Callie Hart"
              coins={273}
              ranking="intermediate"
              progress={40}
            />
            <Text style={styles.heading}>Laatste Nieuws</Text>
          </View>
        }
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
