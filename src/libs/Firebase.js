import {API_FIREBASE} from '@env';




//importando FIREBASE y algunos de sus MODULOS
//Los modulos permiten =autenticacion ,reatime database, firestore y otros que se ven en la pagina web
import * as firebase from 'firebase'; // impartamos lo instalado 'yarn add firebase'
import '@firebase/auth'; // modulo extra que quiero usar ahora para revisar mi conexion
import '@firebase/database';

//intentar inicializar FIREBASE
try {
  firebase.initializeApp({
    // se inicializare FIREBASE
    //env
    apiKey: API_FIREBASE,
    authDomain: 'mitodolist-3cee1.firebaseapp.com',
    databaseURL: 'https://mitodolist-3cee1.firebaseio.com',
    projectId: 'mitodolist-3cee1',
    storageBucket: 'mitodolist-3cee1.appspot.com',
    messagingSenderId: '892935763072',
    appId: '1:892935763072:web:ce807830493486c0d92265',
  });
} catch (err) {
  //ERROR Si FIREBASE YA ESTABA INICIALIZADO
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack);
  }
}

export default firebase; // esto importaremos desde otro archivo
