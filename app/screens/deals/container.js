import { connect } from 'react-redux';
import compose from 'recompose/compose';
import WithTheme from 'anchor-ui-native/with-theme';
import WithSafeArea from 'anchor-ui-native/with-safe-area';
import Deals from './component';
import { getDeals, getDealsSuccess } from '../../actions/deals';

const mapStateToProps = state => ({
  loading: state.deals.loading,
  data: state.deals.data
});

const mapDispatchToProps = dispatch => ({
  getDeals: () => dispatch(getDeals()),
  getDealsSuccess: () => dispatch(getDealsSuccess())
});

const enhance = compose(
  WithTheme,
  WithSafeArea,
  connect(mapStateToProps, mapDispatchToProps)
);

export default enhance(Deals);
