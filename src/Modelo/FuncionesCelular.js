import React from 'react';
import {BackHandler} from 'react-native';

const FuncionesCelular = () => {
  return <Text>funciones</Text>;
};

export const BotonIrAtras = (props) => {
  const {ToOtherScreen} = props; // funcion
  const {Posiciones} = props; // Posiciones 0 a 3 de las diferentes pantallas dentro del app
  BackHandler.addEventListener('hardwareBackPress', () => {
   console.log('back btn')
    ToOtherScreen(Posiciones.posList); // regresa a pantalla listado todo
    return true;
  });
};

export default FuncionesCelular;
