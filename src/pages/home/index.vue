<template>
  <dv-full-screen-container ref="appRef">
    <!-- <dv-loading v-show="isLoading">加载中</dv-loading> -->
    <topMenu></topMenu>
    <div class="container flex">
      <!-- 左侧区域-->
      <div class="session s1">
        <dv-border-box-12>
          <titleBar :title="'实时数据检测'"></titleBar>
          <!-- logo及电量 -->
          <div class="con con1 " style="height: 15%;padding-top: 1%;">
            <div class="" style="width: 36%;height: 100%;">
              <!-- logo -->
              <div style="height:50%;width:100%" class="">
                <img src="@/assets/img/logo1.png" style="width:100%;height:70%;margin-top: 10px;">
              </div>
              <div style="height:50%;width:100%;" class="">
                <!-- <div class="connect con con1-1">
                  <i v-if="isConnect" class="success iconfont icon-connection"></i>
                  <span v-if="isConnect" class="success">已连接</span>
                  <i v-if="!isConnect" class="error iconfont icon-disconnect"></i>
                  <span v-if="!isConnect" class="error">未连接</span>
                </div> -->
                <!-- 连接状态 -->
                <div style="width: 100%;height:66px;font-size: 26px;line-height: 60px;" class="">
                  <i v-if="isConnect" class="success iconfont icon-connection" style="font-size: 36px;"></i>
                  <span v-if="isConnect" class="success"> 已连接</span>
                  <i v-if="!isConnect" class="error iconfont icon-disconnect"></i>
                  <span v-if="!isConnect" class="error"> 未连接</span>
                </div>
              </div>
            </div>
            <!-- 电池电量 -->
            <div class="" style="width: 64%;height: 80%;margin-top: 5%;">
              <dv-percent-pond :config="powerConfig" style="width:90%;height:74%;margin: 6% auto;" />
            </div>
          </div>
           <!-- 机器人位置及速度 -->
           <div class="con con5 " style="height:12%;">
            <div><span>机器人当前速度</span><span>80cm/s</span></div>
            <div><span>机器人当前位置</span><span>32m</span></div>
          </div>
          <!-- 皮带视图 -->
          <div class="con gallery" style="height: 20%;margin-top: 5%;">
            <dv-border-box-10>
              <span 
              @click="changePage('/warning')"
              style="position:absolute;right:10px;top:10px;cursor:pointer;padding: 4px;color:skyblue;font-size:18px;border: 3px solid #103F9E;border-radius: 6px;"
              >巡检报警</span>
              <!-- 主要设备的预设埋点 -->
              <el-tooltip>
                <div slot="content"><span style="font-size:14px">撕裂检测设备</span></div>
                <div @click="changePage('/warning')" class="deviceDot d1 success"></div>
              </el-tooltip>
              <el-tooltip content="多功能检测设备">
                <div slot="content"><span style="font-size:14px">多功能检测设备</span></div>
                <div @click="changePage('/warning')" class="deviceDot d2 success"></div>
              </el-tooltip>
              <!-- <div @click="changePage()" class="deviceDot d3"></div> -->
              <!-- 机器人位置的预设埋点 -->
              <!-- <div class="robotDot r1"></div>
              <div class="robotDot r2"></div> -->
              <img :src="imgSrc" style="width: 94%;height:50%;margin: 13% 3%;">
              <!-- <img :src="imgSrc" style="width: 94%;height:40%;margin: 16% 3%;"> -->
            </dv-border-box-10>
          </div>
          <!-- 温湿度及氧气 -->
          <div class="con con3 " style="height:25%;margin-top: 2%;">

            <div class="con3Item " @click="changePage('/sensor')">
              <div>
                <span>红外温度</span>
                <span>72°C</span>
              </div>
              <div class="success">
                <span>正常</span>
              </div>
            </div>

            <div class="con3Item " @click="changePage('/sensor')">
              <div>
                <span>环境温度</span>
                <span>36°C</span>
              </div>
              <div class="success">
                <span>正常</span>
              </div>
            </div>

            <div class="con3Item " @click="changePage('/sensor')">
              <div>
                <span>环境湿度</span>
                <span>44%</span>
              </div>
              <div class="error">
                <span>异常</span>
              </div>
            </div>

            <div class="con3Item" @click="changePage('/sensor')">
              <div>
                <span>氧气浓度</span>
                <span>36%</span>
              </div>
              <div class="success ">
                <span>正常</span>
              </div>
            </div>

            <!-- <dv-water-level-pond :config="waterConfig" style="width:6vw;height:6vw;margin-left: 2vw;" /> -->


          </div>
          <!-- pm粉尘显示 -->
          <div class="con con4 " style="height:20%;">
            <!-- <dv-capsule-chart :config="PMconfig" style="width:100%;height:100%" /> -->
            <homeBar></homeBar>
          </div>
         
        </dv-border-box-12>

      </div>

      <!-- 中间及右侧区域 -->
      <div class="session s2 flex">
        <!-- 中间区域 -->
        <div class="session s2-1 flex">

          <titleBar :title="'主视频窗口'"></titleBar>
          <!--主视频 -->
          <div class="session s2-1-1 " style="width:100%;height:70%;overflow: hidden;">
            <ws v-show="!main_viceFlag"></ws>
            <!-- <robot_video v-if="main_viceFlag"></robot_video> -->
            <IR_video v-show="main_viceFlag"></IR_video>
          </div>
          <!-- 中间底部图表 -->
          <div class="flex " style="height: 30%; width: 100%">
            <div class="session s2-1-2 ">
              <!-- 异常状态及巡检完成率 -->
              <homePie1></homePie1>
              <homePie2></homePie2>
            </div>
            <div class="session s2-1-3 ">
              <!-- 电机信息轮播表 -->
              <dv-border-box-6>
                <dv-scroll-board :config="ListConfig1" style="width:96%;height:92%;margin: 0 auto;padding-top: 2%;" />
              </dv-border-box-6>

            </div>
          </div>


        </div>

        <!-- 右侧区域 -->
        <div class="session s2-2">
          <dv-border-box-12>
            <titleBar :title="'副视频窗口'"></titleBar>
            <!-- 副视频 -->
            <div class="con s2-2-1 " @click="main_viceFlag = !main_viceFlag" style="height:35%;padding-top: 3%;">
              <ws v-if="main_viceFlag"></ws>
              <!-- <robot_video v-show=" main_viceFlag"></robot_video> -->
              <IR_video v-show="!main_viceFlag"></IR_video>
            </div>
            <!-- 机器人控制 -->
            <div class="s2-2-2 " style="height:29%;">
              <!-- 模型和在线状态 -->
              <div class="" style="width:100%;height:35%;display: flex;justify-content: space-around;">
                <div class="img ">
                  <!-- <img :src="modelSrc"> -->
                  <img src="@/assets/img/home/model.gif" alt="" srcset="">
                </div>
                <div class="robotStatus " style="height:80%;width:55%;margin-top: 1.6vh;">
                  <dv-border-box-12>
                    <span class="">
                      快速控制
                    </span>
                  </dv-border-box-12>
                </div>
              </div>
              <!-- 启动停止按钮 -->
              <div class="btnCon " 
              style="display:flex;justify-content:space-around;align-items:center">
                <div class="btn "></div>
                <div class="btn "></div>
              </div>
              <!-- 机器人巡航 -->
            </div>
            <div class="con s2-2-3 flex " style="height:29%;">
              <span style="width:100%;text-align: center;font-size: 26px;" 
              class=""> 巡检模式 </span>
              <div class="ItemCon ">
                <div class="insItem"><span>自动巡检</span>
                  <el-tooltip>
                    <div slot="content">
                      <span style="font-size:14px">
                        机器人将以匀速进行往返巡检，直至电量耗尽则自动回程充电</span></div>
                    <div class="" @click="changeMode(1)"><img :class="inspectionMode === 1 ? '' : 'active'"
                        src="@/assets/img/home/switch.png"></div>
                  </el-tooltip>

                </div>
                <div class="insItem"><span>快速巡检</span>
                  <el-tooltip>
                    <div slot="content"><span style="font-size:14px">
                      机器人将以较快的速度巡检一圈，便于快速检测工区情况</span></div>
                    <div class="" @click="changeMode(2)"><img :class="inspectionMode === 2 ? '' : 'active'"
                        src="@/assets/img/home/switch.png"></div>
                  </el-tooltip>
                </div>
                <div class="insItem"><span>预设巡检</span>
                  <el-tooltip>
                    <div slot="content"><span style="font-size:14px">
                      机器人按照预设的时间段和速度巡检。</span></div>
                    <div class="" @click="changeMode(3)"><img :class="inspectionMode === 3 ? '' : 'active'"
                        src="@/assets/img/home/switch.png"></div>
                  </el-tooltip>
                </div>
              </div>
            </div>
          </dv-border-box-12>

        </div>
      </div>
    </div>
  </dv-full-screen-container>

