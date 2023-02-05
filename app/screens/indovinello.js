import React, { setState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, Alert, ImageBackground, TouchableOpacity } from 'react-native';
import { NativeBaseProvider, AlertDialog, Box, Center,Button } from "native-base";

const iconMapSrc = require('../../assets/iconMap.png');
const iconHelpSrc = require('../../assets/iconHelp.png');

const imageBgSrc = require('../../assets/bg_carta.jpg');



export default function IndovinelloScreen({ navigation }) {

    const [isOpen, setIsOpen] = React.useState(false);
    const [count,setCount] = React.useState(0);
    const onClose = () => setIsOpen(false);
    const cancelRef = React.useRef(null);

   React.useLayoutEffect(() => {
  
        navigation.setOptions({
        headerRight:() => (
            <>
            <TouchableOpacity title="Update count" onPress={()=>{setIsOpen(!isOpen)}}>
              <Image style={styles.iconHelp} source={iconHelpSrc} 
                alt="Icon Help"
              />
            </TouchableOpacity>
    
            <TouchableOpacity onPress={() =>{this.props.navigation.navigate('Maps')}}>
              <Image style={styles.iconMap} source={iconMapSrc}
                alt="Icon Mappa"
              />
            </TouchableOpacity>
    
          </> 
        )
        });
      }, [navigation],);


     
    return (<>
        <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={onClose}>
          <AlertDialog.Content>
            <AlertDialog.CloseButton />
            <AlertDialog.Header>Aiuto</AlertDialog.Header>
            <AlertDialog.Body>
            Sicuro di voler chiedere un aiuto?
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button.Group space={2}>
                <Button variant="unstyled" colorScheme="danger" onPress={onClose}  ref={cancelRef}>
              No rifiuto
                </Button>
                <Button colorScheme="success" onPress={onClose}   >
                  Si Accetto
                </Button>
              </Button.Group>
            </AlertDialog.Footer>
          </AlertDialog.Content>
        </AlertDialog>
      
    </> )

}



/*


export default class IndovinelloScreen extends React.Component {
    changeView = () => Alert.alert('Giovanni');

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            cancelRef: null,
            x: '1'
        }
    }




    onClose = () => this.state.setIsOpen = true;
    changeOpenModal() { this.setState({ isOpen: !this.state.isOpen }) }

    static navigationOptions = ({ navigation }) => {
        return {
          title: navigation.getParam('otherParam', 'A Nested Details Screen'),
        };
      };


    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={imageBgSrc} resizeMode="cover" style={styles.imageBg}>

                    <AlertDialog leastDestructiveRef={this.state.cancelRef} isOpen={this.state.isOpen} onClose={this.changeOpenModal} >
                        <AlertDialog.Content>
                            <AlertDialog.CloseButton />
                            <AlertDialog.Header>Aiuto</AlertDialog.Header>
                            <AlertDialog.Body>
                                Sicuro di voler chiedere un aiuto?
                            </AlertDialog.Body>
                            <AlertDialog.Footer>
                                <Button.Group space={2}>
                                    <Button variant="unstyled" colorScheme="coolGray" onPress={this.changeOpenModal} ref={this.state.cancelRef}>
                                        No rifiuto
                                    </Button>
                                    <Button colorScheme="danger" onPress={this.changeOpenModal}>
                                        Si Accetto
                                    </Button>
                                </Button.Group>
                            </AlertDialog.Footer>
                        </AlertDialog.Content>
                    </AlertDialog>


                </ImageBackground>
            </View>
        );
    }

}
*/

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
    iconMap: {
        width: 35,
        height: 35
      },
      iconHelp: {
        width: 45,
        height: 45,
        marginRight: 20,
      }

});






