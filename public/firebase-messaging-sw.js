// public/firebase-messaging-sw.js
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyDVAa_AHiilPQv_i0mICCixA8hShktG0ho",
  authDomain: "fcm-demo-afdab.firebaseapp.com",
  projectId: "fcm-demo-afdab",
  storageBucket: "fcm-demo-afdab.appspot.com",
  messagingSenderId: "524649912604",
  appId: "1:524649912604:web:1b71e2198e490b31c402d9",
  measurementId: "G-TCQXNV38CG",
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
