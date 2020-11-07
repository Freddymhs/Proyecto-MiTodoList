import React, {useContext, useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Alert,
} from 'react-native';
// mis componentes
import PresentacionApp from './src/pages/PreIngreso/PresentacionAPP';
import AppToDo from './src/pages/Ingreso/AppToDo';

import firebase from './src/libs/Firebase';
import {
  IngresarFBauth,
  UsrValido,
  setUsrValido,
  TraerDatosFBConfig,
} from './src/Modelo/FuncionesFirebaseAuth';
import AppCheckData from './src/pages/Ingreso/AppCheckData';
import {
  UIDcurrentUser,
  SalirFBauth,
  EntornoUsuarioPrepradado,
  ExisteUIDenDB,
  CreandoUsuarioFB,
} from './src/Modelo/FuncionesFirebaseAuth';
import ClsUsuario from './src/Modelo/ClsUsuario';
import ClsMiTodoList from './src/Modelo/ClsMiTodoList';

export default function App() {
  const usuario = new ClsUsuario();
  //////////////ALMACENAR DATOS DEL USUARIO
  const [ObjUSR, setObjUSR] = useState();
  const [ConfigState, setConfigState] = useState(false);

  //////////////////session para swap screens
  const [UsrSession, setUsrSession] = useState(null);

  //Datos globals para configurar areas,plataformas,skills
  const [GlobalData, setGlobalData] = useState({
    PlatformAPP: [],
    SkillAPP: [],
    AreasAPP: [],
  });

  var ObjGlobal = new ClsMiTodoList();
  // firebase.auth().signOut();
  useEffect(() => {
    ////usuariio esta registraod en AUTH?
    firebase.auth().onAuthStateChanged((response) => {
      if (response == null) {
        console.log('aun no ah cambiado echo nadaa');
      } else {
        console.log('logeaod en AUTH');

        // //guardamos su ID
        setUsrSession(response.uid);

        // TRAEMOS LOS DATOS de la BD
        ExisteUIDenDB(response.uid, setObjUSR);

        // console.log(ObjUSR);
        // console.log(response.email);

        if (
          ObjUSR.AreaUSR == undefined ||
          ObjUSR.PlatformUSR == undefined ||
          ObjUSR.SkillUSR == undefined
        ) {
          console.log(' usuario no tiene todos sus datos listos');
          setConfigState(false);
        } else {
          console.log(' usuario listos');
          setConfigState(true);
        }
      }

      //// Obten todos los datos para CONFIGURAR en cualquier momento
      TraerDatosFBConfig(setGlobalData);
    });
  }, [UsrSession]);
  ObjGlobal = GlobalData;

  ////FORMULARIO
  const [Formulario, setFormulario] = useState({
    email: '',
    password: '',
  });

  const ActualizaFormulario = (type, value) => {
    setFormulario({...Formulario, [type]: value});
  };

  return (
    <>
      {/* {UsrSession == null ? (
        <PresentacionApp
          IngresarFBauth={IngresarFBauth}
          setUsrSession={setUsrSession}
          ActualizaFormulario={ActualizaFormulario}
          Formulario={Formulario}
          setObjUSR={setObjUSR}
        />
      ) : ConfigState ? (
        <Text>x</Text>
      ) : (
        <Text>d</Text>
      )} */}
      {UsrSession == null ? (
        <PresentacionApp
          IngresarFBauth={IngresarFBauth}
          setUsrSession={setUsrSession}
          ActualizaFormulario={ActualizaFormulario}
          Formulario={Formulario}
          setObjUSR={setObjUSR}
        />
      ) : (
        <AppCheckData
          ObjGlobal={ObjGlobal}
          ConfigState={ConfigState}
          setConfigState={setConfigState}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({});
