import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDKuEEZZCtX__8fqxLCF67XWgf3M6diu_A",
  authDomain: "react-blog-4bf5d.firebaseapp.com",
  projectId: "react-blog-4bf5d",
  storageBucket: "react-blog-4bf5d.appspot.com",
  messagingSenderId: "351014430107",
  appId: "1:351014430107:web:6aad876513e11277506d3e",
  measurementId: "G-B085E84ZP5"
};

// const firebaseConfig = {
//   apiKey: process.env.React_App_ApiKey,
//   authDomain: process.env.React_App_AuthDomain,
//   projectId: process.env.React_App_ProjectId,
//   storageBucket: process.env.React_App_StorageBucket,
//   messagingSenderId: process.env.React_App_MessagingSenderId,
//   appId: process.env.React_App_AppId,
//   measurementId: process.env.React_App_MeasurementId
// };


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
