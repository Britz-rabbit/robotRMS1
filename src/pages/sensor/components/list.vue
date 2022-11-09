<template>
  <div class=''>
     <!-- 机器人传感列表数据 -->
     <div class="listCon" style="width: 100%;margin:0 auto;height: 88vh;margin-bottom: 2vh;">
        <el-table :data="data" height="96%" highlight-current-row @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="80">
          </el-table-column>
          <el-table-column type="index" label="序号" width="80"> </el-table-column>
          <el-table-column prop="name" label="传感器名称"> </el-table-column>
          <el-table-column prop="position" label="传感位置"> </el-table-column>
          <el-table-column prop="value" label="传感数值">
          </el-table-column>
          <el-table-column prop="isDanger" label="传感器状态">
            <template slot-scope="scope">
              <el-tag v-if="scope.row.isDanger" type="danger">异常</el-tag>
              <el-tag v-else type="success">正常</el-tag>
            </template>
          </el-table-column>
          <el-table-column prop="isConfirm" label="确认状态">
            <template slot-scope="scope">
              <el-switch v-model="scope.row.isConfirm" :disabled="!scope.row.isDanger" active-color="#13ce66" inactive-color="#ff4949">
              </el-switch>
            </template>
          </el-table-column>
          <el-table-column label="详细信息">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="primary" size="small">查看
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      
    }
  },
  props: {
    data:{
        type:Array,
        require:true
    }
  },
  components: {

  },
  computed: {

  },
  mounted() {

  },
  methods: {
    //处理多选选中
    handleSelectionChange(val){
        console.log(val);
    }
  },
}
</script>

<style lang='less'>
//表底部的边框
.el-table td.el-table__cell,
.el-table th.el-table__cell.is-leaf {
  border-bottom: 2px dotted rgb(114, 110, 110);
}

.el-table {
  //color: #4EACE7;
  color: #ffffff;
  background-color: transparent !important;
  //font-size: 14px;

  .cell {
    color: aliceblue;
    font-size: 17px;
  }

  //表行
  tr {
    background-color: #34E0D110 !important;
  }

  //选中行
  .current-row {
    background-color: rgba(120, 178, 218, 0.3) !important;
  }

  //鼠标触发行
  .hover-row {
    background-color: pink !important;
  }

  // 表头
  th {
    background-color: transparent !important;
  }

  //表格列
  td {
    background-color: transparent !important;
  }
}
</style>