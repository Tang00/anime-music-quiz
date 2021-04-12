import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import ChoiceScreen from './screens/ChoiceScreen';
import SelectionScreen from './screens/SelectionScreen';
import ResultScreen from './screens/ResultScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} />
        <Stack.Screen 
          name="Choice" 
          component={ChoiceScreen} 
          options={() => ({ gestureEnabled: false, headerLeft: null})}/>
        <Stack.Screen 
          name="Selection" 
          component={SelectionScreen} 
          options={() => ({ gestureEnabled: false, headerLeft: null})}/>
        <Stack.Screen 
          name="Result" 
          component={ResultScreen}
          options={() => ({ gestureEnabled: false, headerLeft: null })}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
