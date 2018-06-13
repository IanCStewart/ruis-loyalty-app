import { createBottomTabNavigator } from 'react-navigation';
import HomeStack from './home';
import Events from '../screens/events';
import Qr from '../screens/qr';
import Deals from '../screens/deals';
import Profile from '../screens/profile';

const Tabs = createBottomTabNavigator(
  {
    Home: HomeStack,
    Events: { screen: Events },
    QR: { screen: Qr },
    Deals: { screen: Deals },
    Profile: { screen: Profile }
  },
  {
    tabBarOptions: {
      activeTintColor: '#4B77BE',
      style: {
        backgroundColor: '#212121'
      }
    }
  }
);

export default Tabs;
