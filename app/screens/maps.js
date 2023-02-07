import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Dimensions, Alert, ImageBackground, TouchableOpacity, SafeAreaView } from 'react-native';
import { NativeBaseProvider, AlertDialog, Box, Center, Button, Image } from "native-base";
import MapView, { Marker } from 'react-native-maps'

const iconStartMarkerSrc = require('../../assets/startMarker.png');
const iconMarkerSrc = require('../../assets/marker.png');
const iconMarkerGreenSrc = require('../../assets/markerGreen.png');
const iconLocationSrc = require('../../assets/iconLocation.png');

const Maps = ({ route, navigation }) => {

    const mapRef = useRef(null);

    //cordinate dei marker
    const [markers, setMarker] = useState({
        marker: [{
            title: 'Posto Uno',
            coordinates: {
                latitude: 42.325663,
                longitude: 13.695390
            },
            description: 'Fontana'
        },
        {
            title: 'Posto Due',
            coordinates: {
                latitude: 42.326022,
                longitude: 13.694076
            },
            description: 'Roccia'
        },
        {
            title: 'Posto Tre',
            coordinates: {
                latitude: 42.328866,
                longitude: 13.688898
            },
            description: 'Castello'
        }]
    });


    //Icona per riposizionare la location
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <>
                    <TouchableOpacity title="Riposiziona Calascio" onPress={() => { goToCalascio() }}>
                        <Image style={styles.iconLocation} source={iconLocationSrc}
                            alt="Icon Relocate"
                        />
                    </TouchableOpacity>
                </>
            )
        });
    }, [navigation],);



    //Cordinate di calasico e metodo per ritornarci
    const calascioRegion = {
        latitude: 42.32680460741095,
        longitude: 13.694380056113005,
        latitudeDelta: 0.007213412064395186,
        longitudeDelta: 0.018156878650188446,
    };
    const goToCalascio = () => {
        mapRef.current.animateToRegion(calascioRegion, 3 * 1000);
    };

    //Recupero Paramatri dalla route
    const { markerRender } = route.params;
    const { infoBoxContent } = route.params;
    const infoButton = markerRender == 4 ? 'Caccia Terminata' : 'Passa al indovinello'

    //Render Box Info
    const boxInfoRender = () => {
        if (infoBoxContent != null)
            return (
                <>
                    <Box style={styles.boxInfo}>
                        <Text fontSize="2xl">{infoBoxContent}</Text>
                    </Box>
                    <Button onPress={() => { changeViewIndovinello() }} style={styles.buttonInfo} colorScheme={"success"}>{infoButton}</Button>
                </>


            )
    }

    const changeViewIndovinello = () => {
        if (markerRender != 4)
            navigation.navigate('IndovinelloScreen', { indexLivello: (markerRender + 1) })
            else
            navigation.navigate('Home')
    }

    //Iteratore per renderizzare i marker
    const markerList = markers.marker.map((marker, index) => {
        if (index < markerRender)
            return <Marker
                key={index}
                coordinate={marker.coordinates}
                title={marker.title}
                description={marker.description}
            >
                <Image style={styles.imageMarkerStart} source={index == (markerRender - 1) ? iconMarkerSrc : iconMarkerGreenSrc}
                    alt="Marker Start" />
            </Marker>

    })


    //Render della pagina
    return (
        <SafeAreaView style={{ flex: 1, position: 'relative', }}>
            {boxInfoRender()}

            <MapView style={{ flex: 1 }}
                ref={mapRef}
                initialRegion={calascioRegion}
                mapType='satellite'
            >
                <Marker
                    coordinate={{
                        latitude: 42.327037,
                        longitude: 13.699934
                    }}
                    title={"Start Caccia al tesoro"}
                    description={"Recati qui per iniziare la caccia al tesoro"}

                >
                    <Image style={styles.imageMarkerStart} source={iconStartMarkerSrc}
                        alt="Marker Start" />
                </Marker>
                {markerList}
            </MapView>
        </SafeAreaView>
    )

}

export default Maps;

const styles = StyleSheet.create({
    imageMarkerStart: {
        width: 35,
        height: 35,
        resizeMode: 'contain',
    }, iconLocation: {
        width: 35,
        height: 35,
        marginRight: 0,
    }, boxInfo: {
        width: '90%',
        padding: 20,
        backgroundColor: 'white',
        position: 'absolute',
        top: 10,
        zIndex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 25,
    },
    buttonInfo: {
        position: 'absolute',
        bottom: 10,
        zIndex: 2,
        borderRadius: 20,
        right: 10,
        //alignSelf: 'flex-end',
    }
});


