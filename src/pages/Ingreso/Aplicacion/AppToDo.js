import React, {useEffect, useState} from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import PantallaEditar from './PantallaEditar';
import PantallaListado from './PantallaListado';
import PantallaConfigProfile from './PantallaConfigProfile';
import PantallaCrear from './PantallaCrear';
import {BotonIrAtras} from '../../../Modelo/FuncionesCelular';
import {WatchFirebaseToDo} from '../../../Modelo/FuncionesFirebaseAuth';

import firebase from '../../../libs/Firebase';

export default function AppToDo(props) {
  useEffect(() => {
    WatchFirebaseToDo({ObjUSR, setToDoList});
  }, []);

  const {ObjUSR} = props;
  //req 1 nombres
  const nameScreen = [
    'ToDo List ',
    'ToDo Edit',
    'ToDo Create',
    'ToDo Configure',
  ];

  //req 2 pendientes
  // const [stateListadoTareas, setstateListadoTareas] = useState({});
  const [ToDoList, setToDoList] = useState(undefined);

  //req 3 settings
  var SettingA = ObjUSR.AreaUSR; // AREAS
  var SettingB = ObjUSR.PlatformUSR; // PLATAFORMAS
  var SettingC = ObjUSR.SkillUSR; // HABILIDADES

  //req 4 swaps , posicion actual y previo
  const [allScreen, setallScreen] = useState(0);
  const Posiciones = {
    posList: 0,
    posEdit: 1,
    posCreate: 2,
    posProfile: 3,
  };
  const ToOtherScreen = (x) => {
    setallScreen(x);
  };

  //funciones de bootnes hardware, dispon.ible para todas las sub pantallas
  useEffect(() => {
    BotonIrAtras({ToOtherScreen, Posiciones});
  }, []);

  //main
  switch (allScreen) {
    case 0:
      return (
        <PantallaListado
          ToDoList={ToDoList}
          nameScreen={nameScreen[0]}
          Posiciones={Posiciones}
          ToOtherScreen={ToOtherScreen}
        />
      );
      break;
    case 1:
      return (
        <PantallaEditar
          nameScreen={nameScreen[1]}
          Posiciones={Posiciones}
          ToOtherScreen={ToOtherScreen}
        />
      );
      break;
    case 2:
      return (
        <PantallaCrear
          WatchFirebaseToDo={WatchFirebaseToDo}
          ObjUSR={ObjUSR}
          ToDoList={ToDoList}
          setToDoList={setToDoList}
          SettingA={SettingA}
          SettingB={SettingB}
          SettingC={SettingC}
          nameScreen={nameScreen[2]}
          Posiciones={Posiciones}
          ToOtherScreen={ToOtherScreen}
        />
      );
      break;
    case 3:
      return (
        <PantallaConfigProfile
          nameScreen={nameScreen[3]}
          Posiciones={Posiciones}
          ToOtherScreen={ToOtherScreen}
        />
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
