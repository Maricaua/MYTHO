// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// Suas credenciais do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDNR3e13as3CHzaw41b0dptx3mYUHjyPeU",
  authDomain: "mytho3.firebaseapp.com",
  projectId: "mytho3",
  storageBucket: "mytho3.firebasestorage.app",
  messagingSenderId: "462346503343",
  appId: "1:462346503343:web:1982bed599273ae74f405a",
  databaseURL: "https://mytho3-default-rtdb.firebaseio.com", // Pelo seu anexo, deve ser este!
};

// Inicialize o Firebase
const app = initializeApp(firebaseConfig);

// Obtenha uma referência para o Realtime Database
export const db = getDatabase(app);