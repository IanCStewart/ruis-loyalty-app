import { TabNavigator } from 'react-navigation';
import Home from '../home';
import Events from '../events';
import Qr from '../qr';
import Deals from '../deals';
import Profile from '../profile';

const Tabs = TabNavigator({
  Home: { screen: Home },
  Events: { screen: Events },
  QR: { screen: Qr },
  Deals: { screen: Deals },
  Profile: { screen: Profile }
});

export default Tabs;
