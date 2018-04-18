import { connect } from 'react-redux';
import Main from './component';
import { getData } from '../../actions/sample-data';

const mapStateToProps = (state) => ({
  loading: state.sampleData.loading,
  data: state.sampleData.data
})

const mapDispatchToProps = (dispatch) => ({
  getData: () => dispatch(getData())
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
