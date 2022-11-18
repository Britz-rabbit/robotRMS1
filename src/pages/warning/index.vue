<template>
  <div class=''>
    <dv-full-screen-container ref="appRef">
      <topMenu></topMenu>
      <div class="container">

        <!-- 上方区域 -->
        <div class="topBox " style="width:100%;height:70%;display: flex;">
          <!-- 料量 -->
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
          <!--  -->
          <div class="gallary" style="height:100%;width:70%">
            <dv-border-box-2>

              <img :src="imgSrc" alt="" srcset="">
            </dv-border-box-2>
          </div>

        </div>

        <!-- 下方区域-->
        <div class="bottomBox" style="width:100%;height:30%">

          <!-- 左侧皮带廊 -->
          <div class="border" style="height: 100%;width: 70%;">
          <dv-border-box-7>
            <!-- 撕裂及多功能设备示意点 -->

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
      
    }
  },
  props: {
  },
  components: {
    galleryVue, multifunctionVue, warningLine2Vue
  },
  computed: {

  },
  beforeMount() {

  },
  mounted() {

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

  //左侧
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

  //右侧



}

.bottomBox {
  display: flex;

}
</style>