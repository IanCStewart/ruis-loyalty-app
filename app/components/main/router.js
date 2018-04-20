import { TabNavigator } from 'react-navigation';
import Instructions from '../instructions';
import Settings from '../settings';

const Tabs = TabNavigator({
  Home: { screen: Instructions },
  Settings: { screen: Settings },
});

export default Tabs;
