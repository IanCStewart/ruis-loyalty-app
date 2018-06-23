import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

const propTypes = {
  color: PropTypes.string,
  iconStyle: Svg.propTypes.style
};

const defaultProps = {
  color: '#F8F8F8',
  iconStyle: {}
};

const IconHeart = ({ color, iconStyle }) => (
  <Svg width="16" height="14" viewBox="0 0 16 14" style={iconStyle}>
    <Path d="M13.8926412,2.73592937 C13.0863322,1.92982362 12.0145733,1.48571341 10.8745211,1.48571341 C9.84281547,1.48571341 8.8668582,1.8492977 8.09329996,2.51585786 C8.09329996,2.51585786 8.09329996,2.51585786 8.09329996,2.51585786 L8.09329996,2.51585786 C8.03965459,2.56208303 7.96023946,2.56202409 7.90666277,2.51571935 C7.90484164,2.51410382 7.90306387,2.51257223 7.90135002,2.51110078 C7.1285091,1.84756801 6.15492239,1.48571341 5.12547892,1.48571341 C3.98542668,1.48571341 2.91346457,1.92982362 2.10735881,2.73592937 C1.30125306,3.54203512 0.857142857,4.61399724 0.857142857,5.75425273 C0.857142857,6.89450822 1.30125306,7.96626708 2.10735881,8.77237283 L7.29300704,13.9575902 C7.68353052,14.3480867 8.31666728,14.3480812 8.70718402,13.957578 L13.8926412,8.77237283 C14.6989502,7.96626708 15.1428571,6.89430496 15.1428571,5.75425273 C15.1428571,4.61420049 14.6989502,3.54203512 13.8926412,2.73592937 Z" fillOpacity="0.820000052" fill={color} />
  </Svg>
);

// {/* <svg width="16px" height="14px" viewBox="0 0 16 14">
// <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
// <g id="Cards/Event-Card---3-Friends/Liked" transform="translate(-8.000000, -9.000000)">
// <g id="Cards/Event-Card---3-Friends">
// <g id="Glyphs/Navigation-or-Toolbar/Heart---Filled/Translucent" transform="translate(8.000000, 8.000000)">
// <g id="Glyphs/Navigation-or-Toolbar/Hear---Filled/White">
//
// </g>
// </g>
// </g>
// </g>
// </g>
// </svg> */}

IconHeart.propTypes = propTypes;
IconHeart.defaultProps = defaultProps;
IconHeart.displayName = 'IconHeart';

export default IconHeart;