</template>

<script>
import drawMixin from "@/utils/drawMixin";
import homePie1 from './charts/homePie1.vue'
import homePie2 from "./charts/homePie2.vue";
import homeBar from './charts/homeBar.vue'
import homeBar2 from './charts/homeBar2.vue'
import ws from './components/ws.vue'
export default {
  mixins: [drawMixin],
  name: "",
  data() {
    return {
      //廊道背景
      imgSrc: require('@/assets/img/warning/tc.gif'),
      //是否加载
      isLoading: true,
      //廊道背景切换的interval
      timer1: null,
      //连接状态
      isConnect: true,
      //电池进度图配置
      powerConfig: {
        value: 66,
        colors: ['#01c4f9', '#c135ff'],
        lineDash: [48, 4],
        borderRadius: 8,
        // formatter:'{value}%'
        formatter: '电量：{value}%'
      },
      //氧气浓度水球图配置 
      waterConfig: {
        data: [55],
        shape: 'round',
        waveHeight: 16
      },
      //气体柱状图配置
      PMconfig: {
        data: [
          {
            name: "pm1",
            value: 67,
          },
          {
            name: "pm2.5",
            value: 67,
          },
          {
            name: "PM10",
            value: 55,
          },
        ],
        unit: "um/m³",
        showValue: true,
        colors: ["#dadd3d", "#eeda26", "#d3cf00", "#dbc714", "#aaa816"],
      },
      //轮播表配置
      ListConfig1: {
        data: [
          ["一号转速", "R/S", "正常"],
          ["一号电流", "5A", "正常"],
          ['一号温度', '66°C', '正常'],
          ["二号转速", "R/S", "正常"],
          ["二号电流", "5A", "正常"],
          ['二号温度', '66°C', '正常'],
        ],
      },
      //左侧列表的数据整合
      infoField: [
        { key: '红外测温', value: '70°C' },
        { key: '环境温度', value: '35°C' },
      ],
      //气体信息
      gasInfo: {},
      //机器人位置信息
      positionInfo: {},
      //数据刷新的定时器占位符
      timer: null,
      //主副视频的播放次序占位符
      main_viceFlag: true,
      //当前巡检模式的占位符
      inspectionMode: 1

    };
  },
  props: {},
  components: {
    homePie1, homePie2, homeBar, homeBar2, ws
  },
  computed: {},

  beforeMount() {
    //渲染视频窗口并自动播放
    this.mainVideoPlayer = this.$video(this.$refs.mainVideo, {
      autoplay: true,

    })
  },
  mounted() {
    //获取近七天日期
    let recentDays = this.getRecentlyDays(7);
    this.days = recentDays;
    //检测store
    this.$store.commit("changeRobotInfo", ["test"]);
    this.changeModelSrc()
    this.modelTimer1 = setInterval(() => {
      this.changeModelSrc()
    }, 2000);

  },
  updated() {

  },
  beforeDestroy() {
    clearInterval(this.modelTimer1)
    clearInterval(this.timer1)
  },
  methods: {
    //用于获取近几天的信息
    getRecentlyDays(days) {
      let myDate = new Date(); //获取今天日期
      myDate.setDate(myDate.getDate() - days);
      let dateArray = [];
      let dateTemp;
      let flag = 1;
      for (var i = 0; i < days; i++) {
        let month = 0;
        if (myDate.getMonth() + 1 < 10) {
          month = "0" + (myDate.getMonth() + 1);
        } else {
          month = myDate.getMonth() + 1;
        }
        let day = 0;
        if (myDate.getDate() < 10) {
          day = "0" + myDate.getDate();
        } else {
          day = myDate.getDate();
        }
        dateTemp = month + "-" + day;
        dateArray.push(dateTemp);
        myDate.setDate(myDate.getDate() + flag);
      }
      return dateArray;
    },
    //用于切换主副视频源
    // changeVideo(direction) {
    //   if (direction === 'left') {
    //     let videoList = []     
    //     videoList[0]=this.videoList[1]
    //     videoList[1]=this.videoList[2]
    //     videoList[2]=this.videoList[0]
    //     this.videoList=videoList     
    //   } else {
    //     let videoList = []  
    //     videoList[0]=this.videoList[2]
    //     videoList[1]=this.videoList[0]
    //     videoList[2]=this.videoList[1]
    //     this.videoList=videoList
    //   }
    // },
    //获取电量信息
    getBatteryInfo() {
      let batteryInfo = this.$store.state.batteryInfo;
      let dumpEnergy = (batteryInfo.cap_t / batteryInfo.cap_r) * 100;
      this.batterInfo.dumpEnergy = dumpEnergy;
      //console.log(typeof dumpEnergy);
    },
    //获取气体信息
    getGasInfo() {
      //console.log(this.$store.state.gasInfo);
      this.gasInfo = this.$store.state.gasInfo;
    },
    //获取机器人位置信息
    getPositionInfo() {
      this.positionInfo = this.state.positionInfo;
    },
    //更改巡检模式
    changeMode(type) {
      //alert(`更改为第${type}种巡检类型`)
      this.inspectionMode = type
    },
    //快速跳转页面
    changePage(page){
      this.$router.push(`${page}`)
    },
  },
};
</script>

