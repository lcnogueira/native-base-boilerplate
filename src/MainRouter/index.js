import React from 'react';
import { createDrawerNavigator } from 'react-navigation';
import HomeScreen from '../HomeScreen';
import ProfileScreen from '../ProfileScreen';
import SideBar from '../SideBar';

const HomeScreenRouter = createDrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Profile: { screen: ProfileScreen },
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);

export default HomeScreenRouter;