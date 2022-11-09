<template>
  <div id="app">
    <dv-full-screen-container ref="appRef">
          <!-- <transition :name="transitionName">
              <router-view></router-view> 
          </transition> -->
          <router-view></router-view> 
    </dv-full-screen-container>
   
    </div>
</template>

<script>
import topMenu from './components/topMenu.vue'
import drawMixin from './utils/drawMixin';
export default {
  mixins: [drawMixin],
  name: 'App',
  components: {
    topMenu
  },
   //初始化和销毁websocket
  created() {
    this.initWebSocket()
    //console.log(this.websocket);
  },
  destroyed: function () {
    this.websocketclose();
  },
  mounted(){
    
  },
  watch: {
    //使用watch 监听$router的变化
    $route(to, from) {
      //如果to索引大于from索引,判断为前进状态,反之则为后退状态
      if (to.meta.index > from.meta.index) {
        //设置动画名称
        this.transitionName = "slide-left";
      } else {
        this.transitionName = "slide-right";
      }
    },
  },
  methods:{
     //初始化websocket函数
     initWebSocket() {
      const url = 'ws://192.168.2.91:30006';
      this.websocket = new WebSocket(url);
      this.websocket.onopen = this.websocketonopen;
      this.websocket.onerror = this.websocketonerror;
      this.websocket.onmessage = this.websocketonmessage;
      this.websocket.onclose = this.websocketclose;
    },
    websocketonopen() {
      //console.log("WebSocket连接成功,开始发送消息");
      let str=JSON.stringify('user:admin')
      this.websocket.send(str)
      
    },
    websocketonerror(e) {
      console.log("WebSocket连接发生错误" + e);
    },
    websocketonmessage(e) {
      let data=JSON.parse(e.data)
      if(data.pm && data.co){
       // console.log('存放气体相关信息');
        this.$store.commit('changeGasInfo',data)
        return
      }
      if(data.voltage && data.current){
       // console.log('收到电池相关信息')
        this.$store.commit('changeBatteryInfo',data)
        return
      }
      if(data.position && data.speed){
       // console.log('收到机器人位置相关信息')
        this.$store.commit('changePositionInfo',data)
        return
      }
    },
    websocketclose() {
      console.log("connection closed");
    },
  }
  
}
</script>

<style lang="less">
#app {
  margin: 0;
  padding: 0;
}
#dv-full-screen-container{
  background: url('./assets/img/background.png');
  background-size: cover;
  //border: 1px solid red;
}

::-webkit-scrollbar {display:none}
/* 设置路由切换的动画效果 */

.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 150ms;
  position: absolute;
}

// 右滑初始装状态
.slide-right-enter {
   opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

// 右滑执行状态
.slide-right-leave-active {
   opacity: 0;
  transform: translate3d(100%, 0, 0);
}

// 右滑最终状态
.slide-right-enter-to {
   opacity: 1;
  transform: translate3d(0, 0, 0);
}

// 左滑初始装状态
.slide-left-enter {
   opacity: 0;
  transform: translate3d(100%, 0, 0);
}

// 左滑执行状态
.slide-left-leave-active {
   opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

// 左滑最终状态
.slide-right-enter-to {
   opacity: 1;
  transform: translate3d(0, 0, 0);
}
  
@keyframes cir {
  100%{
    transform: rotate(360deg);
  }
}
</style>
