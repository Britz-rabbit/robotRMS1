<template>
  <dv-full-screen-container ref="appRef">
    <topMenu></topMenu>
    <div class='container flex '>
      <div class="s1 session">
        <analyzeChartCom></analyzeChartCom>
      </div>
      <div class="s2 session " >
        <!-- 报表部分 -->
        <dv-border-box-7>
          <!-- 标题 -->
          <div class="con title" style="height:5%;">
            <!-- <span>龙首矿区数据报表</span> -->
          </div>
          <!-- 上方图表文字 -->
          <div class="con reportTop" style="height:30%;">
            <div class="">
              <span>近 期 总 巡 检<span class="success" style="margin:0px;padding:0px;font-size:36px">&nbsp;1000&nbsp;</span>次</span>
              <span>其 中 发 现 异 常<span class="success" style="margin:0px;padding:0px;font-size:36px">&nbsp;50&nbsp;</span>次</span>
              <span>已 处 理 异 常<span class="success" style="margin:0px;padding:0px;font-size:36px">&nbsp;50&nbsp;</span>次</span>
            </div>
            <div class="">
              <analyzeRadar></analyzeRadar>
            </div>
          </div>
          <!-- 中间展示区域 -->
          <div class="con reportMiddle" style="height:50%;width: 94%;margin: 0 auto;">
            <div class="item">
              <div class="icon">
              <img src="@/assets/img/analyze/robot.png" style="width: 100%;height:100%">
              </div>
              <div></div>
            </div>
            <div class="item">
              <div class="icon">
                <img src="@/assets/img/analyze/device.png" style="width: 100%;height:100%">
              </div>
              <div></div>
            </div>
            <div class="item">
              <div class="icon">
                <img src="@/assets/img/analyze/sensor.png" style="width: 100%;height:100%">
              </div>
              <div></div>
            </div>
          </div>
          <!-- 下方落款 -->
          <div class="con inscribe " style="height:13%;">
            <div class="insLeft ">
              <el-button type="success">保存</el-button>
              <!-- 保存按钮 -->
              <div class="save"></div>
            </div>
            <div class="insRight ">
              <div class="">
                <span>打印日期：<span class="success">2022-11-02</span></span>
                <span>工区地点：<span class="success">提升工区西2区</span></span>
              </div>
              <div class="">
                <span class="">签字 ：</span>
              </div>
            </div>
          </div>
        </dv-border-box-7>
      </div>
    </div>

  </dv-full-screen-container>

</template>

<script>
import analyzeChartCom from './charts/chartCom.vue'
import analyzeRadar from './charts/analyzeRadar.vue';
export default {
  name: '',
  data() {
    return {

    }
  },
  props: {
  },
  components: {
    analyzeChartCom, analyzeRadar
  },
  computed: {

  },
  mounted() {

  },
  methods: {

  },
}
</script>

<style lang='less' scoped >
@import "@/assets/css/common.css";

.border {
  border: 1px solid red;
}

.con {
  width: 100%;
  //border: 1px solid red;
}

#dv-full-screen-container{
  background: url('@/assets/img/BG.png');
  background-size: cover;
  //border: 1px solid red;
}

.s1 {
  width: 60%;
  height: 100%;

  .s1-1 {
    width: 100%;
    height: 50%;
  }

  .s1-2 {
    width: 100%;
    height: 50%;
  }
}

.s2 {
  width: 40%;
  height: 98%;
  // background-color: #00296B96;
  background-color: #00296B60;
  .con {
    height: 16%;
  }

  span {
    color: #ffffff;
  }

  .title {
    font-size: 22px;
    text-align: center;
    padding-top: 4px;
  }

  //上方文字报表
  .reportTop {
    display: flex;
    align-items: center;
    .success{
        color: #2cb395;
      }

    div:first-of-type {
      height: 60%;
      width: 40%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      span {
        width: 100%;
        height: 20%;
        padding-left: 40px;
        text-align: start;
        font-size: 24px;
        font-weight: 100;
      }
    }

    div:last-of-type {
      height: 100%;
      width: 60%;
    }



  }

  //中间三个框
  .reportMiddle {
    display: flex;
    justify-content: space-around;
    padding-top: 14px;

    .item {
      width: 30%;
      height: 100%;
      border: 1px solid red;
      background-color: #00296B70;

      .icon {
        margin: 0 auto;
        margin-top: 10px;
        width: 80px;
        height: 80px;
        
      }

    }
  }

  //下方落款
  .inscribe {
    display: flex;

    .el-button {
      width: 80px;
      border-radius: 9px;
      font-size: 20px;
    }

    .insLeft {
      width: 15%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .insRight {
      width: 70%;
      height: 80%;
      display: flex;
     
      div:first-of-type {
        width: 48%;
        height: 100%;
        margin-left: 5%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .success{
        color: #2cb395;
      }

        span {
          color: #ffffff;
          font-size: 20px;
        }

      }

      div:last-of-type {
        width: 52%;
        height: 100%;
        display: flex;
        align-items: center;

        span {
          font-size: 26px;
          margin-left: 32px;
        }
      }


    }
  }
}
</style>