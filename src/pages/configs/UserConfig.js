import React, {Component, useEffect, useState} from 'react';
import {
  Alert,
  Button,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import SafeAreav2, {
  ScrollViewv2,
  ViewBig,
  ViewMedio,
  ViewCFG,
  ViewSmall,
  BtnAppPrimary,
  Area2BtnInSmallView,
} from '../../ComponenteGlobales/SeccionMaquetacion';
import StatusBarv2 from '../../ComponenteGlobales/StatusBarv2';
import {ActualizandoDatos} from '../../Modelo/FuncionesFirebaseAuth';

import RNRestart from 'react-native-restart';


///////////////////////////////////////////////////////////PARTE1
// movimiento en la presentacion
const UserConfig = (props) => {
  const {GlobalData} = props;
  const [Pantalla, setPantalla] = useState(0);
  const {ObjUSR} = props;
  const NextPage = () => {
    if (Pantalla < 4) {
      console.log('hola');
      return setPantalla(Pantalla + 1);
    }
    if (Pantalla == 4) {
      console.log('estamos listos?');
      if (
        NuevoPerfil.AreaUSR != '' &&
        NuevoPerfil.PlatformUSR != '' &&
        NuevoPerfil.SkillUSR != ''
      ) {
        setNuevoPerfil((prev) => ({
          ...prev,
          uid: ObjUSR.uid,
          email: ObjUSR.email,
        }));
        ///////////////////////////para que funcione solo descomentar lo de abajo
        ActualizandoDatos(NuevoPerfil);
        RNRestart.Restart();
        // https://www.npmjs.com/package/react-native-restart
      }
    }
  };
  const BackPage = () => {
    if (Pantalla > 0) {
      return setPantalla(Pantalla - 1);
    }
  };

  // state para el usuario nuevo y su nuevo perfil
  const [NuevoPerfil, setNuevoPerfil] = useState({
    AreaUSR: [],
    PlatformUSR: [],
    SkillUSR: [],
  });
  ////////////////////Borrar Listas?
  const DelSkills = () => {
    setNuevoPerfil((prevState) => ({
      ...prevState,
      SkillUSR: [],
    }));
  };
  const DelAreas = () => {
    setNuevoPerfil((prevState) => ({
      ...prevState,
      AreaUSR: [],
    }));
  };
  const DelPlatform = () => {
    setNuevoPerfil((prevState) => ({
      ...prevState,
      PlatformUSR: [],
    }));
  };
  ////////////////////////////////actualizar lista de nuevo perfil
  const actualizarLista = (e) => {
    const item = e.item;
    if (Pantalla == 1) {
      console.log('actulizando la 1');

      if (NuevoPerfil.SkillUSR.indexOf(item) > -1) {
        Alert.alert('Habildiad ya fue agregada');
      } else {
        const prevNestedPosition = NuevoPerfil.SkillUSR;
        setNuevoPerfil((prevState) => ({
          ...prevState,
          SkillUSR: [...prevNestedPosition, item],
        }));
      }
      console.log(NuevoPerfil);
    }
    if (Pantalla == 2) {
      console.log('actulizando la 2');
      if (NuevoPerfil.AreaUSR.indexOf(item) > -1) {
        Alert.alert('Area ya fue agregada');
      } else {
        const prevNestedPosition = NuevoPerfil.AreaUSR;
        setNuevoPerfil((prevState) => ({
          ...prevState,
          AreaUSR: [...prevNestedPosition, item],
        }));
      }
    }
    if (Pantalla == 3) {
      console.log('actulizando la 3');

      if (NuevoPerfil.PlatformUSR.indexOf(item) > -1) {
        Alert.alert('Plataforma ya fue seleccionada');
      } else {
        const prevNestedPosition = NuevoPerfil.PlatformUSR;
        setNuevoPerfil((prevState) => ({
          ...prevState,
          PlatformUSR: [...prevNestedPosition, item],
        }));
      }
    }
  };

  // atributos de cada pantalla
  const [Title, setTitle] = useState('default');
  const [Lista, setLista] = useState([]);

  useEffect(() => {
    if (ObjUSR == undefined) {
      console.log('PRIMERA VEZ');
    } else {
      // /    console.log(ObjUSR);
      // console.log(ObjUSR);
      setNuevoPerfil((prev) => ({
        ...prev,
        uid: ObjUSR.uid,
        email: ObjUSR.email,
      }));
    }

    switch (Pantalla) {
      case 0:
        setTitle('VAMOS A CONFIGURAR sus Habilidades, Metas y Herramientas :)');
        console.log(GlobalData);
        // setLista([]);
        break;
      case 1:
        setTitle('Seleccione sus Habilidades para futuros Desarrollos');
        setLista(GlobalData.SkillAPP);
        break;

      case 2:
        setTitle('?En que Areas Desea Trabajar?');
        setLista(GlobalData.AreasAPP);
        break;
      case 3:
        setTitle('?Que Plataformas Usara para Completar sus Proyectos?');
        setLista(GlobalData.PlatformAPP);
        break;
      case 4:
        setTitle('?Estos son sus datos finales?');
        setLista(GlobalData);
        // console.log('estos tiene el usuario');
        // console.log(NuevoPerfil);
        break;
    }
  }, [Pantalla]);

  return (
    <>
      <StatusBarv2 />
      <SafeAreav2>
        <ViewSmall>
          <Text
            style={{
              textAlign: 'center',
            }}>
            {Title}
          </Text>
        </ViewSmall>
        <PantalladBASE
          Lista={Lista}
          Title={Title}
          actualizarLista={actualizarLista}
          Pantalla={Pantalla}
          NuevoPerfil={NuevoPerfil}
          DelSkills={DelSkills}
          DelAreas={DelAreas}
          DelPlatform={DelPlatform}

          // NuevoPerfil={Pantalla == 4 ? NuevoPerfil : ''}
        />
        <ViewSmall>
          <MenuFast NextPage={NextPage} BackPage={BackPage} />
        </ViewSmall>
      </SafeAreav2>
    </>
  );
};
export default UserConfig;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
});

