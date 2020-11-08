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

const _dataRef = _db.collection("carbonFootprint");
let _carbonFootprint;

// 1: data from firebase
// listen for changes on _dataRef
_dataRef.orderBy("year").onSnapshot(snapshotData => {
    _carbonFootprint = []; // reset _sustainabilityData
    snapshotData.forEach(doc => { // loop through snapshotData - like for of loop
        let data = doc.data(); // save the data in a variable
        data.id = doc.id; // add the id to the data variable
        _carbonFootprint.push(data); // push the data object to the global array _sustainabilityData
    });
    console.log(_carbonFootprint);
    appendDividedCarbon(_carbonFootprint); // call appendCows with _sustainabilityData as function argument
});