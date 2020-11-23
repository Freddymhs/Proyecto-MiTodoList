import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function AppToDo(props) {
  const nameScreen = [
    'ToDo List ',
    'ToDo Create',
    'ToDo Edit',
    'ToDo Configure',
  ];
  var TaskPendienteFake = [
    {
      name: 'mi proyecto n1',
      description: 'este proyecto ayuda a mis causas',
      operations: 'operaciones necesarias para completarse',
      deploy: 'como se piensa desplegar el proyecto',
      platforms: ['a', 'b', 'c', 'd', 'e', 'f'],
      skills: ['1', '2', '3', '4', '5', '6'],
      areas: ['q', 'w', 'e', 'r', 't', 'y'],
    },
    {
      name: 'mi proyecto n2',
      description: 'este proyecto ayuda a mis causas 2',
      operations: 'operaciones necesarias para completarse 2',
      deploy: 'como se piensa desplegar el proyecto 2',
      platforms: ['a', 'b', 'c', 'd', 'e', 'f'],
      skills: ['1', '2', '3', '4', '5', '6'],
      areas: ['q', 'w', 'e', 'r', 't', 'y'],
    },
  ];

  var SettingUsuario = 'donde esta esto?';

  const SwapPantalla = () => {
    console.log('vamos a camibiar a la pantalla ..._______?');
  };

  const [stateListadoTareas, setstateListadoTareas] = useState({});
  const [statePantalla, setstatePantalla] = useState(0);

  useEffect(() => {
    console.log('todos los datos cargados son estos  datos');
  }, []);

  switch (statePantalla) {
    case 0:
      return (
        <View>
          <Text>0</Text>
        </View>
      );
      break;
    case 1:
      return (
        <View>
          <Text>1</Text>
        </View>
      );
      break;
    case 2:
      return (
        <View>
          <Text>2</Text>
        </View>
      );
      break;
    case 3:
      return (
        <View>
          <Text>3</Text>
        </View>
      );
      break;

    default:
      break;
  }
}

const styles = StyleSheet.create({});

/* <FlatList
        data={ProyectosPendientes}
        renderItem={({item}) => (
          <Text key={id++}>
            {id} {item}
          </Text>
        )}
      />
       */

/* <ViewBig>
            <ScrollViewv2>
              <Tarjeta>
                <Subtitulo subt={'Plataformas de Desarrollo'} />
                <FlatHorizontal ElementosArray={MiPlataforma} />
              </Tarjeta>
              <Tarjeta>
                <Subtitulo subt={'Buscas Mejorar Estas Areas'} />
                <FlatHorizontal ElementosArray={MisConocimientos} />
              </Tarjeta>
              <Tarjeta>
                <Subtitulo subt={'Mis Conocimientos'} />
                <FlatHorizontal ElementosArray={QueAreaobjetivos} />
              </Tarjeta>
            </ScrollViewv2>
          </ViewBig> */

// const ProyectosPendientes = [
//   'todoListo',
//   'Api rest en MERN',
//   'Doname',
//   'Doname',
//   'Doname',
//   'Doname',
//   'Doname',
//   'Doname',
//   'Doname',
//   'Doname',
//   'Doname',
//   'Doname',
// ];
// const QueAreaobjetivos = [
//   'testUnitarios',
//   'Disenio',
//   'CRUD',
//   'Static Page',
//   'Microservicios',
//   'Consumo de APIs',
//   'app Celular',
// ];
// const MiPlataforma = ['gatsby', 'mern', 'reactnative']; //laravel,python,ruby
// const MisConocimientos = [
//   'reactjs',
//   'nodejs',
//   'express',
//   'reactnative',
//   'javascript',
//   'Mysql',
//   'firebase',
//   'APIrest',
//   'bootstrap',
//   'css',
// ];
