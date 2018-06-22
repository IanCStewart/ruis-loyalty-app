import { StyleSheet } from 'react-native';

export default theme => StyleSheet.create({
  container: {
    marginLeft: 29,
    marginRight: 29,
    marginBottom: 16,
    height: 190,
    backgroundColor: theme.colors.darkGray,
    borderRadius: 8
  },
  gradient: {
    padding: 20,
    flex: 1,
    justifyContent: 'space-between',
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
