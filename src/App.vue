// src/App.vue
<template>
  <div id="app">
    <button class=" p-2 rounded-full border-2 bg-slate-500" @click="requestPermission">Enable Notifications</button>
  </div>
</template>

<script>
import { messaging, getToken, onMessage } from './firebase';

export default {
  name: 'App',
  methods: {
    async requestPermission() {
      try {
        const permission = await Notification.requestPermission();
        if (permission === 'granted') {
          const token = await getToken(messaging, { vapidKey: 'BHnMLC2AUiDzWygw1jVhlKMDcQawKXTIl0KI46kkA7g3OqqTVmq3v1CGChjNo2ILc4o5XmTvFuP45alsbvXpokM' });
          console.log('Notification permission granted. ', 'FCM Token:', token);
        } else {
          console.error('Notification permission not granted.');
        }
      } catch (error) {
        console.error('Unable to get permission to notify.', error);
      }
    }
  },
  mounted() {
    onMessage(messaging, (payload) => {
      console.log('Message received. ', payload);
      const notificationTitle = payload.notification.title;
      const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.icon
      };

      if (Notification.permission === 'granted') {
        new Notification(notificationTitle, notificationOptions);
      }
    });
  }
};
</script>
