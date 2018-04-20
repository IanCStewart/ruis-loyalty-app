import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  root: {
    flex:1,
    backgroundColor: '#F5F5F5',
    paddingTop:20
  },
  activityIndicatorContainer: {
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  row: {
    borderBottomWidth: 1,
    borderColor: "#ccc",
    padding: 10
  },
  title: {
    fontSize: 15,
    fontWeight: "600"
  },
  description: {
    marginTop: 5,
    fontSize: 14
  }
});
