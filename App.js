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
} from './src/Modelo/FuncionesFirebaseAuth';
import AppCheckData from './src/pages/Ingreso/AppCheckData';

export default function App() {
  //////////////////session
  const [UsrSession, setUsrSession] = useState(null);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((response) => {
      setUsrSession(response);
      // console.log(response.uid);
      console.log(response.uid);
    });
  }, [UsrSession]);

  ///////////formulario
  const [Formulario, setFormulario] = useState({
    email: 'nombre',
    password: 'dada',
  });

  const ActualizaFormulario = (type, value) => {
    setFormulario({...Formulario, [type]: value});
  };
  //////////////DATOS PERSONALES DEL USUARIO
  const [ObjUSR, setObjUSR] = useState();

  return (
    <>
      {UsrSession == null ? (
        <PresentacionApp
          IngresarFBauth={IngresarFBauth}
          setUsrSession={setUsrSession}
          ActualizaFormulario={ActualizaFormulario}
          Formulario={Formulario}
        />
      ) : (
        <AppCheckData ObjUSR={ObjUSR} setObjUSR={setObjUSR} />
      )}
    </>
  );
}

const styles = StyleSheet.create({});
