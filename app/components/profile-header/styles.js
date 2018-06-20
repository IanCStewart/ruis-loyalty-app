import { StyleSheet } from 'react-native';

export default (theme, safeArea, progress) => StyleSheet.create({
  container: {
    backgroundColor: theme.colors.darkGray,
    paddingTop: 35 + safeArea.top,
    paddingBottom: 35,
    paddingLeft: 29 + safeArea.left,
    paddingRight: 29 + safeArea.right,
    flexDirection: 'row'
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: theme.colors.gray
  },
  textContainer: {
    justifyContent: 'center',
    paddingLeft: 14
  },
  heading: {
    color: theme.colors.lighterBrown,
    fontSize: 24,
    ...theme.fonts.boldCondensedOblique
  },
  coins: {
    color: theme.colors.lighterBrown,
    fontSize: 10,
    ...theme.fonts.bookCondensed,
    paddingLeft: 9
  },
  ranking: {
    color: theme.colors.lighterBrown,
    fontSize: 13,
    ...theme.fonts.bookCondensed,
    marginTop: 5
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  progressBar: {
    width: 93,
    height: 8,
    borderRadius: 10,
    backgroundColor: theme.colors.brown
  },
  progressIndicator: {
    width: `${progress}%`,
    height: 8,
    borderRadius: 10,
    backgroundColor: '#4B77BE'
  }
});
