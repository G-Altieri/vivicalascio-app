import React, { setState } from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, } from 'react-native';
import { NativeBaseProvider, Box, Button, Center, Image } from "native-base";





export default class HomeScreen extends React.Component {
  state = {

  }

  render() {
    const win = Dimensions.get('window');


    const WidthImagePercorso = 1408;
    const HeightImagePercorso = 974;
    const RatioImagePercorso = win.width / WidthImagePercorso;



    return (
      <View style={{ flex: 1,    backgroundColor : 'white',}} >
        <View style={{ flex: 1 / 2, alignItems: 'center', justifyContent: 'flex-end' }}>
          <Button shadow={2} onPress={() => this.props.navigation.navigate('SceltaCaccia')} style={{ marginTop: 20 }}>
            Premi per scoprire di piu
          </Button>
        </View>
        <View style={{ flex: 1 / 2, alignItems: 'center', justifyContent: 'flex-end' }}>

          <Box alignSelf="center"
            style={{ marginTop: 10 }}
            _text={{
              fontSize: "md",
              fontWeight: "medium",
              color: "warmGray.50",
              letterSpacing: "lg"
            }} bg={["green.400"]}>
            {this.state.x}
          </Box>


          <Image style={{
            backgroundColor : 'white',
            width: win.width,
            height: HeightImagePercorso * RatioImagePercorso,
          }} source={require('./imgPercorso.png')} alt="Alternate Text" />

        </View>
      </View>
    );
  }




}

