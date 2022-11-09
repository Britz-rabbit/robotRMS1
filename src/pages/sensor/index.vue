<template>
  <div class="container">
    <div class="session s1">
      <div class="s1-1 ">
        <div style="width: 96%; margin: 0 auto">
          <titleBar :title="'传感系统1'"></titleBar>
          <!-- 左侧环图 -->
          <dv-active-ring-chart :config="ringLeft" style="width:16vw;height:16vw;margin-top: -4vh;" />
        </div>
      </div>
      <div class="s1-2">
        <!-- 列表1 -->
        <div class="listCon" style="width: 96%;margin:0 auto;height: 100%;">
          <el-table :data="tableData1" height="96%" highlight-current-row>
            <el-table-column type="index" label="序号"> </el-table-column>
            <el-table-column prop="date" label="日期"> </el-table-column>
            <el-table-column prop="position" label="位置"> </el-table-column>
            <el-table-column prop="pm1" label="PM1" sortable> </el-table-column>
            <el-table-column prop="pm2_5" label="PM2.5" sortable> </el-table-column>
            <el-table-column prop="pm10" label="PM10" sortable> </el-table-column>
            <el-table-column prop="tem" label="温度" sortable> </el-table-column>
            <el-table-column prop="hum" label="湿度" sortable> </el-table-column>
            <el-table-column prop="voice" label="异响"> </el-table-column>
          </el-table>
        </div>

      </div>
    </div>
    <div class="session s2">
      <div class="s2-1 ">
        <div style="width: 96%; margin: 0 auto;">
          <titleBar :title="'传感系统2'"></titleBar>
          <sensorLine></sensorLine>
        </div>
      </div>
      <div class="s2-2">
        <!-- 列表2 -->
        <div class="listCon" style="width: 96%;margin:0 auto;height: 100%;">
          <el-table :data="tableData2" height="96%" highlight-current-row>
            <el-table-column type="index" label="序号"> </el-table-column>
            <el-table-column prop="date" label="日期"> </el-table-column>
            <el-table-column prop="position" label="位置"> </el-table-column>
            <el-table-column prop="tem" label="温度" sortable> </el-table-column>
            <el-table-column prop="x_axi" label="X轴" sortable> </el-table-column>
            <el-table-column prop="y_axi" label="Y轴" sortable> </el-table-column>
            <el-table-column prop="z_axi" label="Z轴" sortable> </el-table-column>
          </el-table>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import sensorLine from './charts/sensorLine1.vue'
