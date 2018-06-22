import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import tpUpper from 'lodash/toUpper';
import isEmpty from 'lodash/isEmpty';
import moment from 'moment';
import getStyles from './styles';

const propTypes = {
  eventImage: Image.propTypes.source.isRequired,
  title: PropTypes.node.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
  attendees: PropTypes.arrayOf(Object),
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,
  theme: PropTypes.shape({
    colors: PropTypes.object.isRequired,
    fonts: PropTypes.object.isRequired
  }).isRequired
};

const defaultProps = {
  buttonText: 'Learn more',
  onPress: null,
  onLongPress: null,
  attendees: []
};

const EventCard = ({
  eventImage,
  title,
  date,
  description,
  attendees,
  onPress,
  onLongPress,
  theme
}) => {
  const styles = getStyles(theme);

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      activeOpacity={0.75}
    >
      <View style={styles.container}>
        <Image resizeMode="cover" source={eventImage} style={styles.image} />
        <View style={styles.textContainer}>
          <Text numberOfLines={1} style={styles.title}>{tpUpper(title)}</Text>
          <Text numberOfLines={1} style={styles.date}>{moment(date).format('dddd D MMMM')}</Text>
          <Text numberOfLines={2} style={styles.description}>{description}</Text>
          {
            !isEmpty(attendees)
            ? (
              <View>
                <View></View>
                <View></View>
              </View>
            )
            : null
          }
        </View>
      </View>
    </TouchableOpacity>
  );
};

EventCard.propTypes = propTypes;
EventCard.defaultProps = defaultProps;

export default EventCard;
