import React, { setState } from 'react';
import { StyleSheet, Text, View, Dimensions, Alert, ImageBackground, TouchableOpacity } from 'react-native';
import { NativeBaseProvider, Box, Button, Image, Center, Heading,Progress } from "native-base";



const win = Dimensions.get('window');
const WidthImagePercorso = 1464;
const HeightImagePercorso = 700;
const RatioImagePercorso = win.width / WidthImagePercorso;

const imagePercorsoCacciaSrc = require('../../assets/percorsoCaccia.png');
const imageBgSrc = require('../../assets/bg_carta.jpg');

export default class SceltaCacciaScreen extends React.Component {
    changeViewIndovinello = () => this.props.navigation.navigate('Maps', { markerRender: 0,infoBoxContent:'Recati sullo start per iniziare la caccia al tesoro' })
    changeViewBack = () => this.props.navigation.navigate('SceltaCacciaScreen')

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={imageBgSrc} resizeMode="cover" style={styles.imageBg}>
                    <Image
                        style={styles.imagePercorsoCaccia} source={imagePercorsoCacciaSrc}
                        alt="Alternate Text"
                    />
                    <Box style={styles.containerInfo} >
                        <Heading size="2xl" style={styles.colorTitle1} >Percorso Uno</Heading>
                        <Heading size="lg" style={styles.titleDescrizione} >Descrizione</Heading>
                        <Text style={{color:'#005f73'}}>Giovanni sgiuodfg fguiodfu gdfugoiduf gu odfugiodf ugiodf gdfiug </Text>
                        <Heading size="lg" style={styles.colortitleDifficolta} >Difficolta: 3</Heading>
                        <Box w="90%" maxW="400">
                        <Progress bg="blue.200" marginTop={3} _filledTrack={{
                            bg: "red.500"
                        }} value={60} mx="0" />
                    </Box>
                    </Box>

                    <Box style={styles.bottomBar} >
                        <Button onPress={this.changeViewBack} style={styles.buttonBar} colorScheme={"error"}>Torna alle Scelte</Button>
                        <Button onPress={this.changeViewIndovinello} style={styles.buttonBar} colorScheme={"success"}>Inizia la Caccia</Button>
                    </Box>
                </ImageBackground>
            </View>
        );
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    imageBg: {
        flex: 1,
        //    alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'column',
        width: '100%',

    },
    imagePercorsoCaccia: {
        width: win.width,
        height: HeightImagePercorso * RatioImagePercorso,
        resizeMode: 'contain',

    },
    bottomBar: {
        width: win.width,
        height: 60,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'space-around',
        paddingBottom: 10,
    },
    buttonBar: {
        borderRadius: 6,

    }, containerInfo: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 100,
        borderColor: '#fcbf49',
        borderTopWidth: 15,
    },

    colorTitle1: {
        color: '#38b000'
    },

    titleDescrizione: {
        marginTop:30,
        color: '#003049'
    },
    colortitleDifficolta: {
        color: '#9e0059',
        marginTop:30,
    },



});






