import React, {useEffect, useState} from 'react';
import {
  Alert,
  StyleSheet,
  Button,
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  TouchableHighlight,
} from 'react-native';
import {
  BtnAppSecondary,
  ViewTitleLeft,
  ViewTitleCenter,
  BtnAppCoPrimary,
} from '../../../ComponenteGlobales/SeccionMaquetacion';
import {SalirFBauth} from '../../../Modelo/FuncionesFirebaseAuth';
import Modal from 'react-native-modal';
import {BtnAppPrimary} from '../../../ComponenteGlobales/SeccionMaquetacion';

const PantallaListado = (props) => {
  const {ObjUSR} = props;
  const {setToDoList} = props;
  const {WatchFirebaseToDo} = props;
  //recarga datos de la patalla
  useEffect(() => {
    WatchFirebaseToDo({ObjUSR, setToDoList});
    console.log('se cargo listado');
  }, []);

  const {stateListadoTareas} = props;
  const {ToOtherScreen, Posiciones} = props;
  const {nameScreen} = props;

  const {ToDoList} = props;
  //usando modal
  const [stateSelected, setstateSelected] = useState();
  // borrar tarea
  useEffect(() => {
    console.log('borrando');
    // console.log(ToDoList);
    // let userRef = this.database.ref('users/' + userId);
    // userRef.remove()
  }, []);

  // onLongPress={() => {
  //   Alert.alert(item.name);
  // }}
  //modal

  // const [modalVisible, setModalVisible] = useState(false);

  const [state, setstate] = useState({isModalVisible: ''});
  const toggleModal = (item) => {
    if (item) {
      console.log(item.name);
      setstateSelected(item);
      setstate({isModalVisible: !state.isModalVisible});
    } else {
      setstate({isModalVisible: !state.isModalVisible});
    }
  };

  return (
    <>
      <Modal isVisible={state.isModalVisible}>
        <View style={{backgroundColor: '#E91E63', flex: 1}}>
          {stateSelected ? (
            <>
              <View style={{flex: 1}}>
                <ScrollView>
                  <ViewTitleCenter>
                    {stateSelected.estado == 0 ? (
                      <Text>Proyecto en Espera ⏱</Text>
                    ) : (
                      <Text>Proyecto en Desarrollo 🤞</Text>
                    )}
                  </ViewTitleCenter>
                  <View style={{marginVertical: 54}}>
                    <Text
                      style={{
                        fontSize: 21,
                        color: 'black',
                        fontWeight: 'bold',
                        letterSpacing: 3,
                        marginHorizontal: 13,
                        backgroundColor: '#ff6090',
                      }}>
                      Nombre
                    </Text>
                    <Text
                      style={{
                        alignSelf: 'flex-start',
                        paddingHorizontal: 9,
                        fontSize: 21,
                        color: 'white',
                      }}>
                      {stateSelected.name}
                    </Text>
                  </View>
                  <View style={{marginVertical: 54}}>
                    <Text
                      style={{
                        fontSize: 21,
                        color: 'black',
                        fontWeight: 'bold',
                        letterSpacing: 3,
                        marginHorizontal: 13,
                        backgroundColor: '#ff6090',
                      }}>
                      Descripcion
                    </Text>
                    <Text
                      style={{
                        alignSelf: 'flex-start',
                        paddingHorizontal: 9,
                        fontSize: 21,
                        color: 'white',
                      }}>
                      {stateSelected.description}
                    </Text>
                  </View>
                  <View style={{marginVertical: 54}}>
                    <Text
                      style={{
                        fontSize: 21,
                        color: 'black',
                        fontWeight: 'bold',
                        letterSpacing: 3,
                        marginHorizontal: 13,
                        backgroundColor: '#ff6090',
                      }}>
                      Funciones/Operaciones
                    </Text>
                    <Text
                      style={{
                        alignSelf: 'flex-start',
                        paddingHorizontal: 9,
                        fontSize: 21,
                        color: 'white',
                      }}>
                      {stateSelected.operation}
                    </Text>
                  </View>
                  <View style={{marginVertical: 54}}>
                    <Text
                      style={{
                        fontSize: 21,
                        color: 'black',
                        fontWeight: 'bold',
                        letterSpacing: 3,
                        marginHorizontal: 13,
                        backgroundColor: '#ff6090',
                      }}>
                      Deploy en produccion
                    </Text>
                    <Text
                      style={{
                        alignSelf: 'flex-start',
                        paddingHorizontal: 9,
                        fontSize: 21,
                        color: 'white',
                      }}>
                      {stateSelected.deploy}
                    </Text>
                  </View>

                  <View style={{marginVertical: 54, flexDirection: 'row'}}>
                    <View style={{flex: 1}}>
                      <Text
                        style={{
                          fontSize: 21,
                          color: 'black',
                          fontWeight: 'bold',
                          letterSpacing: 3,
                          marginHorizontal: 13,
                          backgroundColor: '#ff6090',
                        }}>
                        Plataforma para Desarrollo
                      </Text>
                      <ScrollView>
                        <FlatList
                          data={stateSelected.Platform}
                          renderItem={({item}) => (
                            <Text
                              style={{
                                alignSelf: 'center',
                                paddingHorizontal: 9,
                                fontSize: 21,
                                color: 'white',
                                marginVertical: 3,
                              }}>
                              {item}
                            </Text>
                          )}
                        />
                      </ScrollView>
                    </View>
                  </View>
                  <View
                    style={{
                      marginVertical: 54,
                      flexDirection: 'row',
                      paddingHorizontal: 13,
                    }}>
                    <View style={{flex: 1}}>
                      <Text
                        style={{
                          fontSize: 21,
                          color: 'black',
                          fontWeight: 'bold',
                          letterSpacing: 3,
                          marginHorizontal: 13,
                          backgroundColor: '#ff6090',
                        }}>
                        Skills
                      </Text>
                      <ScrollView>
                        <FlatList
                          data={stateSelected.Skill}
                          renderItem={({item}) => (
                            <Text
                              style={{
                                alignSelf: 'center',
                                paddingHorizontal: 9,
                                fontSize: 21,
                                color: 'white',
                                marginVertical: 3,
                              }}>
                              {item}
                            </Text>
                          )}
                        />
                      </ScrollView>
                    </View>
                    <View style={{flex: 1}}>
                      <Text
                        style={{
                          fontSize: 21,
                          color: 'black',
                          fontWeight: 'bold',
                          letterSpacing: 3,
                          marginHorizontal: 13,
                          backgroundColor: '#ff6090',
                        }}>
                        Area
                      </Text>
                      <ScrollView>
                        <FlatList
                          data={stateSelected.Area}
                          renderItem={({item}) => (
                            <Text
                              style={{
                                alignSelf: 'center',
                                paddingHorizontal: 9,
                                fontSize: 21,
                                color: 'white',
                                marginVertical: 3,
                              }}>
                              {item}
                            </Text>
                          )}
                        />
                      </ScrollView>
                    </View>
                  </View>
                </ScrollView>
              </View>

              <View style={{flex: 0.5}}>
                <View style={{flexDirection: 'row'}}>
                  <View style={{flex: 1}}>
                    <BtnAppPrimary>Activar</BtnAppPrimary>
                  </View>
                  <View style={{flex: 1}}>
                    <BtnAppSecondary>Eliminar</BtnAppSecondary>
                  </View>
                </View>
                <View>
                  <BtnAppCoPrimary
                    fnBtn={() => {
                      toggleModal();
                    }}>
                    Regresar
                  </BtnAppCoPrimary>
                </View>
              </View>
            </>
          ) : (
            <Text>error</Text>
          )}
        </View>
      </Modal>

      {/* x */}

      <StatusBar hidden={true} />
      <SafeAreaView style={{backgroundColor: '#E91E63', flex: 1}}>
        <View style={{flex: 3, justifyContent: 'flex-start'}}>
          <ScrollView>
            <ViewTitleLeft>{nameScreen}</ViewTitleLeft>
            <View>
              {ToDoList ? (
                <FlatList
                  data={ToDoList}
                  renderItem={({item}) => (
                    <TouchableOpacity
                      onLongPress={() => {
                        toggleModal(item);
                      }}>
                      <View
                        style={{
                          paddingBottom: 22,
                          paddingTop: 22,
                          paddingHorizontal: 18,
                        }}>
                        <View
                          style={{
                            paddingBottom: 7,
                            borderBottomColor: '#fafafa',
                            borderBottomWidth: 2,
                            flexDirection: 'row',
                          }}>
                          {item.estado == 0 ? (
                            <Image
                              style={{
                                flex: 1,
                                width: undefined,
                                height: undefined,
                                resizeMode: 'contain',
                              }}
                              source={require('../../../images/esperando.png')}
                            />
                          ) : (
                            <Image
                              style={{
                                flex: 1,
                                width: undefined,
                                height: undefined,
                                resizeMode: 'contain',
                              }}
                              source={require('../../../images/activado.png')}
                            />
                          )}
                          <Text
                            style={{
                              color: '#fafafa',
                              flex: 6,
                              textAlign: 'center',
                              fontSize: 24,
                            }}>
                            {item.name}
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  )}
                />
              ) : (
                <>
                  <Text
                    style={{
                      paddingVertical: 100,
                      textAlign: 'center',
                      textAlignVertical: 'center',
                      fontSize: 34,
                      backgroundColor: 'white',
                      color: '#E91E63',
                    }}>
                    Primero Crea tu Primer ToDo
                  </Text>
                  <Text
                    style={{
                      fontSize: 80,
                      color: 'white',
                      textAlign: 'center',
                      textAlignVertical: 'center',
                    }}>
                    ⬇
                  </Text>
                </>
              )}
            </View>
          </ScrollView>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
          }}>
          <BtnAppPrimary
            fnBtn={() => {
              ToOtherScreen(Posiciones.posCreate);
            }}>
            Crear ToDo
          </BtnAppPrimary>

          <BtnAppSecondary
            fnBtn={() => {
              SalirFBauth();
            }}>
            <Text>Log Out 🤚</Text>
          </BtnAppSecondary>
        </View>

        {/* <TouchableHighlight
          style={styles.openButton}
          onPress={() => {
            setModalVisible(true);
          }}>
          <Text style={styles.textStyle}>Show Modal</Text>
        </TouchableHighlight> */}
      </SafeAreaView>
      {/* <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>

            <TouchableHighlight
              style={{...styles.openButton, backgroundColor: '#2196F3'}}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal> */}
    </>
  );
};

export default PantallaListado;

// const styles = StyleSheet.create({
//   centeredView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 22,
//   },
//   modalView: {
//     margin: 20,
//     backgroundColor: 'white',
//     borderRadius: 20,
//     padding: 35,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   openButton: {
//     backgroundColor: '#F194FF',
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2,
//   },
//   textStyle: {
//     color: 'white',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   modalText: {
//     marginBottom: 15,
//     textAlign: 'center',
//   },
// });
