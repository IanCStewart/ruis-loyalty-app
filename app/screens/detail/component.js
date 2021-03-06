import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, ImageBackground, Image, Text, View } from 'react-native';
import { LinearGradient } from 'expo';
import get from 'lodash/get';
import capitalize from 'lodash/capitalize';
import moment from 'moment';
import getStyles from './styles';
import Button from '../../components/button';

const propTypes = {
  imageSource: Image.propTypes.source.isRequired,
  title: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['news', 'event']),
  theme: PropTypes.shape({
    colors: PropTypes.object.isRequired,
    fonts: PropTypes.object.isRequired
  }).isRequired,
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      routeName: PropTypes.string.isRequired,
      params: PropTypes.object.isRequired
    }).isRequired
  }).isRequired,
};

class Detail extends Component {
  renderBody = (styles) => {
    const { navigation } = this.props;
    const description = get(navigation.state.params, 'item.description');
    const type = navigation.state.routeName;

    if (type === 'Event') {
      const date = get(navigation.state.params, 'item.date');

      return (
        <View>
          <Text style={styles.subtitle}>{capitalize(moment(date).format('dddd D MMMM'))}</Text>
          <Text style={styles.body}>{description}</Text>
        </View>
      );
    }

    if (type === 'Deal') {
      return (
        <View>
          <Text style={styles.subtitle}>{get(navigation.state.params, 'item.subtitle')}</Text>
          <Text style={styles.body}>{description}</Text>
          <Button style={styles.button} text="Gebruik korting" />
        </View>
      );
    }

    return <Text style={styles.body}>{description}</Text>;
  }

  render() {
    const { imageSource, title, theme } = this.props;
    const styles = getStyles(theme);

    return (
      <ScrollView style={styles.container}>
        <ImageBackground
          resizeMode='cover'
          source={imageSource}
          style={styles.featuredImage}
        >
          <LinearGradient
            style={styles.gradient}
            colors={['rgba(0,0,0,0.5)', 'transparent']}
            start={[0.5, 1]}
            end={[0.5, 0.45]}
          >
            <Text style={styles.title}>{title}</Text>
          </LinearGradient>
        </ImageBackground>
        <View style={styles.bodyContainer}>
          {this.renderBody(styles)}
        </View>
      </ScrollView>
    );
  }
}

Detail.propTypes = propTypes;

export default Detail;
