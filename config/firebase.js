"use strict";

const Firebase = require('firebase-admin');
const serviceAccount = require("./serviceAccountKey.json");

module.exports = class FirebaseLoader {

    constructor() {
        this.firebase = Firebase.initializeApp({
            credential: Firebase.credential.cert(serviceAccount),
            databaseURL: "https://survival-garrigue.firebaseio.com",
        }).database();
    }

    getBase() {
        return this.firebase;
    }
}


