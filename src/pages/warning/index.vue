<template>
  <div class=''>
    <dv-full-screen-container ref="appRef">
      <topMenu></topMenu>
      <div class="container">

        <!-- 上方区域 -->
        <div class="topBox " style="width:100%;height:70%;display: flex;">
          <!-- 左侧料量 -->
          <div class="material " style="height:100%;width:30%">
            <dv-border-box-8>
              <div class="infoBar ">
                <div class="info ">
                  <span class="">今日已进料 <span class="num">11</span> 小时</span>
                </div>
                <div class="info ">
                  <span>已累计进料 <span class="num">608</span> 吨</span>
                </div>
              </div>
              <div class="" style="width:100%;height:70%;margin-top: 30px;">
                <warningLine2Vue></warningLine2Vue>
              </div>
            </dv-border-box-8>
          </div>
          <!-- 右侧 多功能，撕裂及传感设备 -->
          <div class="topRight" style="height:100%;width:70%;display: flex;">

            <!-- 右侧第一部分 -->
            <div class="mult" style="width:50%;height:100%;">

              <dv-border-box-2>
                <!-- 上方模型刨面图 -->
                <div class="img " style="width:100%;height:60%">
                  <!-- 多功能的 -->
                  <div v-show="isMuti" class="" style="width: 100%;height: 100%;">
                    <img src="@/assets/img/warning/multi.gif" style="width: 70%;height: 100%;margin-left: 15%;">
                  </div>
                  <!-- 撕裂的 -->
                  <div v-show="!isMuti" class="" style="width: 100%;height: 100%;">
                    <img src="@/assets/img/warning/break.gif" style="width: 100%;height: 100%;">
                  </div>
                </div>
                <!-- 下方标题与切换 -->
                <div class="title " style="white-space: nowrap;">
                  <span v-show="isMuti">多 功 能 检 测 设 备</span>
                  <span v-show="!isMuti">撕 裂 检 测 设 备</span>
                  <i class="el-icon-refresh " @click="isMuti = !isMuti"></i>
                </div>
                <!-- 检测信息表格 -->
                <div class="list">
                  <div>当前状态：<span class="success">正常</span></div>
                  <div>检测时间：<span>2022-11-8 &nbsp;&nbsp;11:20</span></div>
                </div>
              </dv-border-box-2>


            </div>

            <!-- 右侧第二部分 -->
            <div class="diviceList " style="width:50%;height:100%;">
              <dv-border-box-2>
                <!-- 上边传感 -->
                <div class=" devCon" style="width:100%;height: 60%;">
                  <div v-for="(item, index) in deviceList"
                  @click="choseDevice=item"
                   class="devItem" :class="item.isDanger?'err':'success'">{{item.name}}</div>
                </div>
                <!-- 下边信息 -->
                <div class="devSpanCon" style="width:100%;height:40%;">
                  <span>{{choseDevice.name}}</span>
                  <span>{{choseDevice.position}}</span>
                  <span>{{choseDevice.value}} {{choseDevice.isDanger?'异常':'正常'}}</span>
                </div>
              </dv-border-box-2>
            </div>

          </div>
        </div>

        <!-- 下方区域-->
        <div class="bottomBox" style="width:100%;height:30%">

          <!-- 左侧皮带廊 -->
          <div class="" style="height: 100%;width: 70%;position: relative;">
            <dv-border-box-7>
              <!-- 机器人轨迹埋点 X 26 -->
              <div class="bottomInfo" style="height:12%;">
            <div><span>机器人当前速度</span><span>80cm/s</span></div>
            <div><span>机器人当前位置</span><span>32m</span></div>
          </div>
              <div class="dot d1 " :class="{success:currentDot==='d1'}"></div>
              <div class="dot d2  "  :class="{success:currentDot==='d2'}"></div>
              <div class="dot d3 "  :class="{success:currentDot==='d3'}"></div>
              <div class="dot d4 "  :class="{success:currentDot==='d4'}"></div>
              <div class="dot d5 "  :class="{success:currentDot==='d5'}"></div>
              <div class="dot d6 "  :class="{success:currentDot==='d6'}"></div>
              <div class="dot d7 "  :class="{success:currentDot==='d7'}"></div>
              <div class="dot d8 "  :class="{success:currentDot==='d8'}"></div>
              <div class="dot d9 "  :class="{success:currentDot==='d9'}"></div>
              <div class="dot d10 "  :class="{success:currentDot==='d10'}"></div>
              <div class="dot d11 "  :class="{success:currentDot==='d11'}"></div>
              <div class="dot d12 "  :class="{success:currentDot==='d12'}"></div>
              <div class="dot d13 "  :class="{success:currentDot==='d13'}"></div>
              <div class="dot d14 "  :class="{success:currentDot==='d14'}"></div>
              <div class="dot d15 "  :class="{success:currentDot==='d15'}"></div>
              <div class="dot d16 "  :class="{success:currentDot==='d16'}"></div>
              <div class="dot d17 "  :class="{success:currentDot==='d17'}"></div>
              <div class="dot d18 "  :class="{success:currentDot==='d18'}"></div>
              <div class="dot d19 "  :class="{success:currentDot==='d19'}"></div>
              <div class="dot d20 "  :class="{success:currentDot==='d20'}"></div>
              <div class="dot d21 "  :class="{success:currentDot==='d21'}"></div>
              <div class="dot d22 "  :class="{success:currentDot==='d22'}"></div>
              <div class="dot d23 "  :class="{success:currentDot==='d23'}"></div>
              <div class="dot d24 "  :class="{success:currentDot==='d24'}"></div>
              <div class="dot d25 "  :class="{success:currentDot==='d25'}"></div>
              <div class="dot d26 "  :class="{success:currentDot==='d26'}"></div>
              <img src="@/assets/img/warning/tc.gif" class="" style="width: 96%;margin-left: 2%;margin-top: 40px;">
            </dv-border-box-7>



          </div>

          <!-- 右侧轮播图 -->
          <div class="" style="height:100%;width: 30%;">
            <dv-border-box-7>
              <div style="width:96%;height:96%;margin:1%;cursor: pointer;">
                <el-carousel height="258px">
                  <el-carousel-item v-for="(item, index) in catchImgList" :key="item">
                    <img :src="item" style="width: 100%; height: 100%" @click="showDialog(item)" />
                  </el-carousel-item>
                </el-carousel>
              </div>
            </dv-border-box-7>
          </div>
        </div>

        <!-- 轮播图的对话框 -->
        <el-dialog title="详细抓拍" :modal="false" center :visible.sync="dialogVisible" width="50%">
          <img :src="choseImg" alt="" style="width: 100%;height:100%;">
        </el-dialog>

      </div>
    </dv-full-screen-container>
  </div>
