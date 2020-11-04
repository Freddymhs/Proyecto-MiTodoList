import React, {useEffect} from 'react';
import firebase from '../../libs/Firebase';
import StatusBarv2 from '../../ComponenteGlobales/StatusBarv2';
import {StyleSheet, Text, View, FlatList, Pressable} from 'react-native';
import SafeAreav2, {
  ViewMedio,
  ViewSmall,
  ViewBig,
  ScrollViewv2,
  Tarjeta,
} from '../../ComponenteGlobales/SeccionMaquetacion';
import FlatHorizontal from '../../ComponenteGlobales/FlatHorizontal';
import {Subtitulo} from '../../ComponenteGlobales/Textos';
// import ScrollViewv2 from '../../ComponenteGlobales/ScrollViewv2';

const QueAreaobjetivos = [
  'testUnitarios',
  'Disenio',
  'CRUD',
  'Static Page',
  'Microservicios',
  'Consumo de APIs',
  'app Celular',
];
//estos deben ser objetos bien grandes con SUS DETALLES
const ProyectosPendientes = ['todoListo', 'Api rest en MERN', 'Doname'];

const MiPlataforma = ['gatsby', 'mern', 'reactnative']; //laravel,python,ruby
const MisConocimientos = [
  'reactjs',
  'nodejs',
  'express',
  'reactnative',
  'javascript',
  'Mysql',
  'firebase',
  'APIrest',
  'bootstrap',
  'css',
];
var id = 0;

export default function AppToDo(props) {
  const {UsrSession} = props;

  const {SalirFBauth, setUsrSession} = props;

  return (
    <>
      <StatusBarv2 />
      <SafeAreav2>
        <ViewMedio>
          <Pressable
            onPress={() => SalirFBauth({setUsrSession})}
            style={{height: 100, width: 300, backgroundColor: 'red'}}>
            <Text>I'm pressable!</Text>
          </Pressable>
          <FlatList
            data={ProyectosPendientes}
            renderItem={({item}) => (
              <Text key={id++}>
                {id} {item}
              </Text>
            )}
          />
        </ViewMedio>
        <ViewBig>
          <ScrollViewv2>
            <Tarjeta>
              <Subtitulo subt={'Plataformas de Desarrollo'} />
              <FlatHorizontal ElementosArray={MiPlataforma} />
            </Tarjeta>
            <Tarjeta>
              <Subtitulo subt={'Buscas Mejorar Estas Areas'} />
              <FlatHorizontal ElementosArray={MisConocimientos} />
            </Tarjeta>
            <Tarjeta>
              <Subtitulo subt={'Mis Conocimientos'} />
              <FlatHorizontal ElementosArray={QueAreaobjetivos} />
            </Tarjeta>
          </ScrollViewv2>
        </ViewBig>
      </SafeAreav2>
      {/* <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Text>welcomeeeeeeeeeeeeeeee</Text>
        </ScrollView>
      </SafeAreaView> */}
    </>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    borderWidth: 4,
    borderColor: 'red',
    borderRadius: 6,
    // backgroundColor: Colors.lighter,
    // backgroundColor: 'red',
  },
});
