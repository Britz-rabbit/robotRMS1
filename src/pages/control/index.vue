<template>
  <div>
    <topMenu></topMenu>
    <div class='flex container'>
      <div class="s1 ">
        <dv-border-box-10>
          <div class="icons ">
            <i class="iconfont icon-jiqiren"></i>
            <i class="iconfont icon-dengguang"></i>
            <i class="iconfont icon-connection"></i>
          </div>
          <div class="img">
            <ws v-if="main_viceFlag"></ws>
            <IR_video v-else></IR_video>
          </div>
        </dv-border-box-10>
      </div>

      <div class="s2 session">
        <titleBar :title="'控制面板'"></titleBar>
        <div class="con con1">
          <ctlPanel></ctlPanel>
        </div>
        <div class="con flex con2">
          <div class="chose " @click="main_viceFlag = true" :class="main_viceFlag ? 'chosed' : ''">
            <ws></ws>
          </div>
          <div class="chose " @click="main_viceFlag = false" :class="!main_viceFlag ? 'chosed' : ''">
            <IR_video></IR_video>
          </div>
        </div>
        <!-- 按钮区域 -->
        <div class="con con3 flex">
          <div class="panel ">
            <div class="title">
              <span>机器人控制</span>
            </div>
            <div class="line line1 ">
              <div @click="" class="btn pluse"></div>
            </div>
            <div class="line line2 ">
              <div class="btn left"></div>
              <div class="btn pause"></div>
              <div class="btn right"></div>
            </div>
            <div class="line line1 ">
              <div class="btn min"></div>
            </div>
          </div>
          <div class="panel ">
            <div class="title">
              <span>云台控制</span>
            </div>
            <div class="line line1 ">
              <div class="btn up"></div>
            </div>
            <div class="line line2 ">
              <div class="btn left"></div>
              <div class="btn right"></div>
            </div>
            <div class=" line line1 ">
              <div class="btn down"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import ws from './components/ws.vue'
import ctlPanel from './components/ctlPanel.vue'
export default {
  name: '',
  data() {
    return {
      //主副视频的播放次序占位符
      main_viceFlag: true

    }
  },
  props: {
  },
  components: {
    ws, ctlPanel
  },
  computed: {

  },
  beforeMount() {


  },
  mounted() {
    console.log(this);
  },
  methods: {

  },
}
</script>

<style lang='less' scoped >
@import '@/assets/css/common.less';


.border {
  border: 1px solid red;
}

// .session {
//   border: 1px solid yellow;
// }

.chosed {
  border: #32CE84 1px solid;
}

.con {
  width: 100%;
  //border: 1px solid red;
}

img {
  width: 100%;
  height: 100%;
}

.s1 {
  height: 100%;
  width: 70%;
  background-color: rgba(6, 80, 109, 0.2);
  border-radius: 4%;
  margin-top: 1vh;
  overflow: hidden;

  .dv-border-box-10 {
    position: relative;
    overflow: hidden;

    .icons {
      position: relative;
      z-index: 10;
      width: 18%;
      height: 8%;
      left: 3vw;
      top: 4vh;
      display: flex;
      justify-content: space-around;

      i {
        font-size: 28px;
        color: #32CE84;
      }
    }

    .img {
      width: 96%;
      height: 96%;
      border-radius: 4%;
      position: absolute;
      z-index: 9;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      margin: auto;
      overflow: hidden;
    }
  }

}

.s2 {
  height: 100%;
  width: 26%;
  background-color: rgba(6, 80, 109, 0.2);

  .con1 {
    height: 35%;
  }

  .con2 {
    height: 25%;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box;

    .chose {
      width: 48%;
      height: 86%;
    }
  }

  .con3 {
    height: 35%;

    .title {
      display: flex;
      width: 80%;
      height: 5vh;
      line-height: 5vh;
      color: #ffffff;
      margin: 0 auto;
      text-align: center;
      background: url('@/assets/img/comm/bracket.png') no-repeat;
      background-size: contain;
      justify-content: center;
      align-items: center;

      span {
        color: #32CE84;
        font-size: 20px;
      }
    }

    .panel {
      width: 50%;
      height: 80%;
      margin: auto 0;


      .btn {
        width: 3vw;
        height: 3vw;
        border: 1px solid blue;
        border-radius: 50%;
      }

      .line {
        width: 100%;
        height: 33%;
        display: flex;
        align-items: center;
      }

      .line1 {
        justify-content: center;
      }

      .line2 {
        justify-content: space-around;
      }

      .btn {
        box-sizing: border-box;

        &:active {
          border: #93b939 0.2vw solid;
        }
      }

      .up {
        background: url('@/assets/img/ctlBtn/up.png');
        background-size: contain;

        &:active {
          background: url('@/assets/img/ctlBtn/up@active.png');
          background-size: contain;
        }
      }


      .down {
        background: url('@/assets/img/ctlBtn/down.png');
        background-size: contain;

        &:active {
          background: url('@/assets/img/ctlBtn/down@active.png');
          background-size: contain;
        }
      }

      .left {
        background: url('@/assets/img/ctlBtn/left.png');
        background-size: contain;

        &:active {
          background: url('@/assets/img/ctlBtn/left@active.png');
          background-size: contain;
        }
      }

      .right {
        background: url('@/assets/img/ctlBtn/right.png');
        background-size: contain;

        &:active {
          background: url('@/assets/img/ctlBtn/right@active.png');
          background-size: contain;
        }
      }

      .pluse {
        background: url('@/assets/img/ctlBtn/pluse.png');
        background-size: contain;

        &:active {
          background: url('@/assets/img/ctlBtn/pluse@active.png');
          background-size: contain;
        }
      }

      .min {
        background: url('@/assets/img/ctlBtn/min.png');
        background-size: contain;

        &:active {
          background: url('@/assets/img/ctlBtn/min@active.png');
          background-size: contain;
        }
      }

      .pause {
        background: url('@/assets/img/ctlBtn/pause.png');
        background-size: contain;

        &:active {
          background: url('@/assets/img/ctlBtn/pause@active.png');
          background-size: contain;
        }
      }


    }
  }
}
</style>