</template>

<script>
import galleryVue from './gallery.vue';
import multifunctionVue from './multifunction.vue';
import warningLine2Vue from './charts/warningLine2.vue';
export default {
  name: '',
  data() {
    return {
      //抓拍到的错误信息
      catchImgList: [
        require("../../assets/img/home/video1.jpeg"),
        require("../../assets/img/home/video2.jpeg"),
        require("../../assets/img/wrong.jpeg"),
      ],
      //廊道背景图
      gallaryImg: require('@/assets/img/warning/tc.gif'),
      //是否打开对话框的标识符
      dialogVisible: false,
      //选中查看的大图路径
      choseImg: '',
      //多功能和撕裂信息的切换占位符
      isMuti: true,
      //廊道设备列表
      deviceList:[
        {
          name:'烟感传感器1号',
          position:'32m',
          value:'132',
          isDanger:true
        },
      ],
      //当前选中要展示的设备信息
      choseDevice:{},
      //机器人当前位置(测试用)
      position:0,
      //机器人位置变换的定时器
      positionTimer:null
    }
  },
  props: {
  },
  components: {
    galleryVue, multifunctionVue, warningLine2Vue
  },
  computed: {
    //当前显示的第几个点
      currentDot(){
        return 'd'+Math.floor(this.position/46)
      }
  },
  beforeMount() {

  },
  mounted() {
    //先用传感器数据凑合凑合展示
    this.deviceList=this.$store.state.sensorInfo
    //默认展示第一个传感器的信息
    this.choseDevice=this.deviceList[0]
    //改变机器人的位置信息
    this.positionTimer=setInterval(() => {
      if(this.position>=1200) this.position=0
      else this.position+=20
      //console.log(this.currentDot);
    }, 1000);
  },
  beforeDestroy(){
    clearInterval(this.positionTimer)
  },
  methods: {
    //显示抓拍到的大图
    showDialog(src) {
      console.log(src);
      this.dialogVisible = true
      this.choseImg = src
    },

  },
 
}
</script>

<style lang='less' scoped >
.border {
  border: 1px solid red;
}

#dv-full-screen-container {
  background: url('@/assets/img/BG.png');
  background-size: cover;
  //border: 1px solid red;
}

span {
  color: #ffffff;
}

