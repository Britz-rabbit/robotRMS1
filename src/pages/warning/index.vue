<template>
  <dv-full-screen-container ref="appRef">
    <topMenu></topMenu>
    <div class="container">
      <div class="s1 session"></div>
      <div class="s2 session">
        <!-- 子路由展示区域 -->
        <div class="s2-1 session">
          <dv-border-box-7 style="width:100%;height:100%">
            <router-view></router-view>
          </dv-border-box-7>
        </div>
        <!-- 右侧内容填充，该图标太占用性能，需要优化 -->
        <div class="s2-2 session">
          <div style="margin-left: 1vw;position: relative;">
            <warningRadar></warningRadar>
          </div>
        </div>
      </div>
      <div class="s3 session">
        <!-- 路由按钮 -->
        <div class="s3-1 session">
          <div class="flex btnCon">
            <div class="btn" v-for="(item, index) in routeList" @click="changeRoute(item)">
              <span>{{ item.title }}</span>
            </div>
          </div>
        </div>
        <!-- 轮播图 -->
        <div class="s3-2 session">
          <div class="">
            <div class="block">
              <el-carousel height="30vh" type="card">
                <el-carousel-item v-for="(item, index) in imgList" :key="item">
                  <img :src="item" style="width: 100%; height: 100%" @click="showDialog(item)" />
                </el-carousel-item>
              </el-carousel>
            </div>
          </div>
        </div>
        <!-- 对话框 -->
        <el-dialog title="查看详细图" :modal="false" center :visible.sync="dialogVisible" width="50%">
          <img :src="choseImg" alt="" style="width: 100%;height:100%;">
        </el-dialog>
      </div>
    </div>
  </dv-full-screen-container>

</template>

<script>
import warningRadar from './charts/warningRadar.vue'
export default {
  name: "",
  data() {
    return {
      //路由切换信息
      routeList: [
        { title: "多功能及撕裂", path: "/warning/multifunction" },
        { title: "机器人报警检测", path: "/warning/robot" },
        { title: "廊道设施设备", path: "/warning/gallery" },
      ],
      //报警抓拍列表
      imgList: ["", ""],
      //是否打开对话框的标识符
      dialogVisible: false,
      //选中查看的大图路径
      choseImg: ''
    };
  },
  props: {},
  components: {
    warningRadar,
  },
  watch: {
    //使用watch 监听$router的变化
    $route(to, from) {
      //如果to索引大于from索引,判断为前进状态,反之则为后退状态
      if (to.meta.index > from.meta.index) {
        //设置动画名称
        this.transitionName = "slide-left";
      } else {
        this.transitionName = "slide-right";
      }
    },
  },
  computed: {},
  beforeMount() {
    this.imgList[0] = require("../../assets/img/home/video1.jpeg");
    this.imgList[1] = require("../../assets/img/home/video2.jpeg");
    this.imgList[2] = require("../../assets/img/wrong.jpeg");
  },
  mounted() {
    this.$router.push("/warning/multifunction");
  },
  methods: {
    changeRoute(item) {
      //console.log(item);
      if (item.path === this.$route.fullPath) return;
      this.$router.push(item.path);
    },
    showDialog(src) {
      console.log(src);
      this.dialogVisible = true
      this.choseImg = src
    }
  },
};
</script>

<style lang='less' scoped >
@import "@/assets/css/common.css";

.border {
  border: 1px solid red;
}

#dv-full-screen-container{
  background: url('@/assets/img/BG.png');
  background-size: cover;
  //border: 1px solid red;
}

.session {
  width: 100%;
  //border: 1px solid yellow;
}

.con {
  width: 100%;
}

span {
  color: #ffffff;
}

.s1 {
  width: 100%;
  height: 2%;
}

.s2 {
  width: 100%;
  height: 60%;
  display: flex;

  .s2-1 {
    height: 100%;
    width: 50%;
  }

  .s2-2 {
    height: 100%;
    width: 50%;
  }
}

.s3 {
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: space-around;
  margin-top: 2vh;

  .s3-1 {
    height: 100%;
    width: 50%;

    .btnCon {
      width: 100%;
      height: 50%;
      margin-top: 10%;
      display: flex;
      justify-content: space-around;
      //align-items: center;

      .btn {
        height: 16vh;
        width: 16vh;
        border: 1px solid #fff;
        border-radius: 50%;
        transition: all 0.3s linear;
        display: flex;
        justify-content: center;
        align-items: center;
        background: url('@/assets/img/warning/icon@3x.png') no-repeat;
        background-size: cover;

        &:hover {
          cursor: pointer;
          height: 18vh;
          width: 18vh;
        }

        span {
          line-height: 4vh;
          font-size: 20px;
          color: #ffffff;
          //white-space: nowrap;
          text-align: center;
        }

      }
    }
  }

  .s3-2 {
    height: 100%;
    width: 50%;
  }
}
</style>