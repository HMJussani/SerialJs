var firebase = require("firebase/app");


var firebaseConfig = {
    apiKey: "AIzaSyCu-NNeobgTjAGJc19W_UMOBbnOfudIhns",
    authDomain: "homecontrol-56acc.firebaseapp.com",
    databaseURL: "https://homecontrol-56acc.firebaseio.com",
    projectId: "homecontrol-56acc",
    storageBucket: "homecontrol-56acc.appspot.com",
    messagingSenderId: "579623125876",
    appId: "1:579623125876:web:f3d68d8722869b1dcd6221",
    measurementId: "G-8N1GWPWCL1"
};

firebase.initializeApp(firebaseConfig);

module.exports = function salvarBanco(tempId, temphora, tempData, temp) {
    firebase.database().ref(`HomeControl/${title}/${tempData}`).set({
        tempId,
        temphora,
        tempData,
        temp
    });

    firebase.database().ref(`HomeControl/${tempId}/`).update({
        title
    });

}

