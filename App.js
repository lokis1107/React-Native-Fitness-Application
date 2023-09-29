import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Appnavigation from './navigation/Appnavigation';
import {FintnessCart} from './Context';

const App = () => {
  return (
    <FintnessCart>
      <NavigationContainer>
        <StatusBar hidden />
        <Appnavigation />
      </NavigationContainer>
    </FintnessCart>
  );
};

export default App;
