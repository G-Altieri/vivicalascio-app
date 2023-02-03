import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/home'
import SceltaCacciaScreen from './screens/sceltaCaccia'

const Stack = createNativeStackNavigator();

function NavigatorFunc() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' >
        <Stack.Screen name="Home" options={{
          headerShown: false,
          animationTypeForReplace: 'push',
          presentation: 'modal',
          animation: 'flip'
        }} component={HomeScreen} />

        <Stack.Screen name="SceltaCaccia"
          options={{
            headerShown: true,
            animation: 'flip',
            presentation: 'modal',
            animationTypeForReplace: 'push',
          }} component={SceltaCacciaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const config = {
  animation: 'spring',
  config: {
    stiffness: 100,
    damping: 20,
    mass: 0,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};


export default NavigatorFunc;