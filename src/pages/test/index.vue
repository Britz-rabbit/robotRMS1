<template>
  <div>
      <!-- <video class="demo-video" ref="player" muted autoplay></video> -->
    <div style="width:600px;height:400px">
        <img :src="rgb_msg" style="width:100%;height:100%"/>
    </div>
  </div>
</template>
<script>
import flvjs from "flv.js";
export default {
  data () {
      return {
        id: "1",
        rtsp: "rtsp://admin:qwe,asd.@192.168.2.243:554/Streaming/channels/102",
        player: null,
        rgb_msg: ""
      }
  },
  created(){
    this.initWebSocket()
  },
  mounted () {
    console.log('test的this',this);
      if (flvjs.isSupported()) {
          let video = this.$refs.player;
          if (video) {
              this.player = flvjs.createPlayer({
                  type: "flv",
                  isLive: true,
                  url: `ws://192.168.2.103:8888/rtsp/${this.id}/?url=${this.rtsp}`
              });
              this.player.attachMediaElement(video);
              try {
                  this.player.load();
                  this.player.play();
              } catch (error) {
                  console.log(error);
              };
          }
          // if (video) {
          //     this.player = flvjs.createPlayer({
          //         type: "flv",
          //         url: `/static/test.flv`
          //     });
          //     this.player.attachMediaElement(video);
          //     try {
          //         this.player.load();
          //         this.player.play();
          //     } catch (error) {
          //         console.log(error);
          //     };
          // }
      }

  },
  beforeDestroy () {
      this.player.destory();
      this.websocketclose();
  },
  methods:{
    initWebSocket() {
            const wsuri = 'ws://192.168.2.228:40001';
            this.websocket = new WebSocket(wsuri);
            this.websocket.onopen = this.websocketonopen;
            this.websocket.onerror = this.websocketonerror;
            this.websocket.onmessage = this.websocketonmessage;
            this.websocket.onclose = this.websocketclose;
            console.log('局部的url:'+wsuri);
        },
        websocketonopen() {
            console.log("WebSocket连接成功");
            console.log("111");
        },
        websocketonerror(e) {
            console.log(e);
            //出问题后打印出对象，然后自动重连ws
            const wsuri = 'ws://192.168.2.228:40001';
            this.websocket = new WebSocket(wsuri);
        },
        websocketonmessage(e) {
            this.rgb_msg = "data:image/jpeg;base64," + e.data;
        },
        websocketclose() {
            console.log("connection closed");
            this.websocket.close();
        },
  },
}
</script>
<style>
  .demo-video {
      max-width: 880px; 
      max-height: 660px;
  }
</style>