// 上方区域
.topBox {



  //左侧料量
  .material {
    .infoBar {
      padding-top: 5%;
      height: 20%;
      display: flex;
      //flex-direction: column;
      justify-content: space-around;
      align-items: center;

      .num {
        color: aquamarine;
        font-size: 32px;
      }

      .info {
        width: 45%;
        height: 48%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        background: url('@/assets/img/comm/bracket.png') no-repeat;
        background-size: cover;

        span {
          height: 60px;
          width: 100%;
          text-align: center;
        }
      }
    }
  }

  //右侧设备
  .topRight {

    //右侧第一部分
    .mult {
      .title {
        width: 40%;
        height: 30px;
        margin: 0 auto;
        padding: 10px 0;
        display: flex;
        justify-content: space-around;
        align-items: flex-end;
        font-size: 22px;

        span {
          color: #0ADBFA;
        }

        .el-icon-refresh {
          color: #7FE4A7;
          cursor: pointer;
          transition: all 0.3s linear;
          font-size: 28px;

          &:hover {
            transform: rotate(90deg);
          }

          &:active {
            color: rgb(173, 119, 48);
          }

        }
      }

      .list {
        color: #ffffff;

        .success {
          color: #7FE4A7;
        }

        .danger {
          color: red;
        }

        div {
          width: 80%;
          margin: 0 auto;
          height: 40px;
          margin-top: 16px;
          font-size: 22px;
        }
      }

    }

    //右侧第二部分
    .diviceList { 
      //上边传感
      .devCon {
        display: flex;
        flex-wrap: wrap;
        justify-content: start;
        align-items: space-between;

        .err{
          color: red;
        }
        .success{
          color: #7FE4A7;
        }
        .devItem {
          width: 120px;
          height: 50px;
          line-height: 50px;
          text-align: center;
          background: url('@/assets/img/warning/barBG.png') no-repeat;
          background-size: cover;
          margin-left: 12px;
          margin-top: 16px;
          font-size: 16px;
          
          &:hover {
            cursor: pointer;
          }

        }
      }

      //下边信息
      .devSpanCon{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        span{
          border: 1px solid red;
          font-size: 22px;
          margin-top: 4px;
          height: 40px;
          line-height: 40px;
          text-align: center;
          width: 86%;
        }

      }

    



    }

  }


}

.bottomBox {
  position: relative;
  display: flex;

  .bottomInfo {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: absolute;
    width: 500px;
    height: 460px;
    right: 200px;
    top: 20px;

    div {
      display: flex;
      margin: 0 auto;
      width: 86%;
      justify-content: space-between;
      margin-top: 10px;
    }

    span {
      font-size: 22px;
    }
  }
  
  .success {
    background-color: #32ce8480;
    background-color: orange;
    display: block !important;
  }

  .error {
    background-color: red;
  }

  //机器人和设备的通用样式
  .dot {
    position: absolute;
    //border: #a89f9f 1px solid;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: none;


    &:hover {
      cursor: pointer;
    }

    animation: shade 1.4s infinite;
  }

  //机器人轨迹埋点
  .d1{
    top: 40px;
    left: 50px;
  }

  .d2{
    top: 40px;
    left: 100px;
  }

  .d3{
    top: 40px;
    left: 150px;
  }

  .d4{
    top: 62px;
    left: 220px;
  }

  .d5{
    top: 90px;
    left: 290px;
  }

  .d6{
    top: 110px;
    left: 350px;
  }
  .d7{
    top: 110px;
    left: 400px;
  }
  .d8{
    top: 110px;
    left: 450px;
  }
  .d9{
    top: 110px;
    left: 500px;
  }
  .d10{
    top: 110px;
    left: 550px;
  }
  .d11{
    top: 110px;
    left: 550px;
  }
  .d12{
    top: 110px;
    left: 600px;
  }
  .d13{
    top: 110px;
    left: 650px;
  }
  .d14{
    top: 110px;
    left: 700px;
  }
  .d15{
    top: 110px;
    left: 750px;
  }
  .d16{
    top: 110px;
    left: 800px;
  }
  .d17{
    top: 110px;
    left: 850px;
  }
  .d18{
    top: 110px;
    left: 900px;
  }

  .d19{
    top: 110px;
    left: 950px;
  }

  .d20{
    top: 110px;
    left: 1000px;
  }
  .d21{
    top: 110px;
    left: 1050px;
  }
  .d22{
    top: 110px;
    left: 1100px;
  }
  .d23{
    top: 110px;
    left: 1150px;
  }
  .d24{
    top: 130px;
    left: 1200px;
  }
  .d25{
    top: 150px;
    left: 1250px;
  }
  .d26{
    top: 180px;
    left: 1300px;
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