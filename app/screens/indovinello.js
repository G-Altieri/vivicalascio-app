import React, { setState } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, Alert, ImageBackground,TouchableOpacity } from 'react-native';
import { NativeBaseProvider, Box, Button, Center } from "native-base";



const imageBgSrc = require('../../assets/bg_carta.jpg');

export default class IndovinelloScreen extends React.Component {
    changeView = () => Alert.alert('Giovanni');
    
    
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={imageBgSrc} resizeMode="cover" style={styles.imageBg}>
                  
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
   

});