<style lang='less' scoped >
@import "@/assets/css/common.css";

.border {
  border: 1px solid red;
}

#dv-full-screen-container {
  background: url('@/assets/img/BG.png');
  background-size: cover;
  //border: 1px solid red;
}

.container {
  height: 94vh;
  margin-top: 2vh;
  overflow: hidden;
  justify-content: space-around;
  white-space: no-warp;
}

.rotate {
  animation: cir 2s linear infinite;
}

.success {
  color: #32ce84;

  span {
    color: #32ce84 !important;
  }
}

.error {
  color: red;

  span {
    color: red !important;
  }
}

span {
  color: #ffffff;
}

.con {
  //border: 1px solid red;
  width: 94%;
  margin: 0 auto;
  display: flex;
}

.s1 {
  width: 400px;
  background-color: transparent;
  background-color: #00296B60;
  padding-bottom: 1vh;

  //电池样式设置
  /deep/ .dv-percent-pond text {
    font-weight: 100;
    font-size: 32px;
  }

  //logo及连接
  // .con1 {
  //   .con1-1 {
  //     position: relative;
  //     font-size: 18px;

  //     span:first-of-type {
  //       position: absolute;
  //       left: 8px;
  //       top: 8px;
  //     }

  //     .icon-connection,
  //     .icon-disconnect {
  //       position: absolute;
  //       left: 28%;
  //       top: 16%;
  //       font-size: 46px;
  //     }

  //     span:last-of-type {
  //       position: absolute;
  //       bottom: 8px;
  //       right: 8px;
  //     }
  //   }
  // }

  //皮带视图
  .gallery {

    .success{
      background-color: #32ce8480;
    }

    .error{
      background-color: red;
    }

    //机器人和设备的通用样式
    .deviceDot,
    .robotDot {
      position: absolute;
      //border: #a89f9f 1px solid;
      border-radius: 50%;
      width: 18px;
      height: 18px;

      &:hover {
        cursor: pointer;
      }

      animation: shade 1.4s infinite;
    }

    //先给设施设备定位
    .d1 {
      //撕裂
      left: 260px;
      bottom: 80px;
    }

    .d2 {
      //多功能
      left: 290px;
      bottom: 80px;
    }

    //再给机器人定位





  }

  //温湿度及氧气
  .con3 {
    justify-content: start;
    align-items: center;
    flex-wrap: wrap;

    .success {
      background-color: #32ce8460;
    }

    .error {
      background-color: red;
    }

    .con3Item {
      width: 38%;
      height: 30%;
      border-radius: 10% 0 0 10%;
      margin-left: 10px;
      margin-right: 26px;
      display: flex;
      justify-content: space-between;
      border: 1px double #32ce8460;
      background: url('@/assets/img/home/glassBox.png') no-repeat;
      cursor: pointer;

      background-size: cover;

      div:first-of-type {
        width: 52%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        span:first-of-type {
          text-align: left;
          margin-left: 10%;
          //text-decoration: underline;
        }

        span:last-of-type {
          font-size: 26px;
          text-align: right;
          font-weight: 700;
          margin-left: 90%;
          //text-decoration: underline;
        }
      }

      div:last-of-type {
        width: 50%;
        margin-right: -20%;
        //height: 160%;
        //border: 1px solid red;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: url('@/assets/img/home/cirLeft.png') no-repeat;
        background-size: cover;
        animation: cir 5s infinite linear;

        span {
          color: #ffffff;
          //color: #32ce84;
          animation: cir 5s infinite reverse linear;
        }

      }

    }
  }

  .con5 {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    div {
      display: flex;
      margin: 0 auto;
      width: 86%;
      justify-content: space-between;
    }

    span {
      font-size: 22px;
    }
  }


}

