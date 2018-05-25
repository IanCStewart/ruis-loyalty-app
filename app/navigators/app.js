import { TabNavigator } from 'react-navigation';
import Home from '../screens/home';
import Events from '../screens/events';
import Qr from '../screens/qr';
import Deals from '../screens/deals';
import Profile from '../screens/profile';

const Tabs = TabNavigator(
  {
    Home: { screen: Home },
    Events: { screen: Events },
    QR: { screen: Qr },
    Deals: { screen: Deals },
    Profile: { screen: Profile }
  },
  {
    tabBarOptions: {
      activeTintColor: '#4B77BE',
      style: {
        backgroundColor: 'rgba(33,33,33,0.72)'
      }
    },
    tabBarPosition: 'bottom'
  }
);

export default Tabs;
