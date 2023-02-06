import React, { setState } from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, ImageBackground } from 'react-native';
import { NativeBaseProvider, Box, Button, Center, Image } from "native-base";



const imageBgSrc = require('../../assets/bg_carta.jpg');
const imagePercorsoSrc = require('../../assets/imgPercorso.png');
const imageCastelloSrc = require('../../assets/castello.png');
const win = Dimensions.get('window');

const WidthImagePercorso = 1408;
const HeightImagePercorso = 974;
const RatioImagePercorso = win.width / WidthImagePercorso;


export default class HomeScreen extends React.Component {
  state = {

  }

  changeScreenSceltaCaccia = () => this.props.navigation.navigate('SceltaCacciaScreen');



  render() {
    return (
      <ImageBackground source={imageBgSrc} resizeMode="cover" style={styles.imageBg}>
        <Box style={styles.BarHome}>
          <Image style={styles.imageCastello} source={imageCastelloSrc}
            alt="Alternate Text"
          />
          <Text style={styles.BarHomeTitle}>Vivi Calascio</Text>

        </Box>
        <View style={{ flex: 1 / 2, backgroundColor: 'yellow', alignItems: 'center', justifyContent: 'flex-end' }}>
      
        </View>

        <View style={styles.containerView2}>
          <Button shadow={2} onPress={this.changeScreenSceltaCaccia} style={styles.buttonCacciaTesoro}>
            Scegli la tua caccia al tesoro
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
  BarHome: {
    width: win.width,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#188FA7',
  },
  BarHomeTitle: {
    color: 'white',
    fontSize: 25,
    fontWeight: '800',
    alignSelf: 'center',
    marginTop: 14,
    marginLeft: 6
  }, imageCastello: {
    width: 35,
    height: 35,
  }

});
