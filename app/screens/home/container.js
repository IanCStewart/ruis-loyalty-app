import { connect } from 'react-redux';
import compose from 'recompose/compose';
import withTheme from 'anchor-ui-native/with-theme';
import Home from './component';
import { getData, getDataSuccess } from '../../actions/sample-data';

const mapStateToProps = state => ({
  loading: state.sampleData.loading,
  data: state.sampleData.data
});

const mapDispatchToProps = dispatch => ({
  getData: () => dispatch(getData()),
  getDataSuccess: () => dispatch(getDataSuccess())
});

const enhance = compose(
  withTheme,
  connect(mapStateToProps, mapDispatchToProps)
);

export default enhance(Home);
