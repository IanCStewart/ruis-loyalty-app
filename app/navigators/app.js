import { createBottomTabNavigator } from 'react-navigation';
import HomeStack from './home';
import EventsStack from './events';
import Qr from '../screens/qr';
import Deals from '../screens/deals';
import Profile from '../screens/profile';
import defaultColors from '../defaults/colors';

const Tabs = createBottomTabNavigator(
  {
    Home: HomeStack,
    Events: EventsStack,
    QR: { screen: Qr },
    Deals: { screen: Deals },
    Profile: { screen: Profile }
  },
  {
    tabBarOptions: {
      activeTintColor: defaultColors.accentBlue,
      style: {
        backgroundColor: defaultColors.darkGray
      }
    }
  }
);

export default Tabs;