.s2 {
  justify-content: space-between;
  width: 1486px;
  background-color: transparent;
  padding-bottom: 1vh;

  img {
    width: 100%;
    height: 100%;
  }

  //中间区域
  .s2-1 {
    width: 1068px;
    height: 100%;
    flex-direction: column;
    background-color: rgba(6, 80, 109, 0.2);
    background-color: #00296B60;

    //background-color: transparent;

    //底部区域
    .s2-1-2 {
      height: 100%;
      width: 60%;
      display: flex;

    }

    .s2-1-3 {
      height: 100%;
      width: 40%;
    }
  }

  //右侧区域
  .s2-2 {
    width: 400px;
    height: 100%;
    //background-color: rgba(6, 80, 109, 0.2);
    background-color: transparent;
    background-color: #00296B60;

    .s2-2-2 {
      position: relative;

      .img {
        width: 20%;
      }

      .robotStatus {
        position: relative;

        span {
          width: 100%;
          height: 46%;
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          margin: auto;
          font-size: 32px;
          text-align: center;
          padding-bottom: 8px;
        }
      }

      .btnCon {
        width: 90%;
        margin: 0 auto;
        margin-top: 3vh;

        .btn {
          width: 5vw;
          height: 5vw;
          border-radius: 50%;

          &:first-of-type {
            background: url('@/assets/img/home/run.png');
            background-size: cover;

            &:active {
              background: url('@/assets/img/home/run@active.png');
              background-size: cover;
            }
          }

          &:last-of-type {
            background: url('@/assets/img/home/stop.png');
            background-size: cover;

            &:active {
              background: url('@/assets/img/home/stop@active.png');
              background-size: cover;
            }
          }
        }


      }
    }

    .s2-2-3 {
      flex-direction: column;
      align-items: center;

      .ItemCon {
        width: 86%;
        height: 80%;
        margin: auto 0;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: space-between;
        background: url('@/assets/img/home/inspectionBcg.jpg') no-repeat;
        background-size: cover;

        .insItem {
          width: 100%;
          height: 30px;
          display: flex;
          justify-content: space-around;
          font-size: 20px;

          //按钮部分
          div {
            width: 51px;
            height: 28px;
            overflow: hidden;
            border-radius: 12px;

            position: relative;

            &:hover {
              cursor: pointer;
            }

            img {
              width: 80px;
              height: 28px;
              transition: left 0.18s ease-in;
              position: absolute;
              //transform: translate(0px);
              left: 0
            }

            //激活的样式
            .active {
              left: -30px;
              //transform: translate(-40px);
            }
          }
        }
      }
    }

  }
}

//背景闪烁的动画
@keyframes shade {
  from {
    opacity: 1;
  }

  50% {
    //background-color: transparent;
    opacity: 0.3;
  }

  to {
    opacity: 1;
  }
}
</style>
