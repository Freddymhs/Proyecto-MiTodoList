
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
  SalirFBauth,
  UsrValido,
  setUsrValido,
} from './src/Metodos/paraFirebaseAuth';



export default function App() {
  const [UsrSession, setUsrSession] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((response) => {
      setUsrSession(response);
    });
  }, [setUsrSession]);

  return (
    <>
      {UsrSession == null ? (
        <PresentacionApp
          IngresarFBauth={IngresarFBauth}
          setUsrSession={setUsrSession}
        />
      ) : (
        <AppToDo
          SalirFBauth={SalirFBauth}
          setUsrSession={setUsrSession}
          UsrSession={UsrSession}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({});
