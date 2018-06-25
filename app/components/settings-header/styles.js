import { StyleSheet } from 'react-native';
import fade from 'anchor-ui-native/config/fade';

export default (theme, safeArea, progress) => StyleSheet.create({
  container: {
    backgroundColor: theme.colors.darkGray,
    shadowColor: '#121112',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 6,
    elevation: 1
  },
  contentContainer: {
    paddingTop: 35 + safeArea.top,
    paddingBottom: 35,
    paddingLeft: 29 + safeArea.left,
    paddingRight: 29 + safeArea.right,
    alignItems: 'center'
  },
  avatar: {
    width: 125,
    height: 125,
    borderRadius: 62.5,
    backgroundColor: theme.colors.gray
  },
  heading: {
    color: theme.colors.lighterBrown,
    fontSize: 24,
    ...theme.fonts.boldCondensedOblique,
    marginTop: 20
  },
  subtitle: {
    color: fade(theme.colors.lighterBrown, 0.22),
    fontSize: 16,
    ...theme.fonts.bookCondensed
  },
  textContainer: {
    flexDirection: 'row',
    backgroundColor: fade(theme.colors.brown, 0.6)
  },
  coins: {
    color: theme.colors.lighterBrown,
    fontSize: 16,
    ...theme.fonts.bookCondensed
  },
  rankingTitle: {
    color: theme.colors.lighterBrown,
    fontSize: 16,
    ...theme.fonts.bookCondensed,
  },
  ranking: {
    color: fade(theme.colors.lighterBrown, 0.2),
    fontSize: 13,
    ...theme.fonts.bookCondensed,
    marginTop: 3
  },
  infoContainer: {
    alignItems: 'center',
    flex: 1,
    borderColor: fade(theme.colors.white, 0.86),
    paddingTop: 19,
    paddingBottom: 18
  },
  progressBar: {
    width: 93,
    height: 8,
    borderRadius: 10,
    backgroundColor: theme.colors.brown,
    marginTop: 5
  },
  progressIndicator: {
    width: `${progress}%`,
    height: 8,
    borderRadius: 10,
    backgroundColor: '#4B77BE'
  }
});
