
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import * as fb from 'firebase'

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>',
  created () {
    fb.initializeApp({
      apiKey: 'AIzaSyDQg59N9hq0llHhxCfWue6f3jEtQxbD3mc',
      authDomain: 'prototype-linkparser.firebaseapp.com',
      databaseURL: 'https://prototype-linkparser.firebaseio.com',
      projectId: 'prototype-linkparser',
      storageBucket: 'prototype-linkparser.appspot.com',
      messagingSenderId: '987864566347'
      // appId: '1:987864566347:web:3898cea483caae81'
    })
    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })
  }
})
