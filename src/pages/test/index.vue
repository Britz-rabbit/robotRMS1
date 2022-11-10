<template>
  <div>
      <video class="demo-video" ref="player" muted autoplay></video>
  </div>
</template>
<script>
import flvjs from "flv.js";
export default {
  data () {
      return {
        id: "1",
        rtsp: "rtsp://admin:qwe,asd.@192.168.2.243:554/Streaming/channels/102",
          player: null
      }
  },
  mounted () {
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
  }
}
</script>
<style>
  .demo-video {
      max-width: 880px; 
      max-height: 660px;
  }
</style>
