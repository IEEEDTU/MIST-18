const express = require('express');
const port = process.env.PORT || 3000;
const ip = process.env.IP || '127.0.0.1';
var firebase = require("firebase");
// Initialize Firebase
var config = {
    apiKey: "AIzaSyAkNXb7dJeu-IR3BvSt1lN3samo-CdAKsM",
    authDomain: "mist-18.firebaseapp.com",
    databaseURL: "https://mist-18.firebaseio.com",
    projectId: "mist-18",
    storageBucket: "mist-18.appspot.com",
    messagingSenderId: "627563380427"
};


app = express();

app.get('/',function (req, res) {
    res.send("we are live now")
});
firebase.initializeApp(config);

app.listen(port,ip,function () {
    console.log("listening to port : "+ port );
});