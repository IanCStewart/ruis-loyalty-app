import React from 'react';
import PropTypes from 'prop-types';
import Svg, { G, Rect, Polygon } from 'react-native-svg';

const propTypes = {
  color: PropTypes.string,
  iconStyle: PropTypes.object // eslint-disable-line react/forbid-prop-types
};

const defaultProps = {
  color: '#8E8E93',
  iconStyle: {}
};

const IconHome = ({ color, iconStyle }) => (
  <Svg width="26" height="26" viewBox="0 0 26 26" style={iconStyle}>
    <G fill={color} fillRule="nonzero">
      <Rect id="Rectangle-path" x="0.5" y="0.5" width="7.2915625" height="7.2915625" />
      <Rect id="Rectangle-path" x="0.5" y="18.2084375" width="7.2915625" height="7.2915625" />
      <Rect id="Rectangle-path" x="18.2084375" y="0.5" width="7.2915625" height="7.2915625" />
      <Polygon id="Shape" points="23.4165625 9.875 23.4165625 16.125 18.2084375 16.125 18.2084375 18.2084375 25.5 18.2084375 25.5 9.875" />
      <Polygon id="Shape" points="18.2084375 20.2915625 18.2084375 25.5 20.2915625 25.5 20.2915625 22.375 23.4165625 22.375 23.4165625 25.5 25.5 25.5 25.5 20.2915625" />
      <Polygon id="Shape" points="9.875 0.5 9.875 2.5834375 14.0415625 2.5834375 14.0415625 7.7915625 16.125 7.7915625 16.125 0.5" />
      <Polygon id="Shape" points="14.0415625 9.875 14.0415625 14.0415625 9.875 14.0415625 9.875 20.2915625 14.0415625 20.2915625 14.0415625 25.5 16.125 25.5 16.125 18.2084375 11.9584375 18.2084375 11.9584375 16.125 16.125 16.125 16.125 11.9584375 18.2084375 11.9584375 18.2084375 14.0415625 20.2915625 14.0415625 20.2915625 9.875" />
      <Rect id="Rectangle-path" x="9.875" y="22.375" width="2.0834375" height="3.125" />
      <Rect id="Rectangle-path" x="4.6665625" y="14.0415625" width="3.125" height="2.0834375" />
      <Polygon id="Shape" points="9.875 4.6665625 9.875 9.875 0.5 9.875 0.5 16.125 2.5834375 16.125 2.5834375 11.9584375 11.9584375 11.9584375 11.9584375 4.6665625" />
    </G>
  </Svg>
);

IconHome.propTypes = propTypes;
IconHome.defaultProps = defaultProps;
IconHome.displayName = 'IconHome';

export default IconHome;
