import { StyleSheet } from 'react-native';

export default (theme, safeArea) => StyleSheet.create({
  container: {
    backgroundColor: theme.colors.gray
  },
  activityIndicatorContainer: {
    backgroundColor: theme.colors.gray,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  heading: {
    color: theme.colors.lighterBrown,
    fontSize: 38,
    ...theme.fonts.boldCondensedOblique,
    marginTop: safeArea.top + 30,
    paddingLeft: 29
  },
  row: {
    borderBottomWidth: 1,
    borderColor: '#000',
    padding: 10
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    color: 'white'
  },
  description: {
    marginTop: 5,
    fontSize: 14,
    color: 'white'
  }
});
