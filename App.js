import React, {useContext, useEffect, useState} from 'react';
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
import AppToDo from './src/pages/Ingreso/AppToDo';

import firebase from './src/libs/Firebase';
import {
  IngresarFBauth,
  UsrValido,
  setUsrValido,
  TraerDatosFBConfig,
} from './src/Modelo/FuncionesFirebaseAuth';
import AppCheckData from './src/pages/Ingreso/AppCheckData';
import {
  UIDcurrentUser,
  SalirFBauth,
  EntornoUsuarioPrepradado,
  ExisteUIDenDB,
  CreandoUsuarioFB,
} from './src/Modelo/FuncionesFirebaseAuth';
import ClsUsuario from './src/Modelo/ClsUsuario';
firebase.auth().signOut();
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
        console.log(ObjUSR);
        console.log(ObjUSR);
        console.log(ObjUSR);
        console.log(ObjUSR);
        console.log(ObjUSR);
        console.log(ObjUSR);
        console.log(ObjUSR);
        console.log(ObjUSR);
        console.log(ObjUSR);
        console.log(ObjUSR);
        console.log(ObjUSR);
        console.log(ObjUSR);
        console.log(ObjUSR);
        console.log(ObjUSR);
        console.log(ObjUSR);
        console.log(ObjUSR);
        console.log(ObjUSR);
        console.log(ObjUSR);
        console.log(ObjUSR);
        console.log(ObjUSR);
        console.log(ObjUSR);
        console.log(ObjUSR);
        console.log(ObjUSR);
        console.log(ObjUSR);
        console.log(ObjUSR);
        console.log(ObjUSR);
        console.log(ObjUSR);
        console.log(ObjUSR);
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
      {/* {console.log('su configuracion')}
      {console.log(ConfigState)}
      {console.log('datos de sesion')}
      {console.log(UsrSession)} */}
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
          {console.log(ObjUSR)}
          <AppCheckData
            ObjUSR={ObjUSR}
            // GlobalData={GlobalData}

            // setConfigState={setConfigState}
          />
        </>
      )}

      {/* {UsrSession == null ? (
        <PresentacionApp
          IngresarFBauth={IngresarFBauth}
          setUsrSession={setUsrSession}
          ActualizaFormulario={ActualizaFormulario}
          Formulario={Formulario}
          setObjUSR={setObjUSR}
        />
      ) : (
        <AppCheckData
          // GlobalData={GlobalData}
          ConfigState={ConfigState}
          setConfigState={setConfigState}
        />
      )} */}
    </>
  );
}

const styles = StyleSheet.create({});
