import { StyleSheet } from 'react-native';

export default () => StyleSheet.create({
  container: {
    backgroundColor: '#2E2E2E'
  },
  activityIndicatorContainer: {
    backgroundColor: '#2E2E2E',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  heading: {
    color: '#D9D4D5',
    fontSize: 38,
    fontFamily: 'avant-garde-bold-condensed-italic',
    marginTop: 30,
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
