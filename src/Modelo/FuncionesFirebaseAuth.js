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

export const IngresarFBauth = (props) => {
  // console.log('INGRESAAAA');
  var email = 'correofalso@gmail.com';
  var password = '123456789';
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(
      (response) => {
        if (ExisteUIDenDB(response.user.uid) == null) {
          console.log('no existe este usuario , no se va a  hacer nada?');
        } else {
          console.log('existe el usuario hay que cargar sus datos');
        }
      },
      // firebase.auth().currentUser  !== null ? console.log(firebase.auth().currentUser): console.log(firebase.auth().currentUser)
    );
};
export const CreandoUsuarioFB = (user) => {
  firebase
    .database()
    .ref('usuarios/' + user.uid)
    .set({
      uid: user.uid,
      email: user.email,
    });
};

export const UIDcurrentUser = () => {
  return firebase.auth().currentUser.uid;
};

export const ExisteUIDenDB = (uid) => {
  return firebase
    .database()
    .ref('/usuarios/' + uid)
    .once('value', (snapshot) => {
      console.log(snapshot.val());
    });

  // return firebase.database().
  // ref('/usuarios/' + '2163871638912')

  // firebase
  //   .database()
  //   .ref('/usuarios/' + '-----')
  //   .once('value', (snapshot) => {
  //     if (snapshot.val() == null) {
  //       return false;
  //     } else {
  //       return true;
  //     }
  //   });

  // firebase
  //   .database()
  //   .ref('/usuarios/' + 'bmJEC20Zo9fYXENHKABpd6hktFL2')
  //   .once('value', (snapshot) => {
  //     snapshot.forEach((element) => {
  //       console.log('hola');
  //     });
  //   });
};
