<template>
  <div>
    <div style="width: 600px;height:400px">
        <ws/> 
    </div>
     
  </div>
</template>
<script>
import flvjs from "flv.js";
import ws from '@/components/ws.vue'
export default {
  //mixins:[ws],
  data () {
      return {
        id: "1",
        rtsp: "http://192.168.2.91:8000/live/test.flv",
        player: null
      }
  },
  components:{ws},
  mounted () {
      if (flvjs.isSupported()) {
          let video = this.$refs.player;
          if (video) {
              this.player = flvjs.createPlayer({
                  type: "flv",
                  isLive: true,
                  url: this.rtsp
              });
              this.player.attachMediaElement(video);
              try {
                  this.player.load();
                  this.player.play();
              } catch (error) {
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