export default {
  name: "",
  data() {
    return {
      //表格1的数据
      tableData1: [
        {
          date: "05-02",
          position: 151,
          pm1: 164,
          pm2_5: 134,
          pm10: 110,
          tem: 66,
          hum: 35,
          voice: 4,
        },
        {
          date: "05-02",
          position: 151,
          pm1: 124,
          pm2_5: 134,
          pm10: 110,
          tem: 66,
          hum: 35,
          voice: 4,
        },
        {
          date: "05-02",
          position: 151,
          pm1: 98,
          pm2_5: 134,
          pm10: 110,
          tem: 66,
          hum: 35,
          voice: 4,
        },
        {
          date: "05-02",
          position: 151,
          pm1: 134,
          pm2_5: 134,
          pm10: 110,
          tem: 66,
          hum: 35,
          voice: 4,
        },
        {
          date: "05-02",
          position: 151,
          pm1: 164,
          pm2_5: 134,
          pm10: 110,
          tem: 66,
          hum: 35,
          voice: 4,
        },
        {
          date: "05-02",
          position: 151,
          pm1: 164,
          pm2_5: 134,
          pm10: 110,
          tem: 66,
          hum: 35,
          voice: 4,
        },
        {
          date: "05-02",
          position: 151,
          pm1: 164,
          pm2_5: 134,
          pm10: 110,
          tem: 66,
          hum: 35,
          voice: 4,
        },
        {
          date: "05-02",
          position: 151,
          pm1: 164,
          pm2_5: 134,
          pm10: 110,
          tem: 66,
          hum: 35,
          voice: 4,
        },
        {
          date: "05-02",
          position: 151,
          pm1: 164,
          pm2_5: 134,
          pm10: 110,
          tem: 66,
          hum: 35,
          voice: 4,
        },
        {
          date: "05-02",
          position: 151,
          pm1: 164,
          pm2_5: 134,
          pm10: 110,
          tem: 66,
          hum: 35,
          voice: 4,
        },
        {
          date: "05-02",
          position: 151,
          pm1: 164,
          pm2_5: 134,
          pm10: 110,
          tem: 66,
          hum: 35,
          voice: 4,
        },
        {
          date: "05-02",
          position: 151,
          pm1: 164,
          pm2_5: 134,
          pm10: 110,
          tem: 66,
          hum: 35,
          voice: 4,
        },
        {
          date: "05-02",
          position: 151,
          pm1: 164,
          pm2_5: 134,
          pm10: 110,
          tem: 66,
          hum: 35,
          voice: 4,
        },
        {
          date: "05-02",
          position: 151,
          pm1: 164,
          pm2_5: 134,
          pm10: 110,
          tem: 66,
          hum: 35,
          voice: 4,
        },
        {
          date: "05-02",
          position: 151,
          pm1: 164,
          pm2_5: 134,
          pm10: 110,
          tem: 66,
          hum: 35,
          voice: 4,
        },
        {
          date: "05-02",
          position: 151,
          pm1: 164,
          pm2_5: 134,
          pm10: 110,
          tem: 66,
          hum: 35,
          voice: 4,
        },
      ],
      tableData2: [
        {
          date: "05-02",
          position: "153",
          tem: 66,
          x_axi: 126,
          y_axi: 96,
          z_axi: 36,
        },
        {
          date: "05-02",
          position: "153",
          tem: 66,
          x_axi: 126,
          y_axi: 96,
          z_axi: 36,
        }, {
          date: "05-02",
          position: "153",
          tem: 66,
          x_axi: 126,
          y_axi: 96,
          z_axi: 36,
        }, {
          date: "05-02",
          position: "153",
          tem: 66,
          x_axi: 126,
          y_axi: 96,
          z_axi: 36,
        }, {
          date: "05-02",
          position: "153",
          tem: 66,
          x_axi: 126,
          y_axi: 96,
          z_axi: 36,
        }, {
          date: "05-02",
          position: "153",
          tem: 66,
          x_axi: 126,
          y_axi: 96,
          z_axi: 36,
        },
        {
          date: "05-02",
          position: "153",
          tem: 66,
          x_axi: 126,
          y_axi: 96,
          z_axi: 36,
        },
        {
          date: "05-02",
          position: "153",
          tem: 66,
          x_axi: 126,
          y_axi: 96,
          z_axi: 36,
        },
        {
          date: "05-02",
          position: "153",
          tem: 66,
          x_axi: 126,
          y_axi: 96,
          z_axi: 36,
        },
        {
          date: "05-02",
          position: "153",
          tem: 66,
          x_axi: 126,
          y_axi: 96,
          z_axi: 36,
        },
        {
          date: "05-02",
          position: "153",
          tem: 66,
          x_axi: 126,
          y_axi: 96,
          z_axi: 36,
        },
        {
          date: "05-02",
          position: "153",
          tem: 66,
          x_axi: 126,
          y_axi: 96,
          z_axi: 36,
        },
        {
          date: "05-02",
          position: "153",
          tem: 66,
          x_axi: 126,
          y_axi: 96,
          z_axi: 36,
        },
        {
          date: "05-02",
          position: "153",
          tem: 66,
          x_axi: 126,
          y_axi: 96,
          z_axi: 36,
        },
        {
          date: "05-02",
          position: "153",
          tem: 66,
          x_axi: 126,
          y_axi: 96,
          z_axi: 36,
        },
        {
          date: "05-02",
          position: "153",
          tem: 66,
          x_axi: 126,
          y_axi: 96,
          z_axi: 36,
        },
        {
          date: "05-02",
          position: "153",
          tem: 66,
          x_axi: 126,
          y_axi: 96,
          z_axi: 36,
        },
      ],
      //左侧环图的配置项
      ringLeft: {
        data: [
          {
            name: '传感器1',
            value: 55
          },
          {
            name: '传感器2',
            value: 120
          },
          {
            name: '传感器3',
            value: 78
          },
          {
            name: '传感器4',
            value: 66
          },
          {
            name: '传感器5',
            value: 80
          }
        ],
        showOriginValue: true
      }
    };
  },
  props: {},
  components: {
    sensorLine
  },
  computed: {},
  mounted() { },
  methods: {},
};
</script>

<style lang='less' scoped>
.container {
  width: 100%;
  height: 100%;
}

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

.s1 {
  width: 50%;
  height: 98%;
  margin-top: 2%;

  .s1-1 {
    height: 30%;
    width: 100%;
  }

  .s1-2 {
    height: 70%;
    width: 100%;
    //border-top: 1px solid #EBEEF5;
  }
}

.s2 {
  width: 50%;
  height: 98%;
  margin-top: 2%;

  .s2-1 {
    height: 30%;
    width: 100%;
  }

  .s2-2 {
    height: 70%;
    width: 100%;
    //border-top: 1px solid #EBEEF5;
  }
}

.el-table {
  color: #4eace7;
  background-color: transparent !important;

  //表行
  tr {
    background-color: #34e0d110 !important;
  }

  //选中行
  .current-row {
    background-color: rgba(120, 178, 218, 0.3) !important;
  }

  //鼠标触发行
  .hover-row {
    background-color: #4eace720 !important;
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