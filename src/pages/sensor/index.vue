<template>
  <dv-full-screen-container ref="appRef">
    <topMenu></topMenu>
    <div class="container">
      <dv-border-box-10>
        <!-- 上方筛选框 -->
        <div class="bar" style="position:relative;">
          <el-button type="success" size="mini" @click="changeData('all')">全部设备</el-button>
          <el-badge :value="sensorDangerNum" class="item">
            <el-button type="danger" size="mini" @click="changeData('danger')">异常设备</el-button>
          </el-badge>
          
          <!-- 时间选择器 -->
          <div  v-show="!current_historyFlag" style="position: relative;left: 40px;" class="">
            <el-date-picker v-model="dateValue" type="daterange" align="right" value-format="timestamp" unlink-panels
              range-separator="至" start-placeholder="查询起始" end-placeholder="查询终止" :picker-options="pickerOptions">
            </el-date-picker>
          </div>

        </div>
        <!-- 列表，作为组件需要将数据传入 -->
        <list v-show="current_historyFlag" :data="robotTableDate"></list>
        <list v-show="!current_historyFlag" :data="robotTableDate"></list>
        <div  v-show="!current_historyFlag" class="" style="display: flex;justify-content: flex-end;margin-right: 26px;">
          <el-pagination @current-change="changePage" background :current-page.sync="currentPage3" :page-size="100"
            layout="prev, pager, next" :total="1000">
          </el-pagination>
        </div>

      </dv-border-box-10>
    </div>
  </dv-full-screen-container>


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
      sensorDangerNum: 0,
      //历史查询与实时数据的标识符，默认显示实时数据
      current_historyFlag: false,
      //与服务器交互的查询日期，以时间戳形式
      dateValue: '',
      //日期选择器的快速选择选项
      pickerOptions: {
        shortcuts: [{
          text: '近一周数据',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '近一月数据',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最半年数据',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 180);
            picker.$emit('pick', [start, end]);
          }
        }]
      },
      //分页器的当前页面
      currentPage: 1,
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
         
          //this.current_historyFlag=true
          this.robotTableDate = this.$store.state.sensorInfo
          this.sensorDangerNum = this.$store.state.sensorInfo.filter((item) => !item.isConfirm).length
          break;
        case 'danger':
         
          //this.current_historyFlag=true
          this.robotTableDate = this.$store.state.sensorInfo.filter((item) => item.isDanger)
          this.sensorDangerNum = this.$store.state.sensorInfo.filter((item) => !item.isConfirm).length
          break;
        default:
          break;
      }
    },
    //更改页面
    changePage() {

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
  //position: relative;
}

span {
  color: #ffffff;
}

.con {
  width: 100%;
  border: 1px solid red;
}

#dv-full-screen-container {
  background: url('@/assets/img/BG.png');
  background-size: cover;
  //border: 1px solid red;
}

//时间选择器的样式
// .el-date-editor--daterange.el-input,
// .el-date-editor--daterange.el-input__inner,
// .el-date-editor--timerange.el-input,
// .el-date-editor--timerange.el-input__inner{
//   background-color: rgba(38, 118, 172, 0.3) ;
 
// }

.bar {
  width: 100%;
  height: 5vh;
  margin: 1vh;
  padding-top: 2vh;
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