import React, { setState } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, Alert, ImageBackground } from 'react-native';
import { NativeBaseProvider, Box, Button, Center } from "native-base";




const imageBgSrc = require('../../assets/bg_carta.jpg');

export default class HomeScreen extends React.Component {
    render() {

        return (
            <View style={styles.container}>
                <ImageBackground source={imageBgSrc} resizeMode="cover" style={styles.imageBg}>
                    <Text style={styles.text}>Pagina di scelta delle caccie</Text>
                </ImageBackground>
            </View>
        );
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageBg: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center', alignItems: 'center',
        width: '100%',
    },
    text: {
        color: 'red',
        fontSize: 42,
        lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#000000c0',
    },
});






