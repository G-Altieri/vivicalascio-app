import * as React from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/home'
import SceltaCacciaScreen from './screens/sceltaCaccia'
import IndovinelloScreen from './screens/indovinello'
import DettagliSceltaCacciaScreen from './screens/dettagliCaccia'
import Maps from './screens/maps'
import { AlertDialog, Center, NativeBaseProvider } from "native-base";



const Stack = createNativeStackNavigator();
class NavigatorFunc extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }

  }


  render() {
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
          <Stack.Screen name="DettagliSceltaCacciaScreen"
            options={{
              initialRouteName: 'Info Caccia al tesoro',
              headerBackVisible: true,
              title: 'Info Caccia al tesoro',
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
            }}
            component={DettagliSceltaCacciaScreen} />

          <Stack.Screen name="IndovinelloScreen"
            options={{
              initialRouteName: 'IndovinelloScreen',
              headerBackVisible: true,
              title: 'Indovinello ',
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
            }}
            getId={({ params }) =>  Math.floor(Math.random() * 50)}
            key={({ params }) =>  Math.floor(Math.random() * 50)}
            component={IndovinelloScreen} />
          <Stack.Screen name="Maps"
            options={{
              headerBackVisible: true,
              title: 'Mappa',
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
            }}
            getId={({ params }) =>  Math.floor(Math.random() * 50)}
            key={({ params }) =>  Math.floor(Math.random() * 50)}
            component={Maps} />
        </Stack.Navigator>

      </NavigationContainer>
    );
  }

}









const styles = StyleSheet.create({


});



export default NavigatorFunc;