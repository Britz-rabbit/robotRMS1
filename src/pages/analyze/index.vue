<template>
  <div class='container'>
    <div class="s1 session">
      <!-- <div class="s1-1 border"></div>
      <div class="s1-2 border"></div> -->
      <analyzeChartCom></analyzeChartCom>
    </div>
    <div class="s2 session">
      <dv-border-box-10>
        <titleBar :title="'数据报表'"></titleBar>
        <div class="con"></div>
        <div class="con"></div>
        <div class="con"></div>
        <div class="con"></div>
        <div class="con"></div>
        <div class="con"></div>
        <div class="con"></div>
        <div class="con"></div>
      </dv-border-box-10>
    </div>
  </div>
</template>

<script>
import analyzeChartCom from './charts/chartCom.vue'
export default {
  name: '',
  data () {
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
.container{
  width: 100%;
  height: 96%;
  margin-top: 2%;
}
.border{
  border: 1px solid red;
}

// .session{
//   border: 1px solid yellow;
// }
.con{
  width: 100%;
  border: 1px solid red;
}
.s1{
  width: 60%;
  height: 100%;
  .s1-1{
    width: 100%;
    height: 50%;
  }

  .s1-2{
    width: 100%;
    height: 50%;
  }
}

.s2{
  width: 40%;
  height: 100%;
  .con{
    height: 16%;
  }
}
</style>