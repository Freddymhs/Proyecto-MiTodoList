import React, {Component, useEffect, useState} from 'react';
import {
  Alert,
  Button,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import SafeAreav2, {
  ScrollViewv2,
  ViewBig,
  ViewMedio,
  ViewCFG,
  ViewSmall,
  BtnAppPrimary,
  Area2BtnInSmallView,
} from '../../ComponenteGlobales/SeccionMaquetacion';
import StatusBarv2 from '../../ComponenteGlobales/StatusBarv2';

// export default function UserConfig() {

// const BackPage = () => {
//   console.log('avanzar');
// };

// state de el para agregarle sus datos
// state de sus datos
// const Actualizar

const UserConfig = (props) => {
  const {GlobalData} = props;

  const [Pantalla, setPantalla] = useState(0);
  const NextPage = () => {
    if (Pantalla < 3) {
      return setPantalla(Pantalla + 1);
    }
  };
  const BackPage = () => {
    if (Pantalla > 0) {
      return setPantalla(Pantalla - 1);
    }
  };

  // atributos de cada pantalla
  const [Title, setTitle] = useState('default');
  const [Lista, setLista] = useState([]);
  const actualizarLista = () => {
    console.log('actulizando la listaaaaaaaaaaaaaaaaaaaaaaaaaa');
  };
  useEffect(() => {
    switch (Pantalla) {
      case 0:
        setTitle('VAMOS A CONFIGURAR sus Habilidades, Metas y Herramientas :)');
        console.log(GlobalData);
        setLista([]);
        break;
      case 1:
        setTitle('Seleccione sus Habilidades para futuros Desarrollos');
        setLista(GlobalData.SkillAPP);
        break;

      case 2:
        setTitle('?En que Areas Desea Trabajar?');
        setLista(GlobalData.AreasAPP);
        break;
      case 3:
        setTitle('?Que Plataformas Usara para Completar sus Proyectos?');
        setLista(GlobalData.PlatformAPP);
        break;
    }
  }, [Pantalla]);

  return (
    <>
      <StatusBarv2 />
      <SafeAreav2>
        <ViewSmall>
          <Text
            style={{
              textAlign: 'center',
            }}>
            {Title}
          </Text>
        </ViewSmall>
        <PantalladBASE
          Lista={Lista}
          Title={Title}
          actualizarLista={actualizarLista}
        />
        <ViewSmall>
          <MenuFast NextPage={NextPage} BackPage={BackPage} />
        </ViewSmall>
      </SafeAreav2>
    </>
  );
};
export default UserConfig;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
});

const PantalladBASE = (props) => {
  const {Title} = props;
  const {Lista} = props;
  const {actualizarLista} = props;

  // const Saludo = () => {
  //   console.log('hola');
  // };
  return (
    <ViewCFG>
      <Pressable>
        <FlatList
          data={Lista}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.button}>
              <Text
                style={{
                  flex: 1,
                  borderColor: '#f8f8ff',
                  borderBottomWidth: 1,
                  borderTopWidth: 1,
                  height: 200,
                  width: Dimensions.get('screen').width - 50,
                  textAlignVertical: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  color: '#f8f8ff',
                  fontWeight: 'bold',
                  fontSize: 31,
                }}>
                {item}
              </Text>
            </TouchableOpacity>

            // <TouchableOpacity
            //   style={{
            //     alignItems: 'center',
            //     backgroundColor: '#DDDDDD',
            //     padding: 10,
            //   }}>
            //   <Text
            //     style={{
            //       flex: 1,
            //       borderColor: '#f8f8ff',
            //       borderBottomWidth: 1,
            //       borderTopWidth: 1,
            //       height: 200,
            //       width: Dimensions.get('screen').width - 50,
            //       textAlignVertical: 'center',
            //       justifyContent: 'center',
            //       textAlign: 'center',
            //       color: '#f8f8ff',
            //       fontWeight: 'bold',
            //       fontSize: 31,
            //     }}
            //     onPress={() => {
            //       actualizarLista();
            //     }}
            //     key={item}>
            //     {item}
            //   </Text>
            // </TouchableOpacity>
          )}
        />
      </Pressable>
    </ViewCFG>
  );
};

const MenuFast = ({NextPage, BackPage}) => {
  return (
    <Area2BtnInSmallView>
      <BtnAppPrimary fnBtn={BackPage}>
        <Text>Atras</Text>
      </BtnAppPrimary>
      <BtnAppPrimary fnBtn={NextPage}>
        <Text>Atras</Text>
      </BtnAppPrimary>
    </Area2BtnInSmallView>
  );
};
