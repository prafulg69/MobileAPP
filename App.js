import React from 'react';
import {
  DrawerNavigator,
  StackNavigator,
  TabNavigator
} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from './src/tabs/Home';
import Settings from './src/tabs/Settings';
import Itinerary from './src/tabs/Itinerary';
import Event from './src/tabs/Event';
import Acharya from './src/tabs/Acharya';
import Modal from './src/screens/Modal';
import News from './src/screens/News';
//import Drawerlan from './src/screens/Drawerlan';
import Drawer from './src/components/Drawer';

// Stack navigation for Settings and Profile screens
const SettingsTab = StackNavigator({
  // Settings: {
  //   screen: Settings,
  //   navigationOptions: {
  //     header: null,               // Hide the header
  //     headerBackTitle: 'Back',    // Title back button Back when we navigate to Profile from Settings
  //   },
  // },
  Acharya: {
    screen: Acharya,
    navigationOptions: {
      header: null,               // Hide the header
      headerBackTitle: 'Back',    // Title back button Back when we navigate to Profile from Settings
    },
  },
}, {
  headerMode: 'screen',
});

// Tab navigation for Home and Settings screens
export const TabNavigation = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor, focused }) => <Icon
        name={focused ? 'ios-home' : 'ios-home-outline'}
        size={26}
        style={{ color: tintColor }}
      />
    },
  },
  Event: {
    screen: Event,
    navigationOptions: {
      tabBarLabel: 'Event',
      tabBarIcon: ({ tintColor, focused }) => <Icon
        name={focused ? 'ios-settings' : 'ios-settings-outline'}
        size={26}
        style={{ color: tintColor }}
      />
    },
  },
  Itinerary: {
    screen: Itinerary,
    navigationOptions: {
      tabBarLabel: 'Itinerary',
      tabBarIcon: ({ tintColor, focused }) => <Icon
        name={focused ? 'ios-settings' : 'ios-settings-outline'}
        size={26}
        style={{ color: tintColor }}
      />
    },
  },
},
{
 tabBarPosition: 'bottom',
});

// Wrap tab navigation into drawer navigation
const TabsWithDrawerNavigation = DrawerNavigator({
  Tabs: {
    screen: TabNavigation,
  }
}, {
  // Register custom drawer component
  contentComponent: props => <Drawer {...props} />
});

// And lastly stack together drawer with tabs and modal navigation
// because we want to be able to call Modal screen from any other screen
export default StackNavigator({
  TabsWithDrawer: {
    screen: TabsWithDrawerNavigation,
  },
  Modal: {
    screen: Modal
  },
  News: {
    screen: News
  },
  Drawerlan: {
    screen: SettingsTab,
  },
}, {
  // In modal mode screen slides up from the bottom
  mode: 'modal',
  // No headers for modals. Otherwise we'd have two headers on the screen, one for stack, one for modal.
  headerMode: 'none',
});