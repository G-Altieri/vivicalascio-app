import React, { setState } from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, ImageBackground, TouchableWithoutFeedback } from 'react-native';
import { NativeBaseProvider, Box, Button, Center, Image, AspectRatio, Heading } from "native-base";



const imageBgSrc = require('../../assets/bg_carta.jpg');
const imageCastelloSrc = require('../../assets/castello.png');
const imagePercorsoSrc = require('../../assets/creaPercorso.png');
const imageCacciaSrc = require('../../assets/cacciaTesoro.png');
const win = Dimensions.get('window');

const WidthImagePercorso = 862;
const HeightImagePercorso = 608;
const RatioImagePercorso = win.width / WidthImagePercorso;
const WidthImageCaccia = 1558;
const HeightImageCaccia = 1062;
const RatioImageCaccia = win.width / WidthImageCaccia;


export default class HomeScreen extends React.Component {

  // changeScreenSceltaCaccia = () => this.props.navigation.navigate('Quiz');
  changeScreenSceltaCaccia = () => this.props.navigation.navigate('SceltaCacciaScreen');
  changeScreenPercorso = () => this.props.navigation.navigate('CreaPercorso');



  render() {
    return (
      <ImageBackground source={imageBgSrc} resizeMode="cover" style={styles.imageBg}>
        <Box style={styles.BarHome}>
          <Image style={styles.imageCastello} source={imageCastelloSrc}
            alt="Alternate Text"
          />
          <Text style={styles.BarHomeTitle}>Vivi Calascio</Text>
        </Box>


        <View style={styles.containerPercorso}>
          <TouchableWithoutFeedback onPress={this.changeScreenPercorso}>
            <Image style={styles.containerImaginePercorso} source={imagePercorsoSrc}
              alt="Alternate Text"
            />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={this.changeScreenPercorso}>
            <Heading size="2xl" fontWeight={700} my={2}>
              Crea il tuo Percorso
            </Heading>
          </TouchableWithoutFeedback>

        </View>

        <View style={styles.containerPercorso}>
        <TouchableWithoutFeedback onPress={this.changeScreenSceltaCaccia}>
          <Image style={styles.containerImagineCaccia} source={imageCacciaSrc}
            alt="Alternate Text"
          />
             </TouchableWithoutFeedback>
           <TouchableWithoutFeedback onPress={this.changeScreenSceltaCaccia}>
          <Heading size="2xl" fontWeight={700} my={2}>
            Caccia al Tesoro
          </Heading>
          </TouchableWithoutFeedback>
        </View>

      </ImageBackground>
    );
  }

}


const styles = StyleSheet.create({
  imageBg: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
  },

  containerImaginePercorso: {
    width: win.width,
    height: HeightImagePercorso * RatioImagePercorso,
    alignSelf: 'flex-start'
  },
  containerImagineCaccia: {
    width: win.width,
    height: HeightImageCaccia * RatioImageCaccia,
    alignSelf: 'flex-start'
  },



  containerPercorso: {
    //  backgroundColor: 'red',
    flex: 1 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
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
  },
  imageCastello: {
    width: 35,
    height: 35,
  }

});
