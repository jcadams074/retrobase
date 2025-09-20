import * as React from 'react';
import AppNavigator from './navigation/AppNavigator';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style ={{flex:1}}>
        <AppNavigator/>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}