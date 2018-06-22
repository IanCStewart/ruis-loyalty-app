import { connect } from 'react-redux';
import compose from 'recompose/compose';
import withTheme from 'anchor-ui-native/with-theme';
import withSafeArea from 'anchor-ui-native/with-safe-area';
import Events from './component';

const enhance = compose(
  withTheme,
  withSafeArea,
  connect()
);

export default enhance(Events);
