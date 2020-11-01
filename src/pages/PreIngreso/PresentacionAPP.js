import React from 'react';
import {
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image,
} from 'react-native';

export default function PresentacionAPP({SwapScreen}) {
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
            <Pressable
              onPress={() => {
                SwapScreen();
              }}
              style={styles.btnpressable}>
              <Text style={styles.txtPressable}>ingresar</Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
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