const PantalladBASE = (props) => {
  const {Title} = props;
  const {Lista} = props;
  const {actualizarLista} = props;
  const {Pantalla} = props;
  const {NuevoPerfil} = props;

  const {DelSkills} = props;
  const {DelAreas} = props;
  const {DelPlatform} = props;

  // const {NuevoPerfil} = props;

  return (
    <ViewCFG>
      <Pressable>
        {Pantalla != 4 ? (
          <FlatList
            data={Lista}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.button}
                // activeOpacity={0}
                onPress={() => {
                  actualizarLista({item});
                }}>
                <Text
                  style={{
                    flex: 1,
                    borderColor: '#f8f8ff',
                    borderBottomWidth: 1,
                    borderTopWidth: 1,
                    height: 200,
                    width: Dimensions.get('screen').width - 50,
                    textAlignVertical: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    color: '#f8f8ff',
                    fontWeight: 'bold',
                    fontSize: 31,
                  }}>
                  {item}
                </Text>
              </TouchableOpacity>
            )}
          />
        ) : (
          <>
            {NuevoPerfil.SkillUSR != '' ? (
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text
                  style={{
                    color: '#f8f8ff',
                    fontWeight: 'bold',
                  }}>
                  Sus Habilidades
                </Text>
                <Text
                  // DelSkills
                  // DelAreas
                  // DelPlatform

                  onPress={() => DelSkills()}
                  style={{
                    color: '#f8f8ff',
                    fontWeight: 'bold',
                    backgroundColor: 'red',
                  }}>
                  Borrar Seleccion?
                </Text>
              </View>
            ) : (
              <Text> Necesita almenos 1 Plataforma para Continuar</Text>
            )}
            <FlatList
              data={NuevoPerfil.SkillUSR}
              horizontal={true}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={styles.button}
                  // activeOpacity={0}
                  onPress={() => {
                    console.log('enviarlo?');
                  }}>
                  <Text
                    style={{
                      flex: 1,
                      borderColor: '#f8f8ff',
                      borderBottomWidth: 1,
                      borderTopWidth: 1,
                      height: 200,
                      width: Dimensions.get('screen').width - 50,
                      textAlignVertical: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                      color: '#f8f8ff',
                      fontWeight: 'bold',
                      fontSize: 31,
                    }}>
                    {item}
                  </Text>
                </TouchableOpacity>
              )}
            />

            {NuevoPerfil.AreaUSR != '' ? (
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text
                  style={{
                    color: '#f8f8ff',
                    fontWeight: 'bold',
                  }}>
                  Sus Areas
                </Text>
                <Text
                  DelPlatform
                  onPress={() => DelAreas()}
                  style={{
                    color: '#f8f8ff',
                    fontWeight: 'bold',
                    backgroundColor: 'red',
                  }}>
                  Borrar Seleccion?
                </Text>
              </View>
            ) : (
              <Text>Necesita almenos 1 Area para Continuar</Text>
            )}

            <FlatList
              data={NuevoPerfil.AreaUSR}
              horizontal={true}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={styles.button}
                  // activeOpacity={0}
                  onPress={() => {
                    console.log('enviarlo?');
                  }}>
                  <Text
                    style={{
                      flex: 1,
                      borderColor: '#f8f8ff',
                      borderBottomWidth: 1,
                      borderTopWidth: 1,
                      height: 200,
                      width: Dimensions.get('screen').width - 50,
                      textAlignVertical: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                      color: '#f8f8ff',
                      fontWeight: 'bold',
                      fontSize: 31,
                    }}>
                    {item}
                  </Text>
                </TouchableOpacity>
              )}
            />

            {NuevoPerfil.PlatformUSR != '' ? (
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text
                  style={{
                    color: '#f8f8ff',
                    fontWeight: 'bold',
                  }}>
                  Sus Plataformas
                </Text>
                <Text
                  DelPlatform
                  onPress={() => DelPlatform()}
                  style={{
                    color: '#f8f8ff',
                    fontWeight: 'bold',
                    backgroundColor: 'red',
                  }}>
                  Borrar Seleccion?
                </Text>
              </View>
            ) : (
              <Text>Necesita almenos 1 Plataforma para Continuar</Text>
            )}

            <FlatList
              data={NuevoPerfil.PlatformUSR}
              horizontal={true}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={styles.button}
                  // activeOpacity={0}
                  onPress={() => {
                    console.log('enviarlo?');
                  }}>
                  <Text
                    style={{
                      flex: 1,
                      borderColor: '#f8f8ff',
                      borderBottomWidth: 1,
                      borderTopWidth: 1,
                      height: 200,
                      width: Dimensions.get('screen').width - 50,
                      textAlignVertical: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                      color: '#f8f8ff',
                      fontWeight: 'bold',
                      fontSize: 31,
                    }}>
                    {item}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </>
        )}
      </Pressable>
    </ViewCFG>
  );
};

const MenuFast = ({NextPage, BackPage}) => {
  return (
    <Area2BtnInSmallView>
      <BtnAppPrimary fnBtn={BackPage}>
        <Text>Atras</Text>
      </BtnAppPrimary>
      <BtnAppPrimary fnBtn={NextPage}>
        <Text>Siguiente</Text>
      </BtnAppPrimary>
    </Area2BtnInSmallView>
  );
};
