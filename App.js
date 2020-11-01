/**
 * Developer : FmarcosDev
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

// mis componentes

import PresentacionApp from './src/pages/PreIngreso/PresentacionAPP';
import AppToDo from './src/pages/Ingreso/AppToDo';

const App: () => React$Node = () => {
  const [Ingreso, setIngreso] = useState(false);
  const SwapScreen = () => {
    setIngreso(!Ingreso);
  };
  return (
    <>
      {Ingreso != true ? (
        <PresentacionApp SwapScreen={SwapScreen} />
      ) : (
        <AppToDo />
      )}
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
