import React from 'react';
import { createDrawerNavigator } from 'react-navigation';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import HomeView from '../views/HomeView';
import SettingsView from '../views/SettingsView';

const Drawer = createDrawerNavigator({
  Home: {
    screen: HomeView,
    navigationOptions: {
      drawerLabel: 'Home',
      drawerIcon: ({ tintColor }) => <MaterialIcons name='home' size={26} color={tintColor} />
    }
  },
  Settings: {
    screen: SettingsView,
    navigationOptions: {
      drawerLabel: 'Settings',
      drawerIcon: ({ tintColor }) => <MaterialIcons name='settings' size={26} color={tintColor} />
    }
  }

});

export default Drawer;