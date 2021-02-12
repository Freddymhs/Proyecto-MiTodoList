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
import {
  cambiarEstadoTarea,
  EliminarTarea,
  SalirFBauth,
} from '../../../Modelo/FuncionesFirebaseAuth';
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
              {/* xd */}
              <View style={{flex: 1}}>
                <ScrollView>
                  <ViewTitleCenter>
                    {stateSelected.estado == 0 ? (
                      <Text>En Espera ⏱</Text>
                    ) : (
                      <Text>En Desarrollo</Text>
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
                        {stateSelected.Platform ? (
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
                        ) : (
                          <></>
                        )}
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
                        {stateSelected.Skill ? (
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
                        ) : (
                          <></>
                        )}
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
                        {stateSelected.Area ? (
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
                        ) : (
                          <></>
                        )}
                      </ScrollView>
                    </View>
                  </View>
                </ScrollView>
              </View>
              {/* xd */}
              <View style={{flex: 0.5}}>
                <View style={{flexDirection: 'row'}}>
                  <View style={{flex: 1}}>
                    <BtnAppPrimary
                      fnBtn={() => {
                        cambiarEstadoTarea({ObjUSR, stateSelected, ToDoList});
                        toggleModal();
                        // WatchFirebaseToDo({ObjUSR, setToDoList});
                      }}>
                      {stateSelected.estado == 1 ? 'pausar' : 'activar'}
                    </BtnAppPrimary>
                  </View>
                  <View style={{flex: 1}}>
                    <BtnAppSecondary
                      fnBtn={() => {
                        EliminarTarea({ObjUSR, stateSelected, ToDoList});
                        toggleModal();
                        // WatchFirebaseToDo({ObjUSR, setToDoList});
                      }}>
                      Eliminar
                    </BtnAppSecondary>
                  </View>
                </View>
                <View>
                  <BtnAppCoPrimary
                    fnBtn={() => {
                      toggleModal();
                      WatchFirebaseToDo({ObjUSR, setToDoList});
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
                // ToDoList.map((x) => {
                //   return (
                //     <Text style={{color: 'black', backgroundColor: 'white'}}>
                //       qwerty
                //     </Text>
                //   );
                // })
                <FlatList
                  keyExtractor={(item, index) => 'key' + index}
                  data={ToDoList}
                  renderItem={({item}) => {
                    return item ? (
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
                    ) : (
                      <></>
                    );
                  }}
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
      </SafeAreaView>
    </>
  );
};

export default PantallaListado;
