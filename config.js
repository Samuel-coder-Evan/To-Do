import firebase from 'firebase';
require('@firebase/firestore')
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB7Ys3yb5pFOnAgOAAX_BDr9uN2M9qV7Tc",
    authDomain: "to-do-fbeed.firebaseapp.com",
    projectId: "to-do-fbeed",
    storageBucket: "to-do-fbeed.appspot.com",
    messagingSenderId: "751940741743",
    appId: "1:751940741743:web:4565ce34a85b149a8d3b9a",
    measurementId: "G-002N6BYYK9"
  };
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();