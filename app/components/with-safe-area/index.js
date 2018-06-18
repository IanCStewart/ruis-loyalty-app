import React from 'react';
import { Dimensions } from 'react-native';
import wrapDisplayName from 'recompose/wrapDisplayName';
import hoistStatics from 'hoist-non-react-statics';
import { getSafeArea } from '../../utils/platform';

const withSafeArea = (Component) => {
  class SafeAreaComponent extends React.Component {
    state = {
      screen: null
    }

    static getDerivedStateFromProps(props, state) {
      if (state.screen === null) {
        const screen = Dimensions.get('screen');

        return {
          screen
        };
      }

      return null;
    }

    componentDidMount() {
      Dimensions.addEventListener('change', this.handleDimensionsChange);
    }

    componentWillUnmount() {
      Dimensions.removeEventListener('change', this.handleDimensionsChange);
    }

    handleDimensionsChange = (dimensions) => {
      this.setState({
        screen: dimensions.screen
      });
    }

    render() {
      const { screen } = this.state;

      const safeArea = getSafeArea(screen);

      return <Component {...this.props} safeArea={safeArea} />;
    }
  }

  SafeAreaComponent.displayName = wrapDisplayName(Component, 'withSafeArea');

  return hoistStatics(SafeAreaComponent, Component);
};

export default withSafeArea;