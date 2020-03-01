// Initialize Cloud Firestore through Firebase

var firebaseConfig = {
    apiKey: "AIzaSyB-4WFZvWgwERa6DTPv67QOhYqembJeUJ0",
    authDomain: "curiodiet.firebaseapp.com",
    databaseURL: "https://curiodiet.firebaseio.com/",
    projectId: "curiodiet",
    storageBucket: "curiodiet.appspot.com",
    messagingSenderId: "234764771665",
    appId: "1:234764771665:web:645ab1aca681c20d64b370",
    measurementId: "G-0NY4XKXQDH"
     };
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
  
var db = firebase.firestore();

// Hacer login
function login(){
    var email = document.getElementById('email').value;
    var password = document.getEelementById('password').value;

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error){
        var errorCode = error.code;
        var errorMessage = error.message;
    });
}

function observar(){

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
        console.log('estas dentro prro')
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        // ...
        } else {
        console.log('tu aqui no eta')
        }
    });
}

observar();