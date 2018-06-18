import { StyleSheet } from 'react-native';

export default (safeArea) => StyleSheet.create({
  container: {
    backgroundColor: '#2E2E2E',
    paddingTop: safeArea.top + 44
  },
  activityIndicatorContainer: {
    backgroundColor: '#2E2E2E',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  heading: {
    fontSize: 38,
    fontWeight: "800",
    color: 'white',
    paddingTop: 8,
    paddingLeft: 29
  },
  row: {
    borderBottomWidth: 1,
    borderColor: "#000",
    padding: 10
  },
  title: {
    fontSize: 15,
    fontWeight: "600",
    color: 'white'
  },
  description: {
    marginTop: 5,
    fontSize: 14,
    color: 'white'
  }
});
