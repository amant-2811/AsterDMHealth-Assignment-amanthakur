/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {MyStackNavigation} from './src/navigation/stackNavigation/MyStackNavigation';

function App() {
  return (
    <NavigationContainer>
      <MyStackNavigation />
    </NavigationContainer>
  );
}

export default App;
