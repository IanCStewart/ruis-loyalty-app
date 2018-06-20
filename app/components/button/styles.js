import { StyleSheet } from 'react-native';

export default theme => (
  StyleSheet.create({
    touchableHighlight: {
      borderRadius: 5
    },
    container: {
      height: 24,
      paddingLeft: 14,
      paddingRight: 14,
      paddingTop: 6,
      paddingBottom: 4,
      alignItems: 'center',
      flexDirection: 'row',
      borderRadius: 12,
      borderWidth: 1,
      borderColor: theme.colors.white
    },
    text: {
      fontSize: 14,
      ...theme.fonts.book,
      color: theme.colors.white
    }
  })
);
