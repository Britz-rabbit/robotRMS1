<template>
  <div class='container'>
    <!-- 左侧区域 -->
    <div class="left" style="width:50%;height:100%;">
      <el-card class="box-card" shadow="hover"
        style="background-color: transparent;color:#ffffff;height: 56vh;border-color: #00BEFA;">
        <div slot="header" class="clearfix">
          <span>多功能检测</span>
          <el-button style="float: right; padding: 3px 0" type="primary">操作按钮</el-button>
        </div>
        <div v-for="o in 4" :key="o" class="text item">
          {{ '列表内容 ' + o }}
        </div>
        <el-select v-model="chosedAlgo" placeholder="算法管理">
          <el-option v-for="item in algoList" :key="item.value" :label="item.label" :value="item.value" :disabled="item.disabled">
          </el-option>
        </el-select>

      </el-card>
    </div>
    <!-- 右侧区域 -->
    <div class="right" style="width:50%;height:100%;">

    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      //可选的算法
      algoList: [{
        value: '选项1',
        label: '算法1',
        
      }, {
        value: '选项2',
        label: '算法2',
        disabled:true
      }, {
        value: '选项3',
        label: '算法3',
        disabled:true
      }, {
        value: '选项4',
        label: '算法4',
        disabled:true
      }, {
        value: '选项5',
        label: '算法5',
        disabled:true
      }],
      //当前选中的算法
      chosedAlgo:''
    }
  },
  props: {
  },
  components: {

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
.container {
  width: 100%;
  height: 100%;

}
</style>