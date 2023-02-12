import React, { setState, useState, useEffect } from 'react';
import { StyleSheet, View, Image, Dimensions, Alert, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import { NativeBaseProvider, Text, AlertDialog, Box, Center, Button, Heading } from "native-base";


const imageBgSrc = require('../../assets/bg_carta.jpg');
const QRSrc = require('../../assets/qr.png');



export default function Punteggio({ route, navigation }) {


    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <>

                </>
            ),
        });
    }, [navigation],);

    const returnHome = () => navigation.navigate('Home');

    var [tot, setTot] = useState(0)
    const { punteggio } = route.params;
    const renderPunteggio = punteggio.map((domanda, index) => {
        if (domanda.rispostaData == domanda.rispCorretta) {
            tot += 1
        }
    })
    const boxRisposteEsatte = punteggio.map((domanda, index) => {

        return <Box style={[styles.boxRisposteEsatte, domanda.rispostaData == domanda.rispCorretta ? styles.bgCorret : styles.bgError]} key={'hnt' + index}>
                <View style={styles.containerDomandeRisposte} >
                    <Text fontSize="lg" fontWeight={500}>    {domanda.domanda}  </Text>
                    <View style={styles.containerRispostaEsatta} >
                        <Text fontSize="md" >  {domanda.rispCorretta == 1 ? domanda.risposta1 : domanda.risposta2}   </Text>
                    </View>
                </View>
                <View style={styles.containerPunteggioDomande} >
                    <Text fontSize="2xl" fontWeight={500}> {domanda.rispostaData == domanda.rispCorretta ? 1 : 0} pt </Text>
                </View>
            </Box>
     

    })
    return (<>
        <ImageBackground source={imageBgSrc} resizeMode="cover" style={styles.imageBg}>
            <ScrollView>
                <Heading size="lg" ml="5" my={2} fontWeight={700}>
                    Le risposte corrette sono:
                </Heading>
                {boxRisposteEsatte}
                <Heading size="lg" ml="5" my={2} fontWeight={700} marginTop={30}>
                    Totale Punti: {tot}
                </Heading>
                <Heading size="lg" ml="5" my={2} fontWeight={400} marginTop={0}>
                    Con questo Punteggio, hai vinto un buono sconto, da usare in un locale del borgo !!!
                </Heading>
                <Heading size="md" ml="5" my={2} fontWeight={400} marginTop={0}>
                    Mostra il seguente QR per otterene acceddere allo sconto
                </Heading>
                <Image style={styles.imageQR} source={QRSrc}
                    alt="Alternate Text"
                />
                <Button padding={5} onPress={returnHome}>
                    Torna Alla Home
                </Button>
            </ScrollView>
        </ImageBackground>

    </>)



}


const win = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageBg: {
        flex: 1,
        // justifyContent: 'flex-start',
        //  alignItems: 'center',
        flexDirection: 'column',

    },
    boxRisposteEsatte: {
        padding: 10,
        backgroundColor: '#8ecae6',
        marginHorizontal: 10,
        borderRadius: 15,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    }, containerRispostaEsatta: {

        marginLeft: 10,
        marginVertical: 10,
    }, containerDomandeRisposte: {

    }, containerPunteggioDomande: {
        marginRight: 20,
    }, bgError: {
        backgroundColor: '#ffadad',
    },
    bgCorret: {
        backgroundColor: '#caffbf',
    },
    imageQR: {
        resizeMode: 'contain',
        width: win.width - 60,
        height: win.width - 60,
        marginLeft: 30,
        marginTop: 20,
        marginBottom: 50,
    }
});






