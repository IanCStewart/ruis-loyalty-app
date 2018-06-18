import { connect } from 'react-redux';
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
