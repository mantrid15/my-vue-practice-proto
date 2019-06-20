import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import BuyModalComponent from '@/components/Shared/BuyModal'
import * as fb from 'firebase/app'
import 'vuetify/dist/vuetify.min.css'
import './stylus/main.styl'
// import colors from 'vuetify/es5/util/colors'

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
      apiKey: 'AIzaSyCne2-0cWfntWHgTVCpA1chlHalfJEhWkU',
      authDomain: 'my-link-parser2090610.firebaseapp.com',
      databaseURL: 'https://my-link-parser2090610.firebaseio.com',
      projectId: 'my-link-parser2090610',
      storageBucket: 'my-link-parser2090610.appspot.com',
      messagingSenderId: '287867559943'
    })

    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })

    this.$store.dispatch('fetchAds')
  }
})
