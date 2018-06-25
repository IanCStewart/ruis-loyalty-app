import { connect } from 'react-redux';
import compose from 'recompose/compose';
import WithTheme from 'anchor-ui-native/with-theme';
import get from 'lodash/get';
import Detail from './component';

const mapStateToProps = (state, ownProps) => {
  const featuredImage = get(ownProps.navigation.state.params, 'item.featuredImage', 'https://source.unsplash.com/1600x900/?event');
  const title = get(ownProps.navigation.state.params, 'item.title');

  return {
    imageSource: { uri: featuredImage },
    title
  };
};

const enhance = compose(
  WithTheme,
  connect(mapStateToProps)
);

export default enhance(Detail);
