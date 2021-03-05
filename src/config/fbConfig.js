
import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth'



var firebaseConfig = {
  apiKey: "AIzaSyBIKKk9-w3QiwCWBTbLYJ_jI-WoNcLaVJk",
  authDomain: "han-plan.firebaseapp.com",
  projectId: "han-plan",
  storageBucket: "han-plan.appspot.com",
  messagingSenderId: "537849240650",
  appId: "1:537849240650:web:b6245f316b56b584229ab3",
  measurementId: "G-H82PZFQ1KM"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// firebase.firestore().settings({timestampsInSnapshots : true});

export default firebase;