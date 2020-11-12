import React from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

//////////////////////////////////////////////////////////////////////////////////
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
export const ViewCFG = (props) => {
  return <View style={styles.ViewConfigUser}>{props.children}</View>;
};

export const Area2BtnInSmallView = (props) => {
  return <View style={styles.stylesAreaBtns}>{props.children}</View>;
};

// /botones
export const BtnAppPrimary = (props) => {
  const {fnBtn} = props;
  return (
    <Pressable
      onPress={fnBtn}
      style={{
        flex: 1,
        backgroundColor: '#00BCD4',
        padding: 20,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 8,
      }}>
      {props.children}
    </Pressable>
  );
};

export default SafeAreav2;

const styles = StyleSheet.create({
  stylesAreaBtns: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },

  ViewConfigUser: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E91E63',

    borderWidth: 0,
    flex: 10,
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
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ///////////////////////////////////totales
  SafeAreaFull: {
    padding: 5,
    flex: 1,
    // backgroundColor: '#f8f8ff',
    backgroundColor: '#f8f8ff',
  },
  viewsmall: {
    // backgroundColor: 'grey',
    // marginTop: 20,
    paddingVertical: 21,
    paddingHorizontal: 8,
    flex: 1,
    borderWidth: 0,
    // marginVertical: 2,
    // paddingHorizontal: 17,
    // paddingVertical: 2,
    // shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
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

    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
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

    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
