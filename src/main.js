import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import i18n from './locale' // Internationalization
import './styles/global.css'

Vue.use(Element, {
  i18n: (key, value) => i18n.t(key, value)
})

new Vue({
  el: '#app',
  i18n,
  render: h => h(App)
})
