import React, { setState, useState, useEffect } from 'react';
import { StyleSheet, View, Image, Dimensions, Alert, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import { NativeBaseProvider, Text, AlertDialog, Box, Center, Button, Heading } from "native-base";


const iconMapSrc = require('../../assets/iconMap.png');
const iconHelpSrc = require('../../assets/iconHelp.png');

const imageBgSrc = require('../../assets/bg_carta.jpg');



export default function Quiz({ route, navigation }) {


    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <>

                </>
            ),
        });
    }, [navigation],);


    var domandeArray = [
        {
            domanda: 'Domanda 1',
            risposta1: 'risposta 1',
            risposta2: 'risposta 2',
            rispCorretta: 1,
            rispostaData: 0,
        },
        {
            domanda: 'Domanda 2',
            risposta1: 'risposta 1',
            risposta2: 'risposta 2',
            rispCorretta: 1,
            rispostaData: 0,
        },
        {
            domanda: 'Domanda 3',
            risposta1: 'risposta 1',
            risposta2: 'risposta 2',
            rispCorretta: 2,
            rispostaData: 0,
        },
        {
            domanda: 'Domanda 4',
            risposta1: 'risposta 1',
            risposta2: 'risposta 2',
            rispCorretta: 1,
            rispostaData: 0,
        },
        {
            domanda: 'Domanda 5',
            risposta1: 'risposta 1',
            risposta2: 'risposta 2',
            rispCorretta: 2,
            rispostaData: 0,
        },
    ]

    var [domande, setDomande] = useState(domandeArray)

    const changeViewPunteggio = () => navigation.navigate('Punteggio', { punteggio: domande, });


    var listDomande = domande.map((domanda, index) => {
        return <Box style={styles.boxDomande} key={'a' + index}>
            <Heading size="lg" ml="5" my={2} fontWeight={500} >
                {domanda.domanda}
            </Heading>
            <Box style={styles.boxRisposte}>
                <Button style={[styles.risposta, domanda.rispostaData == 1 ? styles.bgVerde : styles.bgNormal]} onPress={() => {
                    const newDomande = [...domande];
                    newDomande[index]['rispostaData'] = 1,
                        setDomande(newDomande)
                }
                }>
                    <Text >
                        {domanda.risposta1}
                    </Text>
                </Button>
                <Button style={[styles.risposta, domanda.rispostaData == 2 ? styles.bgVerde : styles.bgNormal]} onPress={() => {
                    const newDomande = [...domande];
                    newDomande[index]['rispostaData'] = 2,
                        setDomande(newDomande)
                }}>
                    <Text >
                        {domanda.risposta2}
                    </Text>
                </Button>
            </Box>
        </Box>

    })


    return (<>
        <ImageBackground source={imageBgSrc} resizeMode="cover" style={styles.imageBg}>
            <ScrollView>
                {listDomande}
            </ScrollView>
            <Button style={styles.inviaRisposte} onPress={changeViewPunteggio}>
                <Text>
                    Invia le Risposte
                </Text>
            </Button>
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
    boxDomande: {
        backgroundColor: '#dee2e6',
        width: win.width - 40,
        padding: 10,
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 15,
        marginBottom: 25,
        marginLeft: 20,
        marginTop: 20,

    }, boxRisposte: {
        width: '100%',
        marginTop: 30,
        alignItems: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    risposta: {
        justifyContent: 'center',
        padding: 10,
        paddingHorizontal: 25,
        paddingBottom: 13,
        borderRadius: 15,
        flexDirection: 'column',
        alignItems: 'center',

    },
    bgVerde: {
        backgroundColor: '#20bf55',
    },
    bgNormal: {
        backgroundColor: '#bfdbf7',
    },
    inviaRisposte: {
        backgroundColor: '#20bf55',
        //  borderRadius: 15,
        width: '100%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
    }
});






