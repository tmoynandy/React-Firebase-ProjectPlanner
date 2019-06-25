import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAxh8FHn2E23SwGtJej0Rg_KYnIT3-07S8",
    authDomain: "marioplan-36748.firebaseapp.com",
    databaseURL: "https://marioplan-36748.firebaseio.com",
    projectId: "marioplan-36748",
    storageBucket: "",
    messagingSenderId: "155533525753",
    appId: "1:155533525753:web:ddfd0dd0a22a9aa3"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots:true});

  export default firebase
