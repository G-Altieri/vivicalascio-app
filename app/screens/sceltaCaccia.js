import React, { setState } from 'react';
import { StyleSheet, Text, View, Dimensions, Alert, ImageBackground, TouchableOpacity } from 'react-native';
import { Box, Heading, AspectRatio, Image, Center, HStack, Stack, NativeBaseProvider } from "native-base";



const imageBgSrc = require('../../assets/bg_carta.jpg');
//const imageCastelloUnoSrc = require('../../assets/calascioCastelloUno.jpg');
//const imageCastelloDueSrc = require('../../assets/calascioCastelloDue.jpg');
const imageCastelloUnoSrc = 'https://www.visitareabruzzo.it/wp-content/uploads/2020/04/stefano-sponta-1-758x505.jpg';
const imageCastelloDueSrc = 'https://travelnauti.it/wp-content/uploads/2020/08/il-trekking-verso-il-castello-di-rocca-calascio.jpg';
export default class SceltaCacciaScreen extends React.Component {
    changeView = () => this.props.navigation.navigate('DettagliSceltaCacciaScreen')


    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={imageBgSrc} resizeMode="cover" style={styles.imageBg}>
                    <TouchableOpacity style={{}} onPress={this.changeView} activeOpacity={0.8}>
                        <Box alignItems="center">
                            <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
                                borderColor: "coolGray.600",
                                backgroundColor: "gray.700"
                            }} _web={{
                                shadow: 2,
                                borderWidth: 0
                            }} _light={{
                                backgroundColor: "gray.50"
                            }}>
                                <Box>
                                    <AspectRatio w="100%" ratio={16 / 7}>
                                        <Image source={{
                                            uri: imageCastelloDueSrc,
                                            cache: 'only-if-cached',
                                        }} alt="image" />
                                    </AspectRatio>
                                    <Center bg="green.600" _dark={{
                                        bg: "violet.400"
                                    }} _text={{
                                        color: "warmGray.50",
                                        fontWeight: "700",
                                        fontSize: "xs"
                                    }} position="absolute" bottom="0" px="3" py="1.5">
                                        FACILE
                                    </Center>
                                </Box>
                                <Stack p="4" space={3}>
                                    <Stack space={2}>
                                        <Heading size="md" ml="-1">
                                            Percorso 1
                                        </Heading>

                                    </Stack>
                                    <Text fontWeight="400">
                                    Ti porteremo alla scoperta della parte culturale di Rocca Calascio, attraverseremo il borgo tra i palazzi e chiese storiche verso il castello di rocca calascio alla conquista del tesoro.
                                    </Text>
                                    <HStack alignItems="center" space={4} justifyContent="space-between">
                                        <HStack alignItems="center">
                                            <Text color="coolGray.600" _dark={{
                                                color: "warmGray.200"
                                            }} fontWeight="400">
                                                durata 45 min
                                            </Text>
                                        </HStack>
                                    </HStack>
                                </Stack>
                            </Box>
                        </Box>



                    </TouchableOpacity>
                    <TouchableOpacity style={{}} onPress={this.changeView} activeOpacity={0.8}>
                        <Box alignItems="center">
                            <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
                                borderColor: "coolGray.600",
                                backgroundColor: "gray.700"
                            }} _web={{
                                shadow: 2,
                                borderWidth: 0
                            }} _light={{
                                backgroundColor: "gray.50"
                            }}>
                                <Box>
                                    <AspectRatio w="100%" ratio={16 / 7}>
                                        <Image source={{
                                            uri: imageCastelloUnoSrc,
                                            cache: 'only-if-cached',
                                        }} alt="image" />
                                    </AspectRatio>
                                    <Center bg="red.600" _dark={{
                                        bg: "violet.400"
                                    }} _text={{
                                        color: "warmGray.50",
                                        fontWeight: "700",
                                        fontSize: "xs"
                                    }} position="absolute" bottom="0" px="3" py="1.5">
                                        DIFFICILE
                                    </Center>
                                </Box>
                                <Stack p="4" space={3}>
                                    <Stack space={2}>
                                        <Heading size="md" ml="-1">
                                            Percorso 2
                                        </Heading>
                                    </Stack>
                                    <Text fontWeight="400">
                                    Ti porteremo alla scoperta della parte avventurosa di Rocca Calascio, attraverseremo il borgo diretti verso l’antica rocca passando per il borgo antico e per i suoi ruderi
                                    </Text>
                                    <HStack alignItems="center" space={4} justifyContent="space-between">
                                        <HStack alignItems="center">
                                            <Text color="coolGray.600" _dark={{
                                                color: "warmGray.200"
                                            }} fontWeight="400">
                                                durata 1 ora e 30 min
                                            </Text>
                                        </HStack>
                                    </HStack>
                                </Stack>
                            </Box>
                        </Box>



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






