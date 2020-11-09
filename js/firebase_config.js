"use strict";

// ========== GLOBAL FIREBASE CONFIG ========== //

const _firebaseConfig = {
    apiKey: "AIzaSyCtHlPXng4y4c1C7yIw3j0DWTlsRlqx2z8",
    authDomain: "arla-farmers-16126.firebaseapp.com",
    databaseURL: "https://arla-farmers-16126.firebaseio.com",
    projectId: "arla-farmers-16126",
    storageBucket: "arla-farmers-16126.appspot.com",
    messagingSenderId: "600486602553",
    appId: "1:600486602553:web:80eaa4e247555dcb4e6ae8",
    measurementId: "G-X5SWC74RV0"
};

firebase.initializeApp(_firebaseConfig);
const _db = firebase.firestore();

