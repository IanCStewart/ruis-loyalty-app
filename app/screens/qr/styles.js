import { StyleSheet } from 'react-native';

export default theme => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.gray
  },
  pageTitle: {
    color: theme.colors.lighterBrown,
    fontSize: 38,
    ...theme.fonts.boldCondensedOblique,
    marginTop: 30,
    marginBottom: 4,
    paddingLeft: 29,
    paddingRight: 29
  },
  image: {
    flex: 1,
    maxWidth: 263,
    maxHeight: 263,
    alignSelf: 'center'
  }
});
