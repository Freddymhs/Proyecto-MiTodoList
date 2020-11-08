import React, {useEffect} from 'react';
import {
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image,
  TextInput,
} from 'react-native';
import firebase from '../../libs/Firebase';
import {
  IngresarFBauth,
  RegistroAuthFB,
} from '../../Modelo/FuncionesFirebaseAuth';

//clase usuario
import ClsUsuario from '../../../src/Modelo/ClsUsuario';

//CREACION DE DATOS UUSARIO
// const Obj = new ClsUsuario();

export default function PresentacionAPP(props) {
  const {IngresarFBauth} = props;
  const {ActualizaFormulario} = props;
  const {Formulario} = props;
  // const {setObjUSR} = props;
  const {setGlobalData} = props; // para ver si tiene config al logear simpre

  console.log(setGlobalData);

  return (
    <>
      <StatusBar hidden />
      <SafeAreaView style={styles.PantallaFull}>
        <View style={styles.PantallaFull}>
          <View style={styles.MediaPantalla}>
            <Text style={styles.letras}>Mi Todo List APP</Text>
            <Image
              style={{
                width: 120,
                height: 120,
                resizeMode: 'cover',
              }}
              source={require('../../images/Logo.png')}></Image>

            <Text style={styles.letras}>
              Proyectos Organizados por Prioridad y Conocimiento
            </Text>
            <Text style={styles.letras}>
              Buscando Aprender nuevas Tecnologias y mejorar como profesional
            </Text>
            <Text style={styles.letras}>
              Agrega todos los proyectos completados al Portafolios
            </Text>
          </View>

          <View style={styles.MediaPantalla}>
            <View style={styles.areaInputs}>
              <TextInput
                onChangeText={(value) => ActualizaFormulario('email', value)}
                style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="Correo Electronico"
                placeholderTextColor="#9a73ef"
                autoCapitalize="none"
              />
              <TextInput
                onChangeText={(value) => ActualizaFormulario('password', value)}
                style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="Contraseña"
                placeholderTextColor="#9a73ef"
                autoCapitalize="none"
              />
            </View>

            <Pressable
              onPress={() => IngresarFBauth(Formulario)}
              style={styles.btnpressable}>
              <Text style={styles.txtPressable}>Ingresar</Text>
            </Pressable>

            <Pressable
              onPress={() => RegistroAuthFB(Formulario)}
              style={styles.btnpressable}>
              <Text style={styles.txtPressable}>Registrarme</Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  areaInputs: {
    flexDirection: 'row',
    backgroundColor: 'blue',
  },
  input: {
    backgroundColor: 'white',
    width: '50%',
    borderColor: 'black',
    borderWidth: 1,
    textAlign: 'center',
    justifyContent: 'flex-end',
  },
  txtPressable: {
    color: '#E91E63',
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'monospace',
  },
  btnpressable: {
    backgroundColor: 'white',
    paddingHorizontal: 35,
    paddingVertical: 15,
    borderRadius: 20,
  },
  MediaPantalla: {
    // borderColor: 'black',
    // borderRadius: 12,
    // borderWidth: 10,
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  letras: {
    textAlign: 'center',
    color: '#fafafa',
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'monospace',
  },
  PantallaFull: {
    backgroundColor: '#E91E63',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
