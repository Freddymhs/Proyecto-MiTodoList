import React, {Component, useEffect, useState} from 'react';
import {Alert, Button, Pressable, StyleSheet, Text, View} from 'react-native';
import SafeAreav2, {
  ScrollViewv2,
  ViewBig,
  ViewMedio,
  ViewCFG,
  ViewSmall,
} from '../../ComponenteGlobales/SeccionMaquetacion';
import StatusBarv2 from '../../ComponenteGlobales/StatusBarv2';

// export default function UserConfig() {

// const BackPage = () => {
//   console.log('avanzar');
// };

const UserConfig = (props) => {
  const {ObjGlobal} = props;


  // console.log(ObjGlobal);

  const [Pantalla, setPantalla] = useState(0);

  useEffect(() => {
    console.log(Pantalla);
  }, [Pantalla]);
  const NextPage = () => {
    if (Pantalla < 3) {
      return setPantalla(Pantalla + 1);
    }
  };
  const BackPage = () => {
    if (Pantalla > 0) {
      return setPantalla(Pantalla - 1);
    }
  };

  return (
    <>
      <StatusBarv2 />
      <SafeAreav2>
        {(() => {
          switch (Pantalla) {
            case 0:
              return <HolaMundo NextPage={NextPage} BackPage={BackPage} />;
            case 1:
              return (
                <PantallaHabilidades ObjGlobal={ObjGlobal.SkillAPP} NextPage={NextPage} BackPage={BackPage} />
              );
            case 2:
              return <PantallaAreas ObjGlobal={ObjGlobal.AreasAPP} NextPage={NextPage} BackPage={BackPage} />;
            case 3:
              return (
                <PantallaPlataformas ObjGlobal={ObjGlobal.PlatformAPP} NextPage={NextPage} BackPage={BackPage} />
              );
            default:
              return <HolaMundo NextPage={NextPage} BackPage={BackPage} />;
          }
        })()}
        <ViewSmall>
          <MenuFast NextPage={NextPage} BackPage={BackPage} />
        </ViewSmall>
      </SafeAreav2>
    </>
  );
};
export default UserConfig;

const styles = StyleSheet.create({});

const HolaMundo = ({NextPage, BackPage}) => {
  return (
    <>
      <ViewSmall>
        <Text
          style={{
            justifyContent: 'center',
            alignContent: 'center',
            textAlign: 'center',
          }}>
          BievenidoS
        </Text>
      </ViewSmall>
      <ViewCFG>
        <Text>Configuracion para seleccionar</Text>
        <Text>sus</Text>
        <Text>Habilidades,Metas,Herrmientas</Text>
      </ViewCFG>
    </>
  );
};

const PantallaHabilidades = (props) => {
  console.log(props);
  return (
    <>
      <ViewSmall>
        <Text
          style={{
            justifyContent: 'center',
            alignContent: 'center',
            textAlign: 'center',
          }}>
          Habilidadeses
        </Text>
      </ViewSmall>

      <ViewCFG>
        <Pressable style={{backgroundColor: 'white'}}>
          <Text>Listado de Habilidades</Text>
        </Pressable>
      </ViewCFG>
    </>
  );
};

const PantallaAreas = (props) => {
  console.log(props);
  return (
    <>
      <ViewSmall>
        <Text
          style={{
            justifyContent: 'center',
            alignContent: 'center',
            textAlign: 'center',
          }}>
          Areas
        </Text>
      </ViewSmall>
      <ViewCFG>
        <Pressable style={{backgroundColor: 'white'}}>
          <Text>Listado de AREAS</Text>
        </Pressable>
      </ViewCFG>
    </>
  );
};
const PantallaPlataformas = (props) => {
  console.log(props);
  return (
    <>
      <ViewSmall>
        <Text
          style={{
            justifyContent: 'center',
            alignContent: 'center',
            textAlign: 'center',
          }}>
          Plataformas
        </Text>
      </ViewSmall>
      <ViewCFG>
        <Pressable style={{backgroundColor: 'white'}}>
          <Text>Listado de Plataformas</Text>
        </Pressable>
      </ViewCFG>
    </>
  );
};

const MenuFast = ({NextPage, BackPage}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Pressable
        onPress={BackPage}
        style={{
          flex: 1,
          backgroundColor: 'red',
          padding: 20,
          borderRadius: 20,
          marginTop: 20,
        }}>
        <View>
          <Text>Atras</Text>
        </View>
      </Pressable>
      <Pressable
        onPress={NextPage}
        style={{
          flex: 1,
          backgroundColor: 'red',
          padding: 20,
          borderRadius: 20,
          marginTop: 20,
        }}>
        <View>
          <Text>Siguiente</Text>
        </View>
      </Pressable>
    </View>
  );
};
