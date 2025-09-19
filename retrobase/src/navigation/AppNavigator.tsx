import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import CustomDrawer from './custom-navs/CustomDrawer';

import DashboardScreen from '../features/dashboard/DashboardScreen'
import ConsolesIndexScreen from '../features/consoles/ConsolesIndexScreen';
import GamesIndexScreen from '../features/games/GamesIndexScreen';
import ProfileScreen from '../features/profile/ProfileScreen';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
    return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Dashboard" component={DashboardScreen} />
      <Drawer.Screen name="Consoles" component={ConsolesIndexScreen} />
      <Drawer.Screen name="Games" component={GamesIndexScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
       <DrawerNavigator />;
    </NavigationContainer>
  );
}