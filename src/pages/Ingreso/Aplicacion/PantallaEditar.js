import React, {useEffect} from 'react';

import {Button, Text, View} from 'react-native';
const PantallaEditar = (props) => {
  useEffect(() => {
    console.log('se cargo editar');
  }, []);

  const {ToOtherScreen, Posiciones} = props;
  const {nameScreen} = props;

  return (
    <>
      <View>
        <Text>{nameScreen}</Text>
      </View>

      <Button title="Confirmar Edicion" />
      <Button
        title="Atras"
        onPress={() => {
          ToOtherScreen(Posiciones.posList);
        }}
      />
    </>
  );
};

export default PantallaEditar;
