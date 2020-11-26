import React, {useEffect, useState} from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import firebase from '../libs/Firebase';
import RNRestart from 'react-native-restart';

export default function paraFirebaseAuth() {
  return (
    <View>
      <Text>:D</Text>
    </View>
  );
}

// ========================FIREBASE===================================
// Salir DE FIREBASE
export const SalirFBauth = (props) => {
  firebase.auth().signOut();
  RNRestart.Restart();
};

// INGRESANDO en fb AUTH
export const IngresarFBauth = (props) => {
  var email = props.email;
  var password = props.password;
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch((error) => {
      Alert.alert(error.toString());
    });
};

// registrandome en FB
export const RegistroAuthFB = (props) => {
  var email = props.email;
  var password = props.password;
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(function (user) {
      var datosnuevo = firebase.auth().currentUser;
      firebase
        .database()
        .ref('usuarios/' + datosnuevo.uid)
        .set({
          uid: datosnuevo.uid,
          email: datosnuevo.email,
        });
    })
    .catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      Alert.alert(errorCode + ' ' + errorMessage);
    });
};

// ========================DATABASREALTIME===================================
//usuario registrado en db?
export const ExisteUIDenDB = (uid, setObjUSR) => {
  firebase
    .database()
    .ref('/usuarios/')
    .child(uid)
    .once('value', function (snapshot) {
      setObjUSR(snapshot.val());
    });
};

//obten UID del usuario
export const UIDcurrentUser = () => {
  return firebase.auth().currentUser.uid;
};

// Crear usuario base con su UID
export const CreandoUsuarioFB = (user) => {
  firebase
    .database()
    .ref('usuarios/' + user.uid)
    .set(user);
};

// Actualizando datos de un usuario
export const ActualizandoDatos = (user) => {
  firebase
    .database()
    .ref('usuarios/' + user.uid)
    .set(user);
};

// Trae datos GLOBALES de la plataforma
export const TraerDatosFBConfig = (setGlobalData) => {
  firebase
    .database()
    .ref('DatosPlataforma/')
    .once('value', function (dataSnapshot) {
      setGlobalData(dataSnapshot.val());
    });
};

//
// creamos usuario en BD con su UID
export const AgregandoSettingEntorno = (user) => {
  // firebase
  //   .database()
  //   .ref('usuarios/' + user.uid)
  //   .set(user);
};

//usuario tiene su CONFIGURACION areas,platforms,skills DEFINIDOS?
export const ConfigPerfilUsuario = (uid, setObjUSR) => {
  firebase
    .database()
    .ref('/usuarios/' + uid + '/Areas')
    .once('value', function (snapshot) {
      setObjUSR(snapshot.val());
    });
};

// //obten todos los datos del usuario dentro de la app
// export const SolicitaDatosUser = async ({uid, setUsuario}) => {
//   firebase
//     .database()
//     .ref('/usuarios/' + uid)
//     .once('value', function (snap) {
//       setUsuario(snap.val());
//     });
// };

// //

export const WatchFirebaseToDo = (props) => {
  console.log('=====================================================x====');
  const {ObjUSR} = props;
  const {setToDoList} = props;

  try {
    firebase
      .database()
      .ref('/usuarios/' + ObjUSR.uid + '/ToDoList/')
      .once('value', function (snapshot) {
        if (snapshot.val() !== null) {
          setToDoList(snapshot.val());

          //pasa listado tareas
        } else {
          console.log('sin datos');
          setToDoList(undefined);
        }
      });
  } catch (error) {
    console.log('error al consultar a la base de datos');
  }
};

export const NewToDoTask = (nuevoTask, ObjUSR) => {
  console.log('se sube');
  try {
    firebase
      .database()
      .ref('/usuarios/' + ObjUSR.uid + '/ToDoList/')
      .set(nuevoTask);
  } catch (error) {
    console.log(error);
  }
};
