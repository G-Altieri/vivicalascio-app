import React, { setState, useEffect } from 'react';
import { StyleSheet, View, Image, Dimensions, Alert, ImageBackground, TouchableOpacity } from 'react-native';
import { NativeBaseProvider, Text, AlertDialog, Box, Center, Button } from "native-base";


const iconMapSrc = require('../../assets/iconMap.png');
const iconHelpSrc = require('../../assets/iconHelp.png');

const imageBgSrc = require('../../assets/bg_carta.jpg');



export default function IndovinelloScreen({ navigation }) {

  const [isOpen, setIsOpen] = React.useState(false);
  const [count, setCount] = React.useState(0);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef(null);

  React.useLayoutEffect(() => {

    navigation.setOptions({
      headerRight: () => (
        <>
          <TouchableOpacity title="Update count" onPress={() => { setIsOpen(!isOpen) }}>
            <Image style={styles.iconHelp} source={iconHelpSrc}
              alt="Icon Help"
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { navigation.navigate('Maps', { markerRender: 1, }) }}>
            <Image style={styles.iconMap} source={iconMapSrc}
              alt="Icon Mappa"
            />
          </TouchableOpacity>

        </>
      )
    });
  }, [navigation],);


  const indovinelli = {
    risposta: {
      uno: 'Risposta1',
      due: 'Risposta2',
      tre: 'Risposta3',
      quatro: 'Risposta4',
    },
    domanda: 'Domanda1'

  }


  return (<>
    <ImageBackground source={imageBgSrc} resizeMode="cover" style={styles.imageBg}>


      <View style={styles.containerDomanda}>
        <Box style={styles.boxDomanda}>
          <Text fontSize="lg" color={'white'}>{indovinelli.domanda}</Text>
        </Box>
      </View>


      <View style={styles.containerRisposte}>

        <View style={styles.containerInformazioni}>
          <Text fontSize="lg" color={'white'}>{indovinelli.risposta.uno}</Text>
        </View>

        <View style={styles.containerBoxRisposte}>

          <TouchableOpacity onPress={() => { console.log('GIovanni') }} style={[styles.boxRisposte, styles.colorBoxUno, styles.marginRightBox]} >
            <Text fontSize="lg" color={'white'}>{indovinelli.risposta.uno}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { console.log('GIovanni') }} style={[styles.boxRisposte, styles.colorBoxQuatro]} >
            <Text fontSize="lg" color={'white'}>{indovinelli.risposta.due}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { console.log('GIovanni') }} style={[styles.boxRisposte, styles.colorBoxTre, styles.marginRightBox]} >
            <Text fontSize="lg" color={'white'}>{indovinelli.risposta.tre}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { console.log('GIovanni') }} style={[styles.boxRisposte, styles.colorBoxDue]} >
            <Text fontSize="lg" color={'white'}>{indovinelli.risposta.quatro}</Text>
          </TouchableOpacity>
        </View>
      </View>



      {/* Conferma Aiuto */}
      <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={onClose}>
        <AlertDialog.Content>
          <AlertDialog.CloseButton />
          <AlertDialog.Header>Aiuto</AlertDialog.Header>
          <AlertDialog.Body>
            Sicuro di voler chiedere un aiuto?
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button.Group space={2}>
              <Button variant="unstyled" colorScheme="danger" onPress={onClose} ref={cancelRef}>
                No rifiuto
              </Button>
              <Button colorScheme="success" onPress={onClose}   >
                Si Accetto
              </Button>
            </Button.Group>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </ImageBackground>

  </>)

}



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
  iconMap: {
    width: 35,
    height: 35
  },
  iconHelp: {
    width: 45,
    height: 45,
    marginRight: 20,
  },
  containerRisposte: {
    flex: 3 / 4,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 10,
    backgroundColor: 'red',
  },
  containerBoxRisposte: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
  },
  boxRisposte: {
    height: 100,
    marginTop: 14,
    flexBasis: '46%',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,

  },
  containerDomanda: {
    flex: 1 / 4,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'violet',
  },
  boxDomanda: {
    backgroundColor: '#006d77',
    height: 150,
    margin: 2,
    flexBasis: '98%',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  colorBoxUno: {
    backgroundColor: '#003049'
  },
  colorBoxDue: {
    backgroundColor: '#028090'
  },
  colorBoxTre: {
    backgroundColor: '#d62828'
  },
  colorBoxQuatro: {
    backgroundColor: '#840032'
  },
  marginRightBox: {
    marginRight: 5,
  },

  containerInformazioni: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: '100%',
    backgroundColor: 'purple',
    marginBottom:10,
    borderRadius: 20,
  }

});






