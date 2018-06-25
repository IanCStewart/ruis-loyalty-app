import { StyleSheet } from 'react-native';
import fade from 'anchor-ui-native/config/fade';

export default theme => StyleSheet.create({
  container: {
    marginLeft: 29,
    marginRight: 29,
    marginBottom: 16,
    height: 110,
    backgroundColor: theme.colors.white,
    borderRadius: 8,
    overflow: 'hidden',
    flexDirection: 'row'
  },
  eventImageContainer: {
    position: 'relative'
  },
  image: {
    height: 110,
    width: 96,
    flexShrink: 0,
    backgroundColor: theme.colors.darkGray
  },
  gradient: {
    width: 96,
    height: 110,
    position: 'absolute',
    top: 0,
    left: 0
  },
  liked: {
    position: 'absolute',
    top: 8,
    left: 8
  },
  textContainer: {
    flex: 1,
    paddingTop: 12,
    paddingBottom: 6,
    paddingLeft: 16,
    paddingRight: 16
  },
  title: {
    fontSize: 20,
    ...theme.fonts.bold,
    color: theme.colors.brown
  },
  date: {
    fontSize: 14,
    ...theme.fonts.bold,
    color: fade(theme.colors.brown, 0.15),
    marginBottom: 2,
    marginTop: 2
  },
  description: {
    fontSize: 12,
    ...theme.fonts.book,
    lineHeight: 12,
    color: fade(theme.colors.brown, 0.3)
  },
  attendeeContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  attendeeImagesContainer: {
    flexDirection: 'row',
    position: 'relative'
  },
  attendeeImageContainer: {
    width: 19,
    height: 19,
    backgroundColor: theme.colors.white,
    borderRadius: 9.5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  attendeeImage: {
    width: 17,
    height: 17,
    borderRadius: 8.5,
    backgroundColor: theme.colors.darkGray
  },
  names: {
    fontSize: 9,
    ...theme.fonts.book,
    color: fade(theme.colors.brown, 0.55)
  },
});
