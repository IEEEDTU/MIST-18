(function () {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyAWuDDbNYtiwJAJUhGfUD_cOymI-ZNqssA",
        authDomain: "fir-authentication-eb9d4.firebaseapp.com",
        databaseURL: "https://fir-authentication-eb9d4.firebaseio.com",
        projectId: "fir-authentication-eb9d4",
        storageBucket: "fir-authentication-eb9d4.appspot.com",
        messagingSenderId: "282743532323"
    };
    firebase.initializeApp(config);

    function login() {
        function newlogin(user) {
            if (user)
            {
                app(user);
            }
            else
            {
                var provider = new firebase.auth.GoogleAuthProvider();
                firebase.auth().signInWithRedirect(provider);
            }

        }
        firebase.auth().onAuthStateChanged(newlogin);

    }

    function app(user) {
        document.getElementById("Username").innerHTML = user.displayName;
        document.getElementById("email").innerHTML = user.email;
        document.getElementById("uid").innerHTML = user.uid;

    }
    window.onload = login();
})()