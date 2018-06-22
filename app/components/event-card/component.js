import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import tpUpper from 'lodash/toUpper';
import isEmpty from 'lodash/isEmpty';
import take from 'lodash/take';
import map from 'lodash/map';
import size from 'lodash/size';
import join from 'lodash/join';
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

  const shownAttendees = take(attendees, 3);
  const names = join(map(shownAttendees, 'name'), ', ');

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
              <View style={styles.attendeeContainer}>
                <View style={styles.attendeeImagesContainer}>
                  {
                    map(shownAttendees, (attendee, index) => (
                      <View style={[styles.attendeeImageContainer, { left: index * -8 }]} key={`${title}-${attendee.name}-${index}`}>
                        <Image
                          resizeMode="cover"
                          style={styles.attendeeImage}
                          source={attendee.avatar}
                        />
                      </View>
                    ))
                  }
                </View>
                <Text
                  numberOfLines={1}
                  style={{
                    position: 'relative',
                    left: (size(shownAttendees) - 1) * -8,
                    top: 2,
                    paddingLeft: 4
                  }}
                >
                  <Text style={styles.names}>{names}</Text>
                  {
                    (size(attendees) - 3 > 0)
                      ? <Text style={styles.names}> & {size(attendees) - 3} more</Text>
                      : null
                  }
                </Text>
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
