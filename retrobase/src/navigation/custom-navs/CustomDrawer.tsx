import React from 'react';
import { DrawerContent, DrawerContentScrollView } from '@react-navigation/drawer';
import { View, Text } from 'react-native';

export default function CustomDrawer(props : any) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerContent {...props}/>
      <View>
        <Text>I AM IN THE CUSTOM BITCH BRUH</Text>
      </View>
    </DrawerContentScrollView>
  );
}