import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Dimensions, Alert, ImageBackground, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { NativeBaseProvider, Text, AlertDialog, Center, Button, Checkbox, Image, InfoIcon, Box, Heading, AspectRatio, } from "native-base";
import MapView, { Marker } from 'react-native-maps'

const iconStartMarkerSrc = require('../../assets/startMarker.png');
const iconMarkerSrc = require('../../assets/marker.png');
const iconMarkerGreenSrc = require('../../assets/markerGreen.png');
const iconLocationSrc = require('../../assets/iconLocation.png');
const imageBgSrc = require('../../assets/bg_carta.jpg');


const Maps = ({ route, navigation }) => {

    const mapRef = useRef(null);
    //cordinate dei marker
    const [markerRender, setMarkerRender] = useState(0)
    const [checkValue, setCheckValue] = useState([false, false, false, true])

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

    const [luoghi, setLuoghi] = useState({
        luogo: [{
            title: 'Posto Uno',
            check: '1',
            coordinates: {
                latitude: 42.325663,
                longitude: 13.695390
            },
            description: 'Fontana'
        },
        {
            title: 'Posto Due',
            check: '2',
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
        },
        {
            title: 'Posto Quattro',
            check: '4',
            coordinates: {
                latitude: 42.327037,
                longitude: 13.699934
            },
            description: 'Start'
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



    //Iteratore per renderizzare i marker
    /*   const markerList = () => {
           const x = checkValue.map((ele, index) => {
               var renderMarker = checkValue[index] == 1
               console.log(checkValue[index] + ' idex ' + index)
               if (renderMarker) {
                   console.log(renderMarker)
                   return <Marker
                       key={Math.floor(Math.random() * 50)}
                       coordinate={luoghi.luogo[index].coordinates}
                       title={luoghi.luogo[index].title}
                       description={luoghi.luogo[index].description}
                   >
                       <Image style={styles.imageMarkerStart} source={iconMarkerSrc}
                           alt="Marker Start" />
                   </Marker>
               }
           })
           return x
       }
   */

    const [itemList, setitemList] = useState([])






    const imageCastelloUnoSrc = 'https://www.visitareabruzzo.it/wp-content/uploads/2020/04/stefano-sponta-1-758x505.jpg';
    const imageCastelloDueSrc = 'https://travelnauti.it/wp-content/uploads/2020/08/il-trekking-verso-il-castello-di-rocca-calascio.jpg';
    const win = Dimensions.get('window');
    const winImage = win.width / 2;


    //Render della pagina
    return (
        <SafeAreaView style={{ flex: 1, position: 'relative', }}>
            <ImageBackground source={imageBgSrc} resizeMode="cover" style={styles.imageBg}>

                <MapView style={{ flex: 1 / 3 }}
                    ref={mapRef}
                    initialRegion={calascioRegion}
                    mapType='satellite'
                >
                    {
                        checkValue[0] ?
                        <Marker
                            //   style={{ display: checkValue[1] == 0 ? 'none' : 'flex' }}
                            key={43564}
                            coordinate={luoghi.luogo[0].coordinates}
                            title={luoghi.luogo[0].title}
                            description={luoghi.luogo[0].description}
                        >
                            <Image style={styles.imageMarkerStart} source={iconMarkerSrc} alt="Marker Start" />
                        </Marker>
                        :null
                    }
                    <Marker
                        style={{ display: checkValue[1] == 0 ? 'none' : 'flex' }}
                        key={1234}
                        coordinate={luoghi.luogo[1].coordinates}
                        title={luoghi.luogo[1].title}
                        description={luoghi.luogo[1].description}
                    >
                        <Image style={styles.imageMarkerStart} source={iconMarkerSrc} alt="Marker Start" />
                    </Marker>
                    <Marker
                        style={{ display: checkValue[2] == 0 ? 'none' : 'flex' }}
                        key={4321}
                        coordinate={luoghi.luogo[2].coordinates}
                        title={luoghi.luogo[2].title}
                        description={luoghi.luogo[2].description}
                    >
                        <Image style={styles.imageMarkerStart} source={iconMarkerSrc} alt="Marker Start" />
                    </Marker>
                    <Marker
                        style={54354}
                        key={Math.floor(Math.random() * 50)}
                        coordinate={luoghi.luogo[3].coordinates}
                        title={luoghi.luogo[3].title}
                        description={luoghi.luogo[3].description}
                    >
                        <Image style={styles.imageMarkerStart} source={iconMarkerSrc} alt="Marker Start" />
                    </Marker>

                </MapView>
                <Heading size="lg" ml="5" my={2}>
                    Scegli i luoghi che vuoi visitare
                </Heading>
                <View style={styles.containerList}>
                    <ScrollView>
                        {luoghi.luogo.map((luogo, index) => {
                            if (index % 2 == 0)
                                return <View style={styles.rowChecked} key={index}>
                                    <AspectRatio w={winImage - 20} ratio={1 / 1} >
                                        <Image source={{
                                            uri: imageCastelloDueSrc,
                                            cache: 'only-if-cached',
                                        }} alt="image" borderRadius='20' />
                                    </AspectRatio>
                                    <View style={{ marginLeft: 15, flexDirection: 'column', justifyContent: 'space-between', height: winImage, }}>
                                        <Checkbox value={index} size="lg" marginTop={(winImage / 2) - 20} colorScheme="green" onChange={(state) => {
                                            if (state) {
                                                var var1 = checkValue
                                                var1[index] = true
                                                setCheckValue(var1);
                                            } else {
                                                var var1 = checkValue
                                                var1[index] = false
                                                setCheckValue(var1);
                                            }
                                            console.log(checkValue)
                                            console.log(checkValue[0])
                                            //   console.log( checkValue[0] == 0 ? false : true)
                                        }}
                                        >
                                            {luogo.title}
                                        </Checkbox>
                                        <View style={{ alignItems: 'center', flexDirection: 'row', marginBottom: 10, }}>
                                            <InfoIcon size="4" mt="0.5" color="gray.500" marginRight="1" />
                                            <Text underline >Scopri di più</Text>
                                        </View>
                                    </View>
                                </View>
                            else
                                return <View style={[styles.rowChecked, { flexDirection: 'row-reverse' }]} key={index}>
                                    <AspectRatio w={winImage - 20} ratio={1 / 1} >
                                        <Image source={{
                                            uri: imageCastelloDueSrc,
                                            cache: 'only-if-cached',
                                        }} alt="image" borderRadius='20' />
                                    </AspectRatio>
                                    <View style={{ alignItems: 'flex-start', width: winImage - 20, flexDirection: 'column', justifyContent: 'space-between', height: winImage, }}>
                                        <Checkbox value={index} size="lg" marginTop={(winImage / 2) - 20} colorScheme="green" onChange={(state) => {
                                            if (state) {
                                                var var1 = checkValue
                                                var1[index] = 1
                                                setCheckValue(var1);
                                            } else {
                                                var var1 = checkValue
                                                var1[index] = 0
                                                setCheckValue(var1);
                                            }

                                            console.log(checkValue)
                                        }} >
                                            {luogo.title}
                                        </Checkbox>
                                        <View style={{ alignItems: 'center', flexDirection: 'row', marginBottom: 10, }}>
                                            <InfoIcon size="4" mt="0.5" color="gray.500" marginRight="1" />
                                            <Text underline >Scopri di più</Text>
                                        </View>
                                    </View>
                                </View>
                        })}
                    </ScrollView>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )

}

export default Maps;

const styles = StyleSheet.create({
    rowChecked: {
        alignItems: 'center',
        width: '100%',
        // backgroundColor: 'red',
        flexDirection: 'row',
    },
    containerList: {
        flex: 2 / 3,
        alignItems: 'stretch',
        justifyContent: 'center',
        flexDirection: 'column',
        paddingLeft: 20,
        paddingRight: 20,
    },
    imageBg: {
        flex: 1,
        // justifyContent: 'flex-start',
        //  alignItems: 'center',
        flexDirection: 'column',
    },
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


