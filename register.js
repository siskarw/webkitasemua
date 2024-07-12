

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";


import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDAeXTiTB5WnEoxlFdub0IYydNaIOU_QmY",
    authDomain: "login-aza.firebaseapp.com",
    projectId: "login-aza",
    storageBucket: "login-aza.appspot.com",
    messagingSenderId: "175360617845",
    appId: "1:175360617845:web:6c90e10c009b5fe722f73c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();


const submit = document.getElementById('submit');
submit.addEventListener("click", function (event) {
    event.preventDefault()
    const email = document.getElementById('typeEmailX-2').value;
    const password = document.getElementById('typePasswordX-2').value;
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            alert("create account")
            window.location.href="home.html"
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
            // ..
        });

})