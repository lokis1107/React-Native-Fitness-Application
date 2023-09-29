import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Workout from '../screens/Workout';
import Fit from '../screens/Fit';
import Rest from '../screens/Rest';

const Stack = createNativeStackNavigator();

const Appnavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Workout"
        component={Workout}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Fit"
        component={Fit}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Rest"
        component={Rest}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Appnavigation;
