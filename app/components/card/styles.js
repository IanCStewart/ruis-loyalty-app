import { StyleSheet } from 'react-native';

export default theme => StyleSheet.create({
  container: {
    padding: 20,
    marginLeft: 29,
    marginRight: 29,
    height: 190,
    justifyContent: 'space-between',
    backgroundColor: theme.colors.darkGray,
    borderRadius: 8
  },
  subTitle: {
    fontSize: 12,
    ...theme.fonts.book,
    color: theme.colors.white
  },
  title: {
    fontSize: 23,
    ...theme.fonts.book,
    color: theme.colors.white,
    marginTop: 12
  }
});
