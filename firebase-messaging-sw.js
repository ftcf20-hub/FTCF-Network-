importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCeT7cxscG5PZBv97_5P93jTr-_Rsc6Sng",
  authDomain: "notification-centre-2e377.firebaseapp.com",
  projectId: "notification-centre-2e377",
  storageBucket: "notification-centre-2e377.firebasestorage.app",
  messagingSenderId: "709598083507",
  appId: "1:709598083507:web:c44f1059b3ad902894f3c6"
});

const messaging = firebase.messaging();
