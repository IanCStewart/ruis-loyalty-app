import { connect } from 'react-redux';
import compose from 'recompose/compose';
import withTheme from 'anchor-ui-native/with-theme';
import withSafeArea from 'anchor-ui-native/with-safe-area';
import Events from './component';
import { getEvents, getEventsSuccess } from '../../actions/events';

const mapStateToProps = state => ({
  loading: state.events.loading,
  data: state.events.data
});

const mapDispatchToProps = dispatch => ({
  getEvents: () => dispatch(getEvents()),
  getEventsSuccess: () => dispatch(getEventsSuccess())
});

const enhance = compose(
  withTheme,
  withSafeArea,
  connect(mapStateToProps, mapDispatchToProps)
);

export default enhance(Events);
