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
    marginTop: 20,
    marginBottom: 4,
    paddingLeft: 29,
    paddingRight: 29
  },
  image: {
    flex: 1,
    maxWidth: 306,
    maxHeight: 306,
    marginRight: 29,
    marginLeft: 29,
    alignSelf: 'center'
  }
});
