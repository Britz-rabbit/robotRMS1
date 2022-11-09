<template>
  <div>
      <topMenu></topMenu>
      <div class="container">
        <dv-border-box-10>
          <!-- 上方筛选框 -->
          <div class="bar ">
            <el-button type="success" size="mini" @click="changeData('all')">全部设备</el-button>
            <el-badge :value="sensorDangerNum" class="item">
              <el-button type="danger" size="mini" @click="changeData('danger')">异常设备</el-button>
            </el-badge>
            <el-button type="warning" size="mini">一键确认</el-button>
          </div>
          <!-- 列表，作为组件需要将数据传入 -->
          <list :data="robotTableDate"></list>
        </dv-border-box-10>
      </div>

  </div>

</template>

<script>
import list from './components/list.vue'
export default {
  name: '',
  data() {
    return {
      //tabs的激活页占位符
      activeName: 'first',
      //传感器的数据的占位符
      robotTableDate: [],
      //当前的传感器异常且未确认的数量数量
      sensorDangerNum: 0
    }
  },
  props: {
  },
  components: {
    list
  },
  computed: {

  },
  mounted() {
    this.changeData('all')
  },
  methods: {
    //对多选按钮的回调处理
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    //点击改变列表数据的回调
    changeData(type) {
      switch (type) {
        case 'all':
          //alert('显示全部数据')
          this.robotTableDate = this.$store.state.sensorInfo
          this.sensorDangerNum = this.$store.state.sensorInfo.filter((item) => !item.isConfirm).length
          break;
        case 'danger':
          //alert('仅显示异常数据')
          this.robotTableDate = this.$store.state.sensorInfo.filter((item) => item.isDanger)
          this.sensorDangerNum = this.$store.state.sensorInfo.filter((item) => !item.isConfirm).length
          break;
        default:
          break;
      }
    },
  },
  watch: {

  }
}
</script>

<style lang='less' scoped>
@import "@/assets/css/common.css";

.border {
  border: 1px solid red;
}

span {
  color: #ffffff;
}

.con {
  width: 100%;
  border: 1px solid red;
}

.bar {
  width: 100%;
  height: 5vh;
  margin: 1.6vh;
  display: flex;
  // justify-content: center;
  align-items: center;

  .el-button {
    margin-left: 1.2vw;
    height: 38px;
    font-size: 18px;
  }
}
</style>