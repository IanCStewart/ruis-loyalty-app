import React from 'react';
import PropTypes from 'prop-types';
import Svg, { G, Path } from 'react-native-svg';

const propTypes = {
  color: PropTypes.string,
  iconStyle: PropTypes.object // eslint-disable-line react/forbid-prop-types
};

const defaultProps = {
  color: '#8E8E93',
  iconStyle: {}
};

const IconEvent = ({ color, iconStyle }) => (
  <Svg width="26" height="24" viewBox="0 0 26 24" style={iconStyle}>
    <G transform="translate(-11.000000, -3.000000)" fill={color} fillRule="nonzero">
      <Path d="M30.7602549,4.46153846 L31.9306688,4.46153846 C34.2931006,4.46153846 36.2405106,6.3897573 36.2085858,8.80003085 L36.2085858,24.1615076 C36.2085858,26.5396442 34.2611758,28.5 31.898744,28.5 L16.1598403,28.5 C13.7974085,28.5 11.8499985,26.5396442 11.8499985,24.1615076 L11.8499985,8.80003085 C11.8499985,6.42189428 13.7974085,4.46153846 16.1598403,4.46153846 L16.9782036,4.46153846 L16.9782036,6.70512821 L16.1686972,6.70512821 C15.0194061,6.70512821 14.0935882,7.63710064 14.0935882,8.79403195 L14.0935882,10.9150727 L33.98271,10.9150727 L33.98271,8.79403195 C33.98271,7.63710064 33.0568921,6.70512821 31.907601,6.70512821 L30.7602549,6.70512821 L30.7602549,4.46153846 Z M27.8756395,4.46153846 L27.8756395,6.70512821 L19.862819,6.70512821 L19.862819,4.46153846 L27.8756395,4.46153846 Z M20.6293058,15.3881119 C20.5654563,15.3881119 20.5016068,15.4202489 20.4058326,15.4523858 C20.3419831,15.4845228 20.2781335,15.5166598 20.214284,15.5487968 C20.1504345,15.5809338 20.086585,15.6452077 20.0546603,15.6773447 C19.9908108,15.7416187 19.958886,15.7737557 19.9269613,15.8380296 C19.8950365,15.9023036 19.8631117,15.9665775 19.831187,16.0308515 C19.7992622,16.0951255 19.7673375,16.1593994 19.7673375,16.2558104 C19.7673375,16.3200843 19.7354127,16.4164953 19.7354127,16.4807692 C19.7354127,16.7700021 19.8631117,17.0592349 20.0546603,17.2841937 C20.2781335,17.5091526 20.5654563,17.6055636 20.8527791,17.6055636 C20.9166286,17.6055636 21.0124029,17.6055636 21.0762524,17.5734266 C21.1401019,17.5734266 21.2358762,17.5412896 21.2997257,17.5091526 C21.3635752,17.4770156 21.4274247,17.4448787 21.4912742,17.4127417 C21.5551237,17.3806047 21.6189732,17.3163307 21.650898,17.2841937 C21.8743712,17.0592349 21.9701455,16.7700021 21.9701455,16.4807692 C21.9701455,16.1915364 21.8424465,15.9023036 21.650898,15.6773447 C21.3954999,15.4202489 21.0124029,15.2917009 20.6293058,15.3881119 Z M24.6518249,15.5487968 C24.5879753,15.5166598 24.5241258,15.4845228 24.4602763,15.4523858 C24.3964268,15.4202489 24.3325773,15.3881119 24.236803,15.3881119 C23.8856308,15.3238379 23.5025337,15.4202489 23.2152109,15.7094817 C23.0236624,15.9344406 22.8959634,16.2236734 22.8959634,16.5129062 C22.8959634,16.5771802 22.8959634,16.6735911 22.9278881,16.7378651 C22.9278881,16.802139 22.9598129,16.89855 22.9917376,16.9628239 C23.0236624,17.0270979 23.0555871,17.0913719 23.0875119,17.1556458 C23.1194367,17.2199198 23.1832862,17.2841937 23.2152109,17.3163307 C23.4386842,17.5412896 23.726007,17.6377005 24.0133298,17.6377005 C24.0771793,17.6377005 24.1729535,17.6377005 24.236803,17.6055636 C24.3006526,17.6055636 24.3964268,17.5734266 24.4602763,17.5412896 C24.5241258,17.5091526 24.5879753,17.4770156 24.6518249,17.4448787 C24.7156744,17.4127417 24.7795239,17.3484677 24.8114486,17.3163307 C24.8752981,17.2520568 24.9072229,17.2199198 24.9391476,17.1556458 C24.9710724,17.0913719 25.0029971,17.0270979 25.0349219,16.9628239 C25.0668467,16.89855 25.0987714,16.834276 25.0987714,16.7378651 C25.0987714,16.6735911 25.1306962,16.5771802 25.1306962,16.5129062 C25.1306962,16.2236734 25.0029971,15.9344406 24.8114486,15.7094817 C24.7795239,15.6452077 24.7156744,15.5809338 24.6518249,15.5487968 Z M27.0142567,15.3881119 C26.9504071,15.3881119 26.8865576,15.4202489 26.7907834,15.4523858 C26.7269339,15.4845228 26.6630844,15.5166598 26.5992348,15.5487968 C26.5353853,15.5809338 26.4715358,15.6452077 26.4396111,15.6773447 C26.2480626,15.9023036 26.1203635,16.1915364 26.1203635,16.4807692 C26.1203635,16.5450432 26.1203635,16.6414541 26.1522883,16.7057281 C26.1522883,16.7700021 26.184213,16.866413 26.2161378,16.930687 C26.2480626,16.9949609 26.2799873,17.0592349 26.3119121,17.1235088 C26.3438368,17.1877828 26.4076863,17.2520568 26.4396111,17.2841937 C26.6311596,17.5091526 26.9184824,17.6055636 27.2377299,17.6055636 C27.3015794,17.6055636 27.3973537,17.6055636 27.4612032,17.5734266 C27.5250527,17.5734266 27.620827,17.5412896 27.6846765,17.5091526 C27.748526,17.4770156 27.8123755,17.4448787 27.876225,17.4127417 C27.9400745,17.3806047 28.003924,17.3163307 28.0358488,17.2841937 C28.0996983,17.2199198 28.131623,17.1877828 28.1635478,17.1235088 C28.1954726,17.0592349 28.2273973,16.9949609 28.2593221,16.930687 C28.2912468,16.866413 28.3231716,16.802139 28.3231716,16.7057281 C28.3231716,16.6414541 28.3550963,16.5450432 28.3550963,16.4807692 C28.3550963,16.1915364 28.2273973,15.9023036 28.0358488,15.6773447 C27.7804508,15.4202489 27.3973537,15.2917009 27.0142567,15.3881119 Z M29.6320865,15.6773447 C29.440538,15.9023036 29.3128389,16.1915364 29.3128389,16.4807692 C29.3128389,16.5450432 29.3128389,16.6414541 29.3447637,16.7057281 C29.3447637,16.7700021 29.3766885,16.866413 29.4086132,16.930687 C29.440538,16.9949609 29.4724627,17.0592349 29.5043875,17.1235088 C29.5363122,17.1877828 29.6001617,17.2520568 29.6320865,17.2841937 C29.823635,17.5091526 30.1109578,17.6055636 30.4302053,17.6055636 C30.7494529,17.6055636 31.0048509,17.4770156 31.2283242,17.2841937 C31.2921737,17.2199198 31.3240985,17.1877828 31.3560232,17.1235088 C31.387948,17.0592349 31.4198727,16.9949609 31.4517975,16.930687 C31.4837222,16.866413 31.515647,16.802139 31.515647,16.7057281 C31.515647,16.6414541 31.5475717,16.5450432 31.5475717,16.4807692 C31.5475717,16.1915364 31.4198727,15.9023036 31.2283242,15.6773447 C30.8133024,15.259564 30.0471083,15.259564 29.6320865,15.6773447 Z M17.4368304,18.60181 C17.3729809,18.60181 17.3091314,18.6339469 17.2133572,18.6660839 C17.1175829,18.6982209 17.0856581,18.7303579 17.0218086,18.7624949 C16.9579591,18.7946318 16.8941096,18.8589058 16.8621849,18.8910428 C16.6706363,19.0838647 16.5429373,19.3730975 16.5429373,19.6944673 C16.5429373,19.7587413 16.5429373,19.8551522 16.5748621,19.9194262 C16.5748621,19.9837001 16.6067868,20.0801111 16.6387116,20.144385 C16.6706363,20.208659 16.7025611,20.2729329 16.7344858,20.3372069 C16.7664106,20.4014809 16.8302601,20.4657548 16.8621849,20.4978918 C16.9260344,20.5621658 16.9579591,20.5943028 17.0218086,20.6264397 C17.0856581,20.6585767 17.1495076,20.6907137 17.2133572,20.7228507 C17.2772067,20.7549877 17.3410562,20.7871246 17.4368304,20.7871246 C17.5006799,20.7871246 17.5964542,20.8192616 17.6603037,20.8192616 C17.9476265,20.8192616 18.2349493,20.6907137 18.4584226,20.4978918 C18.5222721,20.4336179 18.5541968,20.4014809 18.5861216,20.3372069 C18.6180463,20.2729329 18.6499711,20.208659 18.6818958,20.144385 C18.7138206,20.0801111 18.7457454,20.0158371 18.7457454,19.9194262 C18.7457454,19.8551522 18.7776701,19.7587413 18.7776701,19.6944673 C18.7776701,19.4052345 18.6499711,19.1160016 18.4584226,18.8910428 C18.2030245,18.6339469 17.8199275,18.505399 17.4368304,18.60181 Z M20.6293058,18.60181 C20.5654563,18.60181 20.5016068,18.6339469 20.4058326,18.6660839 C20.3419831,18.6982209 20.2781335,18.7303579 20.214284,18.7624949 C20.1504345,18.7946318 20.086585,18.8589058 20.0546603,18.8910428 C19.9908108,18.9553167 19.958886,18.9874537 19.9269613,19.0517277 C19.8950365,19.1160016 19.8631117,19.1802756 19.831187,19.2445496 C19.7992622,19.3088235 19.7673375,19.3730975 19.7673375,19.4695084 C19.7673375,19.5337824 19.7354127,19.6301933 19.7354127,19.6944673 C19.7354127,19.7587413 19.7354127,19.8551522 19.7673375,19.9194262 C19.7673375,19.9837001 19.7992622,20.0801111 19.831187,20.144385 C19.8631117,20.208659 19.8950365,20.2729329 19.9269613,20.3372069 C19.958886,20.4014809 20.0227355,20.4657548 20.0546603,20.4978918 C20.1185098,20.5621658 20.1504345,20.5943028 20.214284,20.6264397 C20.2781335,20.6585767 20.3419831,20.6907137 20.4058326,20.7228507 C20.4696821,20.7549877 20.5335316,20.7871246 20.6293058,20.7871246 C20.6931553,20.7871246 20.7889296,20.8192616 20.8527791,20.8192616 C21.1401019,20.8192616 21.4274247,20.6907137 21.650898,20.4978918 C21.8743712,20.2729329 21.9701455,20.0158371 21.9701455,19.6944673 C21.9701455,19.3730975 21.8424465,19.1160016 21.650898,18.8910428 C21.3954999,18.6339469 21.0124029,18.505399 20.6293058,18.60181 Z M25.0668467,19.2766865 C25.0349219,19.2124126 25.0029971,19.1481386 24.9710724,19.0838647 C24.9391476,19.0195907 24.8752981,18.9553167 24.8433734,18.9231798 C24.7795239,18.8589058 24.7475991,18.8267688 24.6837496,18.7946318 C24.6199001,18.7624949 24.5560506,18.7303579 24.4922011,18.6982209 C24.4283516,18.6660839 24.3645021,18.6339469 24.2687278,18.6339469 C23.9175555,18.569673 23.5344585,18.6660839 23.2471357,18.9553167 C23.1832862,19.0195907 23.1513614,19.0517277 23.1194367,19.1160016 C23.0875119,19.1802756 23.0555871,19.2445496 23.0236624,19.3088235 C22.9917376,19.3730975 22.9598129,19.4373715 22.9598129,19.5337824 C22.9598129,19.5980564 22.9278881,19.6944673 22.9278881,19.7587413 C22.9278881,19.8230152 22.9278881,19.9194262 22.9598129,19.9837001 C22.9598129,20.0479741 22.9917376,20.144385 23.0236624,20.208659 C23.0555871,20.2729329 23.0875119,20.3372069 23.1194367,20.4014809 C23.1513614,20.4657548 23.2152109,20.5300288 23.2471357,20.5621658 C23.470609,20.7871246 23.7579317,20.8835356 24.0452545,20.8835356 C24.109104,20.8835356 24.2048783,20.8835356 24.2687278,20.8513986 C24.3325773,20.8513986 24.4283516,20.8192616 24.4922011,20.7871246 C24.5560506,20.7549877 24.6199001,20.7228507 24.6837496,20.6907137 C24.7475991,20.6585767 24.8114486,20.5943028 24.8433734,20.5621658 C24.9072229,20.4978918 24.9391476,20.4657548 24.9710724,20.4014809 C25.0029971,20.3372069 25.0349219,20.2729329 25.0668467,20.208659 C25.0987714,20.144385 25.1306962,20.0801111 25.1306962,19.9837001 C25.1306962,19.9194262 25.1626209,19.8230152 25.1626209,19.7587413 C25.1626209,19.6944673 25.1626209,19.5980564 25.1306962,19.5337824 C25.1306962,19.4052345 25.0987714,19.3409605 25.0668467,19.2766865 Z M27.0142567,18.60181 C26.9504071,18.60181 26.8865576,18.6339469 26.7907834,18.6660839 C26.6950091,18.6982209 26.6630844,18.7303579 26.5992348,18.7624949 C26.5353853,18.7946318 26.4715358,18.8589058 26.4396111,18.8910428 C26.2480626,19.0838647 26.1203635,19.3730975 26.1203635,19.6944673 C26.1203635,20.0158371 26.2480626,20.2729329 26.4396111,20.4978918 C26.6311596,20.7228507 26.9184824,20.8192616 27.2377299,20.8192616 C27.5569775,20.8192616 27.8123755,20.6907137 28.0358488,20.4978918 C28.2593221,20.2729329 28.3550963,20.0158371 28.3550963,19.6944673 C28.3550963,19.3730975 28.2273973,19.1160016 28.0358488,18.8910428 C27.7804508,18.6339469 27.3973537,18.505399 27.0142567,18.60181 Z M31.4517975,19.2766865 C31.4198727,19.2124126 31.387948,19.1481386 31.3560232,19.0838647 C31.3240985,19.0195907 31.2602489,18.9553167 31.2283242,18.9231798 C30.8133024,18.505399 30.079033,18.505399 29.6320865,18.9231798 C29.440538,19.1160016 29.3128389,19.4052345 29.3128389,19.7266043 C29.3128389,20.0479741 29.440538,20.3050699 29.6320865,20.5300288 C29.823635,20.7549877 30.1109578,20.8513986 30.4302053,20.8513986 C30.7494529,20.8513986 31.0048509,20.7228507 31.2283242,20.5300288 C31.4517975,20.3050699 31.5475717,20.0479741 31.5475717,19.7266043 C31.5475717,19.6623303 31.5475717,19.5659194 31.515647,19.5016454 C31.515647,19.4052345 31.4837222,19.3409605 31.4517975,19.2766865 Z M16.8621849,22.1047408 C16.7983354,22.1690148 16.7664106,22.2011518 16.7344858,22.2654258 C16.7025611,22.3296997 16.6706363,22.3939737 16.6387116,22.4582476 C16.6067868,22.5225216 16.5748621,22.5867956 16.5748621,22.6832065 C16.5748621,22.7474805 16.5429373,22.8438914 16.5429373,22.9081654 C16.5429373,23.1973982 16.6706363,23.486631 16.8621849,23.7115899 C17.0856581,23.9365487 17.3729809,24.0329597 17.6603037,24.0329597 C17.9476265,24.0329597 18.2349493,23.9044118 18.4584226,23.7115899 C18.6818958,23.486631 18.7776701,23.2295352 18.7776701,22.9081654 C18.7776701,22.5867956 18.6499711,22.3296997 18.4584226,22.1047408 C18.0434008,21.6869601 17.2772067,21.6869601 16.8621849,22.1047408 Z M20.6293058,21.815508 C20.5654563,21.815508 20.5016068,21.847645 20.4058326,21.879782 C20.3100583,21.911919 20.2781335,21.9440559 20.214284,21.9761929 C20.1504345,22.0083299 20.086585,22.0726039 20.0546603,22.1047408 C19.8631117,22.2975627 19.7354127,22.5867956 19.7354127,22.9081654 C19.7354127,22.9724393 19.7354127,23.0688503 19.7673375,23.1331242 C19.7673375,23.1973982 19.7992622,23.2938091 19.831187,23.3580831 C19.8631117,23.4223571 19.8950365,23.486631 19.9269613,23.550905 C19.958886,23.6151789 20.0227355,23.6794529 20.0546603,23.7115899 C20.1185098,23.7758638 20.1504345,23.8080008 20.214284,23.8401378 C20.2781335,23.8722748 20.3419831,23.9044118 20.4058326,23.9365487 C20.4696821,23.9686857 20.5335316,24.0008227 20.6293058,24.0008227 C20.6931553,24.0008227 20.7889296,24.0329597 20.8527791,24.0329597 C21.1401019,24.0329597 21.4274247,23.9044118 21.650898,23.7115899 C21.7147475,23.6473159 21.7466722,23.6151789 21.778597,23.550905 C21.8105217,23.486631 21.8424465,23.4223571 21.8743712,23.3580831 C21.906296,23.2938091 21.9382208,23.2295352 21.9382208,23.1331242 C21.9382208,23.0688503 21.9701455,22.9724393 21.9701455,22.9081654 C21.9701455,22.6189325 21.8424465,22.3296997 21.650898,22.1047408 C21.3954999,21.847645 21.0124029,21.7190971 20.6293058,21.815508 Z M25.0668467,22.4903846 C25.0349219,22.4261107 25.0029971,22.3618367 24.9710724,22.2975627 C24.9391476,22.2332888 24.8752981,22.1690148 24.8433734,22.1368778 C24.7795239,22.0726039 24.7475991,22.0404669 24.6837496,22.0083299 C24.6199001,21.9761929 24.5560506,21.9440559 24.4922011,21.911919 C24.4283516,21.879782 24.3645021,21.847645 24.2687278,21.847645 C23.9175555,21.783371 23.5344585,21.879782 23.2471357,22.1690148 C23.1832862,22.2332888 23.1513614,22.2654258 23.1194367,22.3296997 C23.0875119,22.3939737 23.0555871,22.4582476 23.0236624,22.5225216 C22.9917376,22.5867956 22.9598129,22.6510695 22.9598129,22.7474805 C22.9598129,22.8117544 22.9278881,22.9081654 22.9278881,22.9724393 C22.9278881,23.0367133 22.9278881,23.1331242 22.9598129,23.1973982 C22.9598129,23.2616722 22.9917376,23.3580831 23.0236624,23.4223571 C23.0555871,23.486631 23.0875119,23.550905 23.1194367,23.6151789 C23.1513614,23.6794529 23.2152109,23.7437269 23.2471357,23.7758638 C23.470609,24.0008227 23.7579317,24.0972336 24.0452545,24.0972336 C24.109104,24.0972336 24.2048783,24.0972336 24.2687278,24.0650967 C24.3325773,24.0650967 24.4283516,24.0329597 24.4922011,24.0008227 C24.5560506,23.9686857 24.6199001,23.9365487 24.6837496,23.9044118 C24.7475991,23.8722748 24.8114486,23.8080008 24.8433734,23.7758638 C25.0668467,23.550905 25.1626209,23.2616722 25.1626209,22.9724393 C25.1626209,22.9081654 25.1626209,22.8117544 25.1306962,22.7474805 C25.1306962,22.6189325 25.0987714,22.5546586 25.0668467,22.4903846 Z M27.0142567,21.815508 C26.9504071,21.815508 26.8865576,21.847645 26.7907834,21.879782 C26.7269339,21.911919 26.6630844,21.9440559 26.5992348,21.9761929 C26.5353853,22.0083299 26.4715358,22.0726039 26.4396111,22.1047408 C26.2480626,22.2975627 26.1203635,22.5867956 26.1203635,22.9081654 C26.1203635,22.9724393 26.1203635,23.0688503 26.1522883,23.1331242 C26.1522883,23.1973982 26.184213,23.2938091 26.2161378,23.3580831 C26.2480626,23.4223571 26.2799873,23.486631 26.3119121,23.550905 C26.3438368,23.6151789 26.4076863,23.6794529 26.4396111,23.7115899 C26.6311596,23.9365487 26.9184824,24.0329597 27.2377299,24.0329597 C27.5569775,24.0329597 27.8123755,23.9044118 28.0358488,23.7115899 C28.0996983,23.6473159 28.131623,23.6151789 28.1635478,23.550905 C28.1954726,23.486631 28.2273973,23.4223571 28.2593221,23.3580831 C28.2912468,23.2938091 28.3231716,23.2295352 28.3231716,23.1331242 C28.3231716,23.0688503 28.3550963,22.9724393 28.3550963,22.9081654 C28.3550963,22.6189325 28.2273973,22.3296997 28.0358488,22.1047408 C27.7804508,21.847645 27.3973537,21.7190971 27.0142567,21.815508 Z M18.4205113,3.5 C19.0400615,3.5 19.5423062,4.00224467 19.5423062,4.62179487 L19.5423062,6.54487179 C19.5423062,7.164422 19.0400615,7.66666667 18.4205113,7.66666667 C17.8009611,7.66666667 17.2987164,7.164422 17.2987164,6.54487179 L17.2987164,4.62179487 C17.2987164,4.00224467 17.8009611,3.5 18.4205113,3.5 Z M29.3179472,3.5 C29.9374974,3.5 30.4397421,4.00224467 30.4397421,4.62179487 L30.4397421,6.54487179 C30.4397421,7.164422 29.9374974,7.66666667 29.3179472,7.66666667 C28.698397,7.66666667 28.1961523,7.164422 28.1961523,6.54487179 L28.1961523,4.62179487 C28.1961523,4.00224467 28.698397,3.5 29.3179472,3.5 Z" />
    </G>
  </Svg>
);

IconEvent.propTypes = propTypes;
IconEvent.defaultProps = defaultProps;
IconEvent.displayName = 'IconHome';

export default IconEvent;
