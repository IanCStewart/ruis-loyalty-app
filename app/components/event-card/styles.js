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
  image: {
    height: 110,
    width: 96,
    flexShrink: 0
  },
  textContainer: {
    flex: 1,
    paddingTop: 14,
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
  }
});
