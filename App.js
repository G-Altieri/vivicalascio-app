/*
import * as React from 'react';
import { View, Text } from 'react-native';
import Navigator from './app/navigator';
import { NativeBaseProvider, Box,Button } from "native-base";


function App() {
  return (
    <View>
    <Text style={{fontSize:50, color:'red', marginTop:100}}>Giovanni2</Text>
    <NativeBaseProvider>
    <Button shadow={2} onPress={() => console.log("hello world")}>
    Premi
    </Button>
    <Navigator /> 
    </NativeBaseProvider>
    </View>
    );
  }
  
  export default App;
  
  */


import * as React from 'react';
import { View, Text, Appearance } from 'react-native';
//import { AppearanceProvider } from 'react-native-appearance';
import { NativeBaseProvider, Box, Button } from "native-base";
import Navigator from './app/navigator';

function App() {
  return (
   // <AppearanceProvider>
      <NativeBaseProvider  >
        <Navigator />
      </NativeBaseProvider>
  //  </AppearanceProvider>
  );
}

export default App;