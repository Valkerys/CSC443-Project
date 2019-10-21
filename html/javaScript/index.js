// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/firestore");

var firebaseConfig = {
    apiKey: "AIzaSyCgqsPwW0-k9w_dOkfOSnpASxRu3ldZYlU",
    authDomain: "circa-inv.firebaseapp.com",
    projectId: "circa-inv",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();