import React, { setState } from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, ImageBackground } from 'react-native';
import { NativeBaseProvider, Box, Button, Center, Image } from "native-base";



const imageBgSrc = require('../../assets/bg_carta.jpg');
const imagePercorsoSrc = require('../../assets/imgPercorso.png');
const win = Dimensions.get('window');

const WidthImagePercorso = 1408;
const HeightImagePercorso = 974;
const RatioImagePercorso = win.width / WidthImagePercorso;


export default class HomeScreen extends React.Component {
  state = {

  }

  render() {
    return (
      <ImageBackground source={imageBgSrc} resizeMode="cover" style={styles.imageBg}>
        <View style={{ flex: 1 / 2, alignItems: 'center', justifyContent: 'flex-end' }}>
        </View>

        <View style={styles.containerView2}>
          <Button shadow={2} onPress={() => this.props.navigation.navigate('SceltaCaccia')} style={styles.buttonCacciaTesoro}>
            Premi per scoprire di piu
          </Button>
          <Image style={styles.imageCacciaTesoro} source={imagePercorsoSrc}
            alt="Alternate Text"
          />

        </View>
      </ImageBackground>
    );
  }

}


const styles = StyleSheet.create({
  containerView2: {
    flex: 1 / 2,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column'
  },
  buttonCacciaTesoro: {
    borderRadius: 50, backgroundColor: 'red'
  },
  imageBg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', alignItems: 'center',
    width: '100%',
  },
  imageCacciaTesoro: {
    width: win.width,
    height: HeightImagePercorso * RatioImagePercorso,
    alignSelf: 'flex-end'
  },

});
