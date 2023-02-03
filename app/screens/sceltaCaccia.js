import React, { setState } from 'react';
import {StyleSheet, Text, View, Image, Dimensions, Alert } from 'react-native';
import { NativeBaseProvider, Box, Button, Center } from "native-base";



const test = () => {
    Alert.alert("Gioasd")
}

export default class HomeScreen extends React.Component {


    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Pagina di scelta delle caccie</Text>
            </View>
        );
    }
}

