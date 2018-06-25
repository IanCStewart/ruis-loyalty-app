import { connect } from 'react-redux';
import compose from 'recompose/compose';
import WithTheme from 'anchor-ui-native/with-theme';
import Profile from './component';

const enhance = compose(
  WithTheme,
  connect()
);

export default enhance(Profile);
