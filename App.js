import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Alert,
} from 'react-native';
// mis componentes
import PresentacionApp from './src/pages/PreIngreso/PresentacionAPP';

import firebase from './src/libs/Firebase';
import {
  IngresarFBauth,
  UsrValido,
  setUsrValido,
  TraerDatosFBConfig,
} from './src/Modelo/FuncionesFirebaseAuth';
import AppCheckData from './src/pages/Ingreso/Revision/AppCheckData';
import {
  UIDcurrentUser,
  SalirFBauth,
  EntornoUsuarioPrepradado,
  ExisteUIDenDB,
  CreandoUsuarioFB,
} from './src/Modelo/FuncionesFirebaseAuth';
import ClsUsuario from './src/Modelo/ClsUsuario';

// firebase.auth().signOut();
export default function App() {
  //////////////ALMACENAR DATOS DEL USUARIO
  const [ObjUSR, setObjUSR] = useState();

  //////////////////session para swap screens
  const [UsrSession, setUsrSession] = useState(null);

  useEffect(() => {
    ////usuariio esta registraod en AUTH?
    firebase.auth().onAuthStateChanged(function (response) {
      if (!response) {
        console.log('aun no ah cambiado echo nadaa');
      } else {
        // //guardamos su ID
        setUsrSession(response.uid);

        // TRAEMOS sus datos de la BD
        ExisteUIDenDB(response.uid, setObjUSR);

        // debemos revisar que objeto usuario exista antes de insertar datos
        console.log(ObjUSR);
      }
    });
  }, []);

  ////FORMULARIO
  const [Formulario, setFormulario] = useState({
    email: '',
    password: '',
  });

  const ActualizaFormulario = (type, value) => {
    setFormulario({...Formulario, [type]: value});
  };

  // console.log(ObjUSR);
  console.log('##################APP####################');
  return (
    <>
      {UsrSession == null ? (
        <PresentacionApp
          IngresarFBauth={IngresarFBauth}
          setUsrSession={setUsrSession}
          ActualizaFormulario={ActualizaFormulario}
          Formulario={Formulario}
          setObjUSR={setObjUSR}
        />
      ) : (
        <>
          <AppCheckData ObjUSR={ObjUSR} />
        </>
      )}
    </>
  );
}

const styles = StyleSheet.create({});
