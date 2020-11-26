import React, {useEffect, useState} from 'react';
import {
  Alert,
  Button,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import {BackHandler} from 'react-native';
import {BotonIrAtras} from '../../../Modelo/FuncionesCelular';
import {NewToDoTask} from '../../../Modelo/FuncionesFirebaseAuth';
import firebase from '../../../libs/Firebase';
import {
  InputMultipleLine,
  ItemMultipleSelect,
  ViewTitleLeft,
} from '../../../ComponenteGlobales/SeccionMaquetacion';
import {InputOneline} from '../../../Modelo/../ComponenteGlobales/SeccionMaquetacion';

import {FlatGrid} from 'react-native-super-grid';

const PantallaCrear = (props) => {
  useEffect(() => {
    console.log('se cargo crear');
  }, []);
  const {WatchFirebaseToDo} = props;
  const {ToDoList} = props;
  const {setToDoList} = props;
  //seting user
  const {ObjUSR} = props;
  const {SettingA} = props; // AREAS
  const [newAsettings, setnewAsettings] = useState([]);
  const {SettingB} = props; // PLATAFORMAS
  const [newBsettings, setnewBsettings] = useState([]);
  const {SettingC} = props; // HABILIDADES
  const [newCsettings, setnewCsettings] = useState([]);

  ///////////////////// firebase pushear nuevos datos

  // pasar mi todo y subirlo ToDoList

  //1 setToDoList
  const {ToOtherScreen, Posiciones} = props;
  const {nameScreen} = props;
  const [form, setform] = useState({
    name: '',
    description: '',
    operation: '',
    deploy: '',
  });

  //2 funciones obtener datos
  const actualizaTexto = (e, type) => {
    setform({...form, [type]: e});
  };
  const actualizaItems = (
    item,
    tipo,
    arrayStateRecibido,
    SETarrayStateRecibido,
  ) => {
    arrayStateRecibido.includes(item)
      ? SETarrayStateRecibido(arrayStateRecibido.filter((e) => e !== item))
      : SETarrayStateRecibido([...arrayStateRecibido, item]);
  };

  //3 crear un objeto  y validar
  const CrearTAREA = (form, newAsettings, newBsettings, newCsettings) => {
    //nuevo
    const res = {
      name: form.name,
      operation: form.operation,
      estado: 0,
      description: form.description,
      deploy: form.deploy,
      Skill: newCsettings,
      Platform: newBsettings,
      Area: newAsettings,
    };

    //valida
    if (
      res.name.length <= 6 ||
      res.operation.length <= 6 ||
      res.description.length <= 6 ||
      res.deploy.length <= 6 ||
      res.Skill.length > 8 ||
      res.Platform.length > 1 ||
      res.Area.length > 4
    ) {
      // console.log('objeto no valido!');
      return false;
    } else {
      // console.log('objeto aceptado, valido!');
      return res;
    }
  };
  //emergencia :c
  const [BANDERA, setBANDERA] = useState([]);
  useEffect(() => {
    NewToDoTask(ToDoList, ObjUSR);
  }, [BANDERA]);

  //4 subir objeto a firebase
  const SubeDatosAFirebase = () => {
    const res = CrearTAREA(form, newAsettings, newBsettings, newCsettings);
    if (res == false) {
      console.log('falla en el formulario , validacion no aceptada');
    } else {
      if (ToDoList == undefined) {
        setToDoList([res]);
        setBANDERA([res]); // CUANDO  CAMBIA ACTIVA USSEFECT
      } else {
        console.log('iterar');
        setToDoList([...ToDoList, res]);
        setBANDERA([...ToDoList, res]); // CUANDO  CAMBIA ACTIVA USSEFECT
      }
    }
  };

  return (
    <SafeAreaView style={{backgroundColor: '#E91E63', flex: 1}}>
      <ScrollView>
        <ViewTitleLeft>{nameScreen}</ViewTitleLeft>
        <View style={{height: 19}}></View>
        <InputOneline
          texto="¿Como llamara su Proyecto?"
          tipo="name"
          fnc={actualizaTexto}
        />
        <InputMultipleLine
          texto="¿Cual es el objetivo de su Proyecto?"
          tipo="description"
          fnc={actualizaTexto}
        />
        <InputMultipleLine
          texto="¿Algunas funciones esenciales?"
          tipo="operation"
          fnc={actualizaTexto}
        />

        <InputMultipleLine
          texto="¿Donde se desplegara el Proyecto?"
          tipo="deploy"
          fnc={actualizaTexto}
        />

        <ItemMultipleSelect
          titulo="Plataformas para desarrollo"
          actuales={SettingB}
          nuevosdatos={newBsettings}
          setnuevosdatos={setnewBsettings}
          fncactualizar={actualizaItems}
        />
        <ItemMultipleSelect
          titulo="Conocimientos necesarios"
          actuales={SettingC}
          nuevosdatos={newCsettings}
          setnuevosdatos={setnewCsettings}
          fncactualizar={actualizaItems}
        />
        <ItemMultipleSelect
          titulo="Areas del Proyecto"
          actuales={SettingA}
          nuevosdatos={newAsettings}
          setnuevosdatos={setnewAsettings}
          fncactualizar={actualizaItems}
        />

        <View>
          <Button
            title="Crear ToDo"
            onPress={() => {
              SubeDatosAFirebase();
            }}
          />
          <Button
            title="Regresar"
            onPress={() => {
              ToOtherScreen(Posiciones.posList);
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PantallaCrear;
