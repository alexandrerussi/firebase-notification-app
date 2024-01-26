// Arquivo: public/firebase-messaging-sw.js

importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAfREN-WpL61OyJWe5SvZSUsCFVPxiH8Rc",
  authDomain: "fir-notification-84a83.firebaseapp.com",
  projectId: "fir-notification-84a83",
  storageBucket: "fir-notification-84a83.appspot.com",
  messagingSenderId: "81629356485",
  appId: "1:81629356485:web:5ce1c5094b4e8faea96bac"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = 'Título da Notificação';
  const notificationOptions = {
    body: 'Corpo da Notificação.',
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
