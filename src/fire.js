import firebase from 'firebase';



var firebaseConfig = {
    apiKey: "AIzaSyBznBC28LvZjkqFf3Yk3kUQFuT_mj10xdM",
    authDomain: "login-p-6611f.firebaseapp.com",
    databaseURL: "https://login-p-6611f.firebaseio.com",
    projectId: "login-p-6611f",
    storageBucket: "login-p-6611f.appspot.com",
    messagingSenderId: "1058834890939",
    appId: "1:1058834890939:web:7a7224dd6cdc96f3f6299e"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;