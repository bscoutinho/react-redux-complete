import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyCfUbT87yOrqpp2SJritwr7kY2Tefw9RlY",
  authDomain: "net-ninja-marioplan-64f73.firebaseapp.com",
  databaseURL: "https://net-ninja-marioplan-64f73.firebaseio.com",
  projectId: "net-ninja-marioplan-64f73",
  storageBucket: "net-ninja-marioplan-64f73.appspot.com",
  messagingSenderId: "616703161930",
  appId: "1:616703161930:web:e74c317fe763aee37718b3",
  measurementId: "G-J040Z75GMV"
};
// Initialize Firebase
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 