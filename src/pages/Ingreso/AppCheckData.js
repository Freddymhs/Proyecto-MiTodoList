import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import firebase from '../../libs/Firebase';
import {
  UIDcurrentUser,
  ExisteUIDenDB,
  TraerDatosFBConfig,
} from '../../Modelo/FuncionesFirebaseAuth';

import AppToDo from './AppToDo';

import ConfigStart from '../configs/ConfigsStart';

export default function AppCheckData(props) {
  const {ObjUSR} = props; // son los datos obtenidos desde app
  const [ConfigState, setConfigState] = useState(); // indica que no tiene su perfil listo

  // DATOS GLOBALES
  const [GlobalData, setGlobalData] = useState({
    PlatformAPP: [],
    SkillAPP: [],
    AreasAPP: [],
  });

  useEffect(() => {
    // DATOS GLOBALES PARA CONFIGURACION FUTURA
    TraerDatosFBConfig(setGlobalData);

    //traer los datos de esta persona ya logeada

    //revisa configuracion Entorno del Usuario
    if (ObjUSR == undefined) {
      console.log('vamos a llenarlo todo');
      setConfigState(false);
    } else {
      console.log('hay algo que llenar?');
      if (
        ObjUSR.AreaUSR == undefined ||
        ObjUSR.PlatformUSR == undefined ||
        ObjUSR.SkillUSR == undefined
      ) {
        console.log('vamos a llenarlo alguno');

        setConfigState(false);
      } else {
        console.log('todos estan llenitos');
        setConfigState(true);
      }
    }
  }, [ObjUSR]);

  console.log(ObjUSR);

  console.log('#################CHECKDATA################');
  return ConfigState ? (
    <AppToDo />
  ) : (
    // <Text>vamos a la aplicaicon</Text>
    // <UserConfig />;
    <ConfigStart GlobalData={GlobalData} ObjUSR={ObjUSR} />
  );
}

const styles = StyleSheet.create({});
