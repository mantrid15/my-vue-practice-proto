import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import BuyModalComponent from '@/components/Shared/BuyModal'
import * as fb from 'firebase/app'
import 'vuetify/dist/vuetify.min.css'
import './stylus/main.styl'


Vue.use(Vuetify)
Vue.component('app-buy-modal', BuyModalComponent)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    fb.initializeApp({
      apiKey: '',
      authDomain: '',
      databaseURL: '',
      projectId: '',
      storageBucket: '',
      messagingSenderId: ''
    })

    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })

    this.$store.dispatch('fetchAds')
  }
})
