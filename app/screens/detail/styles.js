import { StyleSheet } from 'react-native';

export default theme => StyleSheet.create({
  container: {
    backgroundColor: theme.colors.gray,
    flex: 1
  },
  featuredImage: {
    height: 225,
    backgroundColor: theme.colors.darkGray
  },
  gradient: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingLeft: 29,
    paddingRight: 29
  },
  title: {
    fontSize: 38,
    ...theme.fonts.boldCondensedOblique,
    color: theme.colors.white
  },
  bodyContainer: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 29,
    paddingRight: 29
  },
  body: {
    fontSize: 16,
    ...theme.fonts.book,
    color: theme.colors.white
  },
  date: {
    fontSize: 18,
    ...theme.fonts.bold,
    color: theme.colors.white
  }
});
