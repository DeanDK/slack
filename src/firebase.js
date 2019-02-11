import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var config = {
  apiKey: "AIzaSyD60BDsvZixzhct_5_wPCOXc1ATUOJYCns",
  authDomain: "react-slack-clone-b5e7d.firebaseapp.com",
  databaseURL: "https://react-slack-clone-b5e7d.firebaseio.com",
  projectId: "react-slack-clone-b5e7d",
  storageBucket: "react-slack-clone-b5e7d.appspot.com",
  messagingSenderId: "325233632950"
};

firebase.initializeApp(config);

export default firebase;
