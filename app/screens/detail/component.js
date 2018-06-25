import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, ImageBackground, Image, Text, View } from 'react-native';
import { LinearGradient } from 'expo';
import getStyles from './styles';

const propTypes = {
  imageSource: Image.propTypes.source.isRequired,
  title: PropTypes.node.isRequired,
  body: PropTypes.node,
  theme: PropTypes.shape({
    colors: PropTypes.object.isRequired,
    fonts: PropTypes.object.isRequired
  }).isRequired
};

const defaultProps = {
  body: null
};

const Detail = ({ imageSource, title, theme }) => {
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
        <Text style={styles.body}>Content of article/ event/ deal</Text>
      </View>
    </ScrollView>
  );
};

Detail.propTypes = propTypes;
Detail.defaultProps = defaultProps;

export default Detail;
