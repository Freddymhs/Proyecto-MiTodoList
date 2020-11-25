import React, {useEffect, useState} from 'react';
import {
  Alert,
  Button,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import {BackHandler} from 'react-native';
import {BotonIrAtras} from '../../../Modelo/FuncionesCelular';
// import firebase from '../../../Modelo/FuncionesFirebaseAuth';
import firebase from '../../../libs/Firebase';
import {
  InputMultipleLine,
  ViewTitleLeft,
} from '../../../ComponenteGlobales/SeccionMaquetacion';
import {InputOneline} from '../../../Modelo/../ComponenteGlobales/SeccionMaquetacion';

import {FlatGrid} from 'react-native-super-grid';

const PantallaCrear = (props) => {
  const {ToDoList} = props;
  const {setToDoList} = props;
  //seting user
  const {ObjUSR} = props;
  const {SettingA} = props;
  const [newAsettings, setnewAsettings] = useState(['q']);
  const {SettingB} = props;
  const {SettingC} = props;

  ///////////////////// firebase pushear nuevos datos

  //crear objeto
  const datorandom = [
    {
      name: 'a',
      operation: 'o',
      estado: 0,
      description: 'qeqe',
      deploy: 'deployasdasda',
      Skill: ['s', 'c', 'a', 'z'],
      Platform: ['s', 'c', 'a', 'z'],
      Area: ['s', 'c', 'a', 'z'],
    },
    {
      name: 'b',
      operation: 'o',
      estado: 0,
      description: 'qeqe',
      deploy: 'deployasdasda',
      Skill: ['s', 'c', 'a', 'z'],
      Platform: ['s', 'c', 'a', 'z'],
      Area: ['s', 'c', 'a', 'z'],
    },
  ];

  // pasar mi todo y subirlo ToDoList

  //1 setToDoList

  //2 firebase
  //   .database()
  //   .ref('/usuarios/' + ObjUSR.uid + '/ToDoList/')
  //   .set(datorandom);

  useEffect(() => {
    console.log('se cargo crear');
  }, []);

  const {ToOtherScreen, Posiciones} = props;
  const {nameScreen} = props;

  const [form, setform] = useState({
    name: '',
    description: '',
    operation: '',
    deploy: '',
  });

  //get textos
  const actualizaTexto = (e, type) => {
    setform({...form, [type]: e});
    console.log(form);
  };

  return (
    <SafeAreaView style={{backgroundColor: '#E91E63', flex: 1}}>
      <ScrollView>
        <ViewTitleLeft>{nameScreen}</ViewTitleLeft>
        <View style={{height: 19}}></View>
        <InputOneline
          texto="Nombre de proyecto"
          tipo="name"
          fnc={actualizaTexto}
        />
        <InputMultipleLine
          texto="Su breve descripcion  "
          tipo="description"
          fnc={actualizaTexto}
        />
        <InputMultipleLine
          texto="Algunas Operaciones Necesarias"
          tipo="operation"
          fnc={actualizaTexto}
        />

        <InputMultipleLine
          texto="Como y como se Desplegara el proyecto"
          tipo="deploy"
          fnc={actualizaTexto}
        />

        <Text>testeando que existen datos en array</Text>

        {/* {newAsettings.map((elemento) => {
          return <Text>{elemento}</Text>;
        })} */}

        <FlatGrid
          style={{marginTop: 10, flex: 1}}
          itemDimension={88}
          data={['q', 's', 'd', 'c', 'zs']}
          // data={settA}
          renderItem={({item}) => {

            return newAsettings.map((r) => {
              {
                return r == item ? (
                  <Text style={{backgroundColor: 'white'}}>{item}</Text>
                ) : (
                  <Text>{item}</Text>
                );
              }
            });
          }}

          // al click se agrega a una nueva lista
          // se revisa si lo renderizado esta en la nueva lista
          // si esta se le agrega color
          // si no esta no se hace nada

          // newAsettings.map((elemento) => {
          //   item == elemento ? Alert.alert('iguales') : Alert.alert('nop')
          //  })
          // <Text>s</Text>

          // return (
          //   <View>
          //     <Text>{item}</Text>
          //   </View>
          // );
          // if (item) {
          //   return item ? <Text>si</Text> : <Text>no</Text>;
          // }
          // newAsettings.map((r) => {
          //   true ? (
          //     <Text
          //       onPress={() => {
          //         setnewAsettings([...newAsettings, item]);
          //         console.log(newAsettings);
          //       }}>
          //       {item}
          //     </Text>
          //   ) : (
          //     console.log('no')
          //   );
          // })
        />

        <View>
          <Button title="Este ToDo crearlo!" />
          <Button
            title="Regresar"
            onPress={() => {
              ToOtherScreen(Posiciones.posList);
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PantallaCrear;
