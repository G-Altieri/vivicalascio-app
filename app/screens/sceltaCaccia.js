import React, { setState } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, Alert, ImageBackground,TouchableOpacity } from 'react-native';
import { NativeBaseProvider, Box, Button, Center } from "native-base";



const imageBgSrc = require('../../assets/bg_carta.jpg');

export default class SceltaCacciaScreen extends React.Component {
    changeView = () => this.props.navigation.navigate('DettagliSceltaCacciaScreen')
    
    
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={imageBgSrc} resizeMode="cover" style={styles.imageBg}>
                    <TouchableOpacity style={[styles.box,styles.boxColor1]} onPress={this.changeView} activeOpacity={0.8}>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.box,styles.boxColor2]} onPress={this.changeView}>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.box,styles.boxColor3]} onPress={this.changeView}>
                    </TouchableOpacity>
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
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%',

    },
    box: {
        borderRadius: 30,
        width: '85%',
        height: '30%',

    },
    boxColor1: {
        backgroundColor: '#f6ae2d',
    },
    boxColor2: {
        backgroundColor: '#33658a',
    },
    boxColor3: {
        backgroundColor: '#f26419',
    },

});






