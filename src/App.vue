<template>
  <div id="app">
    <!-- <transition :name="transitionName">
              <router-view></router-view> 
          </transition> -->
    <router-view></router-view>
  </div>
</template>

<script>
import drawMixin from './utils/drawMixin';
export default {
  mixins: [drawMixin],
  name: 'App',
  components: {

  },
  //初始化和销毁websocket
  created() {
    this.initWebSocket()
    //console.log(this.websocket);
  },
  destroyed: function () {
    this.websocketclose();
  },
  mounted() {
    console.log('app的this', this);
    setInterval(() => {
      this.golbalWS.send('getsensor')
    }, 1000);
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
  methods: {
    //初始化websocket函数
    initWebSocket() {
      const url = 'ws://192.168.2.91:30006';
      this.golbalWS = new WebSocket(url);
      this.golbalWS.onopen = this.websocketonopen;
      this.golbalWS.onerror = this.websocketonerror;
      this.golbalWS.onmessage = this.websocketonmessage;
      this.golbalWS.onclose = this.websocketclose;
      console.log('全局的url:' + url);
    },
    websocketonopen() {
      //console.log("WebSocket连接成功,开始发送消息");
      let str = JSON.stringify('user:admin')
      this.websocket.send(str)

    },
    websocketonerror(e) {
      console.log("WebSocket连接发生错误" + e);
    },
    websocketonmessage(e) {
      let data = JSON.parse(e.data)
      if (data.pm && data.co) {
        // console.log('存放气体相关信息');
        this.$store.commit('changeGasInfo', data)
        return
      }
      if (data.voltage && data.current) {
        // console.log('收到电池相关信息')
        this.$store.commit('changeBatteryInfo', data)
        return
      }
      if (data.position && data.speed) {
        // console.log('收到机器人位置相关信息')
        this.$store.commit('changePositionInfo', data)
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
  //设置文字不可选中
  -moz-user-select: none;
  -khtml-user-select: none;
  user-select: none;
}

// #dv-full-screen-container{
//  margin-bottom: 13vh;
// }


::-webkit-scrollbar {
  display: none
}

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
  100% {
    transform: rotate(360deg);
  }
}
</style>
