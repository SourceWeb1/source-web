// setting up firebase with our website
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBaFF77dH0gcKMP5eXeJu-em2rNGGjcAGo",
    authDomain: "verification-e3b31.firebaseapp.com",
    projectId: "verification-e3b31",
    storageBucket: "verification-e3b31.appspot.com",
    messagingSenderId: "943159807637",
    appId: "1:943159807637:web:134514e8d2b38405bd959c"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// Sign up function
const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password)
    // firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            window.open("phone.html")
            console.log(result)
            // ...
        })
        .catch((error) => {
            alert(error.code);
            alert(error.message)
            // ..
        });
}

// Sign In function
const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            window.open("phone.html")
            console.log(result)
        })
        .catch((error) => {
            alert(error.code);
            alert(error.message)
        });
}
