import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HotelMenuScreen from './src/screens/ HotelMenuScreen';
import BreakfastScreen from './src/screens/BreakfastScreen';
import LunchScreen from './src/screens/LunchScreen';
import DinnerScreen from './src/screens/DinnerScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HotelMenu">
        <Stack.Screen name="HotelMenu" component={HotelMenuScreen} />
        <Stack.Screen name="Breakfast" component={BreakfastScreen} />
        <Stack.Screen name="Lunch" component={LunchScreen} />
        <Stack.Screen name="Dinner" component={DinnerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
