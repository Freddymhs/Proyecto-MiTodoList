import React, {useEffect} from 'react';
import {Alert, Button, Text, View} from 'react-native';
import {BackHandler} from 'react-native';
import {BotonIrAtras} from '../../../Modelo/FuncionesCelular';

const PantallaCrear = (props) => {
  const {ToOtherScreen, Posiciones} = props;
  const {nameScreen} = props;



  return (
    <>
      <View>
        <Text>{nameScreen}</Text>
      </View>
      <Button title="Este ToDo crearlo!" />
      <Button
        title="Regresar"
        onPress={() => {
          ToOtherScreen(Posiciones.posList);
        }}
      />
    </>
  );
};

export default PantallaCrear;
