import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyAfREN-WpL61OyJWe5SvZSUsCFVPxiH8Rc",
    authDomain: "fir-notification-84a83.firebaseapp.com",
    projectId: "fir-notification-84a83",
    storageBucket: "fir-notification-84a83.appspot.com",
    messagingSenderId: "81629356485",
    appId: "1:81629356485:web:5ce1c5094b4e8faea96bac"
};


function requestPermission() {
    console.log('Requesting permission...');
    Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
            console.log('Notification permission granted.');

            // Initialize Firebase
            const app = initializeApp(firebaseConfig);

            // Initialize Firebase Cloud Messaging and get a reference to the service
            const messaging = getMessaging(app);
            getToken(messaging, {
                vapidKey: "BKefRk7kBoISi3LtSAsfgWJKcLwSfM7tNhK-8x7UT78xgVNVoLxWxXxMR8GOCxAy7R59cMssmdSNCv9LyHSPijU"
            })
                .then((currentToken) => {
                    if (currentToken) {
                        console.log("currentToken", currentToken);
                    } else {
                        console.log("Não consegui o token");
                    }
                });
        } else {
            console.log("Não tem permissão")
        }
    })
}

requestPermission();