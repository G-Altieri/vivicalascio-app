import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, Alert, ImageBackground, TouchableOpacity, SafeAreaView } from 'react-native';
import { NativeBaseProvider, AlertDialog, Box, Center, Button } from "native-base";
import MapView,{ Marker }  from 'react-native-maps'

const Maps = () => {
    const [markers, setMarker] = useState({
        marker: [{
            title: 'hello',
            coordinates: {
                latitude: 42.32680460741095,
                longitude: 13.694380056113005
            },
            description: 'asdASDas'
        },
        {
            title: 'hello2',
            coordinates: {
                latitude: 42.32580460741095,
                longitude: 13.695380056113005
            },
            description: 'asdASDas'
        }]
    });

    
        const markerList = markers.marker.map((marker, index) => {
            return <Marker
                key={index}
                coordinate={marker.coordinates}
                title={marker.title}
                description={marker.description}
            />
        })
    

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <MapView style={{ flex: 1 }} initialRegion={{

                latitude: 42.32680460741095,
                longitude: 13.694380056113005,
                latitudeDelta: 0.007213412064395186,
                longitudeDelta: 0.018156878650188446,
            }}

                mapType='satellite'
            >
             {markerList}

            </MapView>
        </SafeAreaView>
    )

}

export default Maps;