import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from 'firebase'

Vue.config.productionTip = false;


// Vue.use(VueFire)

var config = {
  apiKey: "AIzaSyAHY5w2-Y3wUspDe3cE45PdCQLikBQq-Xw",
  authDomain: "hci-readit.firebaseapp.com",
  databaseURL: "https://hci-readit.firebaseio.com",
  projectId: "hci-readit",
  storageBucket: "hci-readit.appspot.com",
  messagingSenderId: "498218541798",
  appId: "1:498218541798:web:0d27160234707135519127",
  measurementId: "G-999QDH6XFK"
};
// Initialize Firebase

let app = firebase.initializeApp(config);

export const db = app.database()


new Vue({
  router,
  store,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");