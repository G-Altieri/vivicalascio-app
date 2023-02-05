import * as React from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/home'
import SceltaCacciaScreen from './screens/sceltaCaccia'
import IndovinelloScreen from './screens/indovinello'
import Maps from './screens/maps'
import { AlertDialog, Center, NativeBaseProvider } from "native-base";



const Stack = createNativeStackNavigator();
class NavigatorFunc extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      x: '1'
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

          <Stack.Screen name="IndovinelloScreen"
            options={{
              initialRouteName: 'IndovinelloScreen',
              headerBackVisible: false,
              title: 'Indovinello ' + this.state.x,
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
            component={IndovinelloScreen} />
          <Stack.Screen name="Maps"
            options={{
             
            }}
            component={Maps} />
        </Stack.Navigator>

      </NavigationContainer>
    );
  }

}









const styles = StyleSheet.create({


});



export default NavigatorFunc;