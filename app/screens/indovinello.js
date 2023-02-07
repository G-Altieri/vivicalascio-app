import React, { setState, useEffect } from 'react';
import { StyleSheet, View, Image, Dimensions, Alert, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import { NativeBaseProvider, Text, AlertDialog, Box, Center, Button } from "native-base";

import livelli from '../dbLivelliCaccia.json'

const iconMapSrc = require('../../assets/iconMap.png');
const iconHelpSrc = require('../../assets/iconHelp.png');

const imageBgSrc = require('../../assets/bg_carta.jpg');



export default function IndovinelloScreen({ route, navigation }) {

  const [isOpenAiuto, setIsOpen] = React.useState(false);
  const onCloseAiuto = () => setIsOpen(false);
  const cancelRefAiuto = React.useRef(null);


  React.useLayoutEffect(() => {

    navigation.setOptions({
      headerRight: () => (
        <>
          <TouchableOpacity title="Update count" onPress={() => { setIsOpen(!isOpenAiuto) }}>
            <Image style={styles.iconHelp} source={iconHelpSrc}
              alt="Icon Help"
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { navigation.navigate('Maps', { markerRender: indexLivello, }) }}>
            <Image style={styles.iconMap} source={iconMapSrc}
              alt="Icon Mappa"
            />
          </TouchableOpacity>

        </>
      ),
      title: 'Livello ' + (indexLivello + 1),

    });
  }, [navigation],);


  //Recupero Paramatri dalla route
  var { indexLivello } = route.params;
  indexLivello = indexLivello - 1



  const renderInformazioni = () => {
    if (livelli[indexLivello].info != null)
      return (<ScrollView style={styles.containerInformazioni} >
        <Text fontSize="xl" color={'#ffbf00'} fontWeight={'bold'} textAlign={'center'}>{livelli[indexLivello].infoTitle}</Text>
        <Text fontSize="lg" color={'#00171f'}>{livelli[indexLivello].info}</Text>
      </ScrollView>)
  }



  const renderRisposte = () => {
    return (<>
      <TouchableOpacity onPress={livelli[indexLivello].rispostaEsatta == 1 ? rispostaEsatta : rispostaSbagliata}
        style={[styles.boxRisposte, styles.colorBoxNormal, styles.marginRightBox]} >
        <Text fontSize="lg" color={'white'}>{livelli[indexLivello].risposta.uno}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={livelli[indexLivello].rispostaEsatta == 2 ? rispostaEsatta : rispostaSbagliata}
        style={[styles.boxRisposte, styles.colorBoxNormal]} >
        <Text fontSize="lg" color={'white'}>{livelli[indexLivello].risposta.due}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={livelli[indexLivello].rispostaEsatta == 3 ? rispostaEsatta : rispostaSbagliata}
        style={[styles.boxRisposte, styles.colorBoxNormal, styles.marginRightBox]} >
        <Text fontSize="lg" color={'white'}>{livelli[indexLivello].risposta.tre}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={livelli[indexLivello].rispostaEsatta == 4 ? rispostaEsatta : rispostaSbagliata}
        style={[styles.boxRisposte, styles.colorBoxNormal]} >
        <Text fontSize="lg" color={'white'}>{livelli[indexLivello].risposta.quatro}</Text>
      </TouchableOpacity>
    </>
    )
  }


  const rispostaEsatta = () => { navigation.navigate('Maps', { markerRender: (indexLivello + 1), infoBoxContent: livelli[indexLivello].map.infoBox }) }
  const rispostaSbagliata = () => {
    Alert.alert(
      'Risposta Sbagliata!!!',
      'Ti ricordo che in alto pui chiedere un AIUTO',
    );
  }

const getAiuto = ()=> {
  onCloseAiuto()
  Alert.alert(
    'Aiuto',
    livelli[indexLivello].aiuto,
  );
}


  return (<>
    <ImageBackground source={imageBgSrc} resizeMode="cover" style={styles.imageBg}>


      <View style={styles.containerDomanda}>
        <Box style={styles.boxDomanda}>
          <Text fontSize="lg" color={'white'}>{livelli[indexLivello].domanda}</Text>
        </Box>
      </View>


      <View style={styles.containerRisposte}>
        {renderInformazioni()}

        <View style={styles.containerBoxRisposte}>
          {renderRisposte()}
        </View>
      </View>



      {/* Conferma Aiuto */}
      <AlertDialog leastDestructiveRef={cancelRefAiuto} isOpen={isOpenAiuto} onClose={onCloseAiuto}>
        <AlertDialog.Content>
          <AlertDialog.CloseButton />
          <AlertDialog.Header>Aiuto</AlertDialog.Header>
          <AlertDialog.Body>
            Sicuro di voler chiedere un aiuto?
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button.Group space={2}>
              <Button variant="unstyled" colorScheme="danger" onPress={onCloseAiuto} ref={cancelRefAiuto}>
                No rifiuto
              </Button>
              <Button colorScheme="success" onPress={getAiuto}   >
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
    flex: 4 / 5,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 10,
    //   backgroundColor: 'red',
  },
  containerBoxRisposte: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    //   backgroundColor: 'gray',
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
    flex: 1 / 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 20,
    // backgroundColor: 'violet',
  },
  boxDomanda: {
    backgroundColor: '#008000',
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
  colorBoxNormal: {
    backgroundColor: '#ca0c18'
  },
  colorBoxGiusto: {
    backgroundColor: 'green'
  },

  marginRightBox: {
    marginRight: 5,
  },

  containerInformazioni: {
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    //justifyContent: 'center',
    //alignItems: 'center',
    flex: 1,
    width: '100%',
    backgroundColor: '#f7f4f3',
    marginBottom: 20,
    borderRadius: 20,
    //paddingTop: 14,
    paddingLeft: 14,
    paddingRight: 14,
    borderColor: '#ffbf00',
    borderWidth: 2,
  }

});






