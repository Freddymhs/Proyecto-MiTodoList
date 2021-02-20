import React, { useEffect } from 'react';
import {Button, Text, View} from 'react-native';
const PantallaConfigProfile = (props) => {
  useEffect(() => {
    console.log('se cargo profiles');
  }, []);
  const {ToOtherScreen, Posiciones} = props;
  const {nameScreen} = props;
  return (
    <>
      <View>
        <Text>{nameScreen}</Text>
      </View>

      <Button title="Guardar CAmbios de mi perfil!" />
      <Button
        title="Regresar "
        onPress={() => {
          ToOtherScreen(Posiciones.posList);
        }}
      />
    </>
  );
};

export default PantallaConfigProfile;
