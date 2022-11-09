<template>
  <div>
    <topMenu></topMenu>
    <div class='container'>
      <div class="s1 session">
        <!-- <div class="s1-1 border"></div>
      <div class="s1-2 border"></div> -->
        <analyzeChartCom></analyzeChartCom>
      </div>
      <div class="s2 session">
        <!-- 报表部分 -->
        <dv-border-box-10>
          <titleBar :title="'数据报表'"></titleBar>
          <!-- 标题 -->
          <div class="con title" style="height:5%;">
            <span>龙首矿区数据报表</span>
          </div>
          <!-- 上方图表文字 -->
          <div class="con reportTop" style="height:30%;">
            <div>
              <h6>近期巡检______次</h6>
              <h6>发现异常______次</h6>
              <h6>已处理异常______次</h6>
            </div>
            <div>

            </div>
          </div>
          <!-- 中间展示区域 -->
          <div class="con reportMiddle" style="height:50%;"></div>
          <!-- 下方落款 -->
          <div class="con inscribe" style="height:25%;"></div>
        </dv-border-box-10>
      </div>
    </div>
  </div>
</template>

<script>
import analyzeChartCom from './charts/chartCom.vue'
export default {
  name: '',
  data() {
    return {

    }
  },
  props: {
  },
  components: {
    analyzeChartCom
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
  border: 1px solid red;
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
  height: 100%;

  .con {
    height: 16%;
  }

  span {
    color: #ffffff;
  }

  .title {
    font-size: 20px;
    text-align: center;
    padding-top: 4px;
  }


}
</style>