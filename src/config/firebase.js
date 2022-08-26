import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
  apiKey: process.env.React_App_ApiKey,
  authDomain: process.env.React_App_AuthDomain,
  projectId: process.env.React_App_ProjectId,
  storageBucket: process.env.React_App_StorageBucket,
  messagingSenderId: process.env.React_App_MessagingSenderId,
  appId: process.env.React_App_AppId,
  measurementId: process.env.React_App_MeasurementId
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
