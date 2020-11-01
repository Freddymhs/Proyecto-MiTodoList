import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';

// base de la pages
export const SafeAreav2 = (props) => {
  return (
    <SafeAreaView style={styles.SafeAreaFull}>{props.children}</SafeAreaView>
  );
};
export const ScrollViewv2 = (props) => {
  //   return <SafeAreaView>{props.children}</SafeAreaView>;

  //////////CREA un area para hacer scroll ajustado al padre
  return (
    <ScrollView contentContainerStyle={{flex: 1}}>{props.children}</ScrollView>
  );
};
///////////////////////////TARJETAS DENTRO DE LAS LISTAS LARETALES
export const Tarjeta = (props) => {
  return (
    <View
      style={{
        // borderColor: 'red',
        // borderWidth: 1,
        flex: 1,
        justifyContent: 'center',
        // alignSelf:'center',
        alignItems: 'center',
      }}>
      {props.children}
    </View>
  );
};

//////////////////////COMPONENTES PARA MAQUETAR AREAS AL INICIO

export const ViewSmall = (props) => {
  return <View style={styles.viewsmall}>{props.children}</View>;
};
export const ViewMedio = (props) => {
  return <View style={styles.viewmid}>{props.children}</View>;
};
export const ViewBig = (props) => {
  return <View style={styles.viewbig}>{props.children}</View>;
};
/////////////////////////////////////////

export default SafeAreav2;

const styles = StyleSheet.create({
  SafeAreaFull: {
    padding: 5,
    flex: 1,
    // backgroundColor: '#f8f8ff',
    backgroundColor: '#f8f8ff',
  },
  viewsmall: {
    borderWidth: 0,
    flex: 1,
    marginVertical: 2,
    paddingHorizontal: 17,
    paddingVertical: 22,
    // shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  viewmid: {
    borderWidth: 0,
    flex: 2,
    marginVertical: 2,
    paddingHorizontal: 17,
    paddingVertical: 22,
    // shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  viewbig: {
    justifyContent: 'space-around',
    borderWidth: 0,
    flex: 3,
    marginVertical: 2,
    paddingHorizontal: 17,
    paddingVertical: 22,
    // shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
});
