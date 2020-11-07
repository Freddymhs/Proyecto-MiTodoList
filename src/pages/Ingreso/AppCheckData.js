import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import firebase from '../../libs/Firebase';
import {
  UIDcurrentUser,
  ExisteUIDenDB,
} from '../../Modelo/FuncionesFirebaseAuth';
import AppToDo from './AppToDo';

import ConfigStart from '../configs/ConfigsStart';

export default function AppCheckData(props) {
  // const [USERpreparado, setUSERpreparado] = useState(false); // configuracion
  // const {ObjUSR, setObjUSR} = props; // perfil completo del usuario
  const {ConfigState} = props;
  const {ObjGlobal} = props;

  // useEffect(() => {
  //   // cual es el UID del usuario?
  //   const uid = UIDcurrentUser();
  //   // el usuario esta registrado en la BD?
  //   ExisteUIDenDB(uid, setObjUSR);
  //   if (!ObjUSR) {
  //     console.log('no');
  //   } else {
  //     console.log('existe');
  //     if (ObjUSR.AreaUSR && ObjUSR.PlatformUSR && ObjUSR.SkillUSR) {
  //       console.log('este usuario lo tiene todo.........');
  //       setUSERpreparado(true); // mostrar pantalla de aplicacion
  //     } else {
  //       console.log('Ir a  Configuracion..........');
  //       setUSERpreparado(false); // mostrar pantalla de configuracion
  //     }
  //   }
  // }, []);

  // revisar si el usuario tiene dentro de su cuenta  areas
  // revisar si el usuario tiene dentro de su cuenta  platforms
  // revisar si el usuario tiene dentro de su cuenta  skills
  //si las 3 son positivas entonces se avanza a la proxima pantalla
  // si no son positivas se inicia la cofiguracion

  // return !USERpreparado ? (
  //   // <UserConfig />
  //   <Text>vamosa configurar</Text>
  // ) : (
  //   <Text>vamos ir a la aplicacion</Text>
  // );

  return ConfigState ? (
    <Text>esta todo config</Text>
  ) : (
    <ConfigStart ObjGlobal={ObjGlobal} />
  );
}

const styles = StyleSheet.create({});
