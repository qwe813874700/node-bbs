import Vue from 'vue'
import '../plugins/element/element.js'
import '../assets/styles/index.scss'
import Vue2Editor from 'vue2-editor';
import Verify from '../core/Verify'
import Request from '../core/Request'

Vue.use(Vue2Editor)

Vue.prototype.$verify = new Verify()
Vue.prototype.$request = new Request()
