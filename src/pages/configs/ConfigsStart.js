import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import ClsMiTodoList from '../../Modelo/ClsMiTodoList';
import UserConfig from '../configs/UserConfig';

// const animalitos = ['a', 'c', 'z'];
const ConfigsStart = (props) => {
  // const {ObjGlobal} = props;
  const {ObjGlobal} = props;
  console.log('comenzamos la configuracion!');
  console.log('comenzamos la configuracion!');
  console.log('comenzamos la configuracion!');
  console.log('comenzamos la configuracion!');
  console.log('comenzamos la configuracion!');
  console.log('comenzamos la configuracion!');
  console.log('comenzamos la configuracion!');
  console.log('comenzamos la configuracion!');
  console.log('comenzamos la configuracion!');
  console.log('comenzamos la configuracion!');
  console.log('comenzamos la configuracion!');
  console.log('comenzamos la configuracion!');
  console.log('comenzamos la configuracion!');
  console.log('comenzamos la configuracion!');
  console.log(ObjGlobal);

  // console.log(ObjGlobal);
  // const {ObjGlobal} = props;
  // console.log(props);
  // usestate para datos configuracion GLOBALES desde firebase BD
  // console.log(ObjGlobal);

  // console.log(ObjGlobal.AreasAPP);
  // console.log(ObjGlobal);
  // return ObjGlobal.AreasAPP.map((x) => <Text>hola</Text>);

    return <UserConfig ObjGlobal={ObjGlobal} />;
  

  // return (
  //   <>

  //     <Text>llegaron los datos :Dddddddddd</Text>

  //     {/* <UserConfig datos={datos} /> */}
  //   </>
  // );

  // <UserConfig />;
};

export default ConfigsStart;
