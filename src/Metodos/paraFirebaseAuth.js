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
  // const {setUsrSession} = props;
  // setUsrSession(undefined);
  // firebase.auth().signOut();
  // console.log('saliendo');

  console.log('quiero salir T.T');
  firebase.auth().signOut();
};

export const IngresarFBauth = (props) => {
  console.log('INGRESAAAA');
  var email = 'correofalso@gmail.com';
  var password = '123456789';
  firebase.auth().signInWithEmailAndPassword(email, password);
};
export const CreandoUsuarioFB = () => {
  console.log('CreandoUsuarioFB');
};
