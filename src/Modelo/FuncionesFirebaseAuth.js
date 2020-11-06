import React, {useEffect, useState} from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import firebase from '../libs/Firebase';

export default function paraFirebaseAuth() {
  return (
    <View>
      <Text>hola</Text>
    </View>
  );
} //////////////////////////////////////////////////////
// OBTENER DATOS DE FIREBASE
// todos los datos personales del usuario

// todos los documentos del UID usuario

// todos los documentos de x tipo dentro de este UID

// CRUD DE FIREBASE
export const SalirFBauth = (props) => {
  firebase.auth().signOut();
};
// INGRESANDO en firebase
export const IngresarFBauth = (props) => {
  var email = props.email;
  var password = props.password;
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    // .then(
    //   (response) => {
    //     if (ExisteUIDenDB(response.user.uid) == null) {
    //       console.log('no existe este usuario , no se va a  hacer nada?');
    //     } else {
    //       console.log('existe el usuario hay que cargar sus datos');
    //     }
    //   }
    // )
    .catch((error) => {
      Alert.alert(error.toString());
    });

  // firebase.auth().currentUser  !== null ? console.log(firebase.auth().currentUser): console.log(firebase.auth().currentUser)
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

// uid actual del usuario ?
export const UIDcurrentUser = () => {
  return firebase.auth().currentUser.uid;
};

// creamos usuario en BD con su UID
export const CreandoUsuarioFB = (user) => {
  firebase
    .database()
    .ref('usuarios/' + user.uid)
    .set({
      uid: user.uid,
      email: user.email,
    });
};
