import { connect } from 'react-redux';
import compose from 'recompose/compose';
import WithTheme from 'anchor-ui-native/with-theme';
import WithSafeArea from 'anchor-ui-native/with-safe-area';
import Deals from './component';
import { getNews, getNewsSuccess } from '../../actions/news';

const mapStateToProps = state => ({
  loading: state.news.loading,
  data: state.news.data
});

const mapDispatchToProps = dispatch => ({
  getNews: () => dispatch(getNews()),
  getNewsSuccess: () => dispatch(getNewsSuccess())
});

const enhance = compose(
  WithTheme,
  WithSafeArea,
  connect(mapStateToProps, mapDispatchToProps)
);

export default enhance(Deals);
