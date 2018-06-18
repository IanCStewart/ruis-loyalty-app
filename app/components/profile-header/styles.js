import { StyleSheet } from 'react-native';

export default () => StyleSheet.create({
  container: {
    backgroundColor: '#212121',
    paddingTop: 35,
    paddingBottom: 35,
    paddingLeft: 29,
    paddingRight: 29,
    flexDirection: 'row'
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#2E2E2E'
  },
  textContainer: {
    justifyContent: 'center',
    paddingLeft: 14
  },
  heading: {
    color: '#D9D4D5',
    fontSize: 24,
    fontWeight: '800',
    fontStyle: 'italic',
    marginBottom: 4
  },
  coins: {
    color: '#D9D4D5',
    fontSize: 10,
    paddingLeft: 9
  },
  ranking: {
    color: '#D9D4D5',
    fontSize: 13,
    marginTop: 4
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  progressBar: {
    width: 93,
    height: 8,
    borderRadius: 10,
    backgroundColor: '#51474A'
  },
  progressIndicator: {
    width: '40%',
    height: 8,
    borderRadius: 10,
    backgroundColor: '#4B77BE'
  }
});
