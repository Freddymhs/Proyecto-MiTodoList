import React, {useEffect} from 'react';
import {
  Button,
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import {
  BtnAppSecondary,
  ViewTitleLeft,
} from '../../../ComponenteGlobales/SeccionMaquetacion';
import {SalirFBauth} from '../../../Modelo/FuncionesFirebaseAuth';

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
  return (
    <SafeAreaView style={{backgroundColor: '#E91E63', flex: 1}}>
      <ViewTitleLeft>{nameScreen}</ViewTitleLeft>
      <View>
        {ToDoList ? (
          <FlatList
            data={ToDoList}
            renderItem={({item}) => (
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
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
        }}>
        <BtnAppSecondary
          fnBtn={() => {
            SalirFBauth();
          }}>
          <Text>Log Out 🤚</Text>
        </BtnAppSecondary>
      </View>
    </SafeAreaView>
  );
};

export default PantallaListado;

{
  /* <Text key={id++}></Text> */
}

{
  /* <Text>{item.deploy}</Text> */
}
{
  /* <Text>{item.description}</Text> */
}

{
  /* <Text>Requerimientos para este Proyecto</Text> */
}
{
  /* <Text>Habilidades</Text>
              {item.Skill.map((dato) => {
                return <Text>{dato}</Text>;
              })} */
}
{
  /* <Text>Plataforma de Trabajo</Text>
              {item.Platform.map((dato) => {
                return <Text>{dato}</Text>;
              })} */
}
{
  /* <Text>Area objetivo del Proyecto </Text>
              {item.Area.map((dato) => {
                return <Text>{dato}</Text>;
              })} */
}
