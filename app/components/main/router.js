import { TabNavigator } from 'react-navigation';
import Home from '../home';
import Event from '../event';
import Qr from '../qr';
import Deals from '../deals';
import Profile from '../profile';

const Tabs = TabNavigator({
  Home: { screen: Home },
  Event: { screen: Event },
  QR: { screen: Qr },
  Deals: { screen: Deals },
  Profile: { screen: Profile }
});

export default Tabs;
