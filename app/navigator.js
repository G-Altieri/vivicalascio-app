import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer, Image } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/home'
import SceltaCacciaScreen from './screens/sceltaCaccia'
import IndovinelloScreen from './screens/indovinello'
import { Icon } from "native-base";
import { Path, G, SvgUri, } from "react-native-svg-uri";

const iconMapSrc = require('../assets/iconMap.svg');

const Stack = createNativeStackNavigator();
function NavigatorFunc() {
  var x = '1'
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HomeScreen' >
        <Stack.Screen name="Home" options={{
          headerShown: false,
          animationTypeForReplace: 'push',
          presentation: 'modal',
          animation: 'flip'
        }} component={HomeScreen} />

        <Stack.Screen name="SceltaCacciaScreen"
          options={{
            title: 'Scegli il tuo destino',
            headerStyle: {
              backgroundColor: '#188FA7',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerShown: true,
            animation: 'flip',
            presentation: 'modal',
            animationTypeForReplace: 'push',
          }} component={SceltaCacciaScreen} />


        <Stack.Screen name="IndovinelloScreen"

          options={{
            headerBackVisible: false,
            headerRight: buttonIndovinelli,
            title: 'Indovinello ' + x,
            headerStyle: {
              backgroundColor: '#188FA7',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerShown: true,
            animation: 'flip',
            presentation: 'modal',
            animationTypeForReplace: 'push',
          }} component={IndovinelloScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



const buttonIndovinelli = () => {
  return (
    <>
      {/* <Button
        onPress={() => alert('This is a button!')}
        title="Info"
        color="#000"
      /> */}

      <SvgUri
        width="200"
        height="200"
        svgXmlData={iconMapSrc}
      />

    </>
  )
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