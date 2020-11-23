import React, {useEffect, useState} from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import PantallaEditar from './PantallaEditar';
import PantallaListado from './PantallaListado';
import PantallaConfigProfile from './PantallaConfigProfile';
import PantallaCrear from './PantallaCrear';
import {BotonIrAtras} from '../../../Modelo/FuncionesCelular';
import {SolicitaDatosUser} from '../../../Modelo/FuncionesFirebaseAuth';

import firebase from '../../../libs/Firebase';

export default function AppToDo(props) {
  //0 solicita datos de forma dinamica
  const {ObjUSR} = props;
  const RefreshData = () => {
    const uid = ObjUSR.uid;
    try {
      SolicitaDatosUser({uid, setUsuario});
      console.log('se piden datos');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    RefreshData();
  }, []);
  ////////////////////////////////////////////////////////////////
  const [Usuario, setUsuario] = useState({});

  //req 1 nombres
  const nameScreen = [
    'ToDo List ',
    'ToDo Edit',
    'ToDo Create',
    'ToDo Configure',
  ];
  //req 2 pendientes
  const [stateListadoTareas, setstateListadoTareas] = useState({});
  useEffect(() => {
    setstateListadoTareas(Usuario.ToDoList);
  }, []);
  //req 3 settings
  var SettingA = Usuario.AreaUSR;
  var SettingB = Usuario.PlatformUSR;
  var SettingC = Usuario.SkillUSR;

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

  //funciones de bootnes hardware, disponible para todas las sub pantallas
  useEffect(() => {
    BotonIrAtras({ToOtherScreen, Posiciones});
  }, []);

  //main
  switch (allScreen) {
    case 0:
      return (
        <PantallaListado
          RefreshData={RefreshData}
          stateListadoTareas={stateListadoTareas}
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
