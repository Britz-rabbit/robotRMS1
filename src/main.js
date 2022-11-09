import Vue from 'vue';
import App from './App.vue';
import router from './router'
import store from './store'

import '@/plugins/element'
import '@/plugins/lodash'
import '@/plugins/dataV'
import '@/plugins/swiper'
import '@/plugins/video'


//挂载全局组件
import titleBar from './components/titleBar'
import ctlPanel from './components/ctlPanel'
//import batteryInfo from './components/batteryInfo'
import waterBall from './components/ehcarts/waterBall'
//import warningList from './components/warningList'
import ws from './components/ws'
import IR_video from './components/IR_video'

Vue.component('titleBar',titleBar)
Vue.component('ctlPanel',ctlPanel)
//Vue.component('batteryInfo',batteryInfo)
Vue.component('waterBall',waterBall)
//Vue.component('warningList',warningList)
Vue.component('ws',ws)
Vue.component('IR_video',IR_video)

//创建并挂载$bus
class Bus {
  constructor(){
    this.callbacks = {}
  }
  $on(name, fn){
    this.callbacks[name] = this.callbacks[name] || []
    this.callbacks[name].push(fn)
  }
  $emit(name, args){
    if(this.callbacks[name]){
      this.callbacks[name].forEach(cb => cb(args))
    }
  }
}
Vue.prototype.$bus = new Bus();

//引入websocket
//import websocket from './utils/websocket'
//Vue.prototype.$websocket=websocket

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});