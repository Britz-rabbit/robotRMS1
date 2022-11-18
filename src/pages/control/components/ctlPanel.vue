<template>
    <div class='ctlPanelCon'>
        <!-- 图标矩阵，图取自element UI -->
        <div class="iconRect">
            <div v-for="(item, index) in iconList" class="iconCon ani1" @mouseenter="addAni" @mouseleave="removeAni"
                @click="contrlBack(index)">
                <i :class="item.icon"></i>
                <span>{{ item.title }}</span>
            </div>
        </div>
        <!-- 按钮操控栏 -->

    </div>
</template>

<script>
import axios from 'axios'
import Html2canvas from 'html2canvas'
export default {
    name: '',
    data() {
        return {
            iconList: [
                { icon: 'iconfont icon-back', title: '全程巡航' },
                { icon: 'iconfont icon-chongdian', title: '回程充电' },
                { icon: 'iconfont icon-xiala', title: '语音播报' },
                { icon: 'iconfont icon-dengguang', title: '补光灯关' },
                { icon: 'iconfont icon-zhongzhi-', title: '故障复位' },
                { icon: 'iconfont icon-dengpao', title: '补光灯开' },
                { icon: 'iconfont icon-jiaoju', title: '焦距回零' },
                { icon: 'iconfont icon-jujiao', title: '自动聚焦' },
                { icon: 'iconfont icon-jietu', title: '快速截图' },
            ]
        }
    },
    props: {
        num: {
            type: Number,
            default: 9
        }
    },
    components: {

    },
    computed: {

    },
    beforeCreate() {


    },
    mounted() {

    },
    methods: {
        //鼠标进入添加动画类名
        addAni(e) {
            e.currentTarget.className = 'iconCon ani2'
        },
        //鼠标离开移除动画类名
        removeAni(e) {
            e.currentTarget.className = 'iconCon ani1'
        },


        //功能图标的点击回调，根据传入的index判断，可用switch语句改写
        contrlBack(idx) {
            console.log(`触发了功能图标${idx + 1}号`);
            // if (idx === 8) {
            //     this.screenImg()
            // }
            // const requests = axios.create({
            //     baseURL: 'http://192.168.2.228:5000/',
            //     timeout: 5000,
            // })
            // requests.defaults.headers["Content-Type"] = "application/x-www-form-urlencoded;charset=UTF-8";

            // // let para = JSON.stringify({ "userid": 0, "username": "admin", "password": "qwe123", "usertype": 0 })
            // let para = JSON.stringify({ "username": "admin", "password": "qwe123" })
            // console.log(para);
            // requests.post('token','username=1&password=1')
            //     .then(function (response) {
            //         // 处理成功情况
            //         console.log(response);
            //     })
            //     .catch(function (error) {
            //         // 处理错误情况
            //         console.log(error);
            //     })
            //     .then(function () {
            //         // 总是会执行
            //     });

            const requests = axios.create({
                baseURL: 'http://192.168.2.91:4050',
                timeout: 5000,
            })
            //requests.defaults.headers["Content-Type"] = "application/x-www-form-urlencoded;charset=UTF-8";

            let para = JSON.stringify({ "OrderID": idx })
            // let para = JSON.stringify({Name:1,no:1 })            
            console.log(para);
            requests.post('/MyServices/MyTestService/Jweb/AddOrder?jsoncallback=?', para)
                .then(function (response) {
                    // 处理成功情况
                    console.log(response);
                })
                .catch(function (error) {
                    // 处理错误情况
                    console.log(error);
                })
                .then(function () {
                    // 总是会执行
                });
        },
        controlL(type) {
            console.log(`触发了左侧的${type}控制按钮回调`);
        },
        controlR(type) {
            console.log(`触发了右侧的${type}控制按钮回调`);
        },
        //截图的回调
        // screenImg() {
        //     // 渲染图片
        //     function Render(src, width, height, cb) {
        //         const img = new Image();
        //         img.src = src;
        //         img.width = width;
        //         img.height = height;
        //         img.crossOrigin = ""; // 图像跨域时配置
        //         cb && cb(img);
        //     }

        //     // 下载图片
        //     function Download(url, name) {
        //         const target = document.createElement("a");
        //         target.href = url;
        //         target.download = name;
        //         const event = document.createEvent("MouseEvents");
        //         event.initEvent("click", true, true);
        //         target.dispatchEvent(event);
        //     }

        //     //使用html2canvans来保存图片
        //     const screenImg=document.getElementById("controlVideo")
        //     Html2canvas(screenImg, {
        //         logging: false,
        //         scale: 1,
        //         useCORS: true,
        //         width:screenImg.clientWidth,
        //         height: screenImg.clientHeight,
        //         scrollY: 0,
        //         scrollX: 0,
        //     }).then(res => {
        //         const { height, width } = res;
        //         const base64 = res.toDataURL("image/png", 1);
        //         Render(base64, width, height, img => {
        //             document.body.appendChild(img);
        //             Download(base64, "快速截图.png");
        //         });
        //     }, err => alert("截图失败，请重新尝试"));

        //     // Html2canvas(document.querySelector("#controlVideo")).then(canvas => {
        //     //     document.body.appendChild(canvas)
        //     // });
        // }
    },

}
</script>

<style lang='less' scoped>
.flex {
    display: flex;
}

// 组件容器
.ctlPanelCon {
    width: 100%;
    height: 100%;
    min-width: 240px;
    box-sizing: border-box;
    background-color: transparent;
    display: flex;
    flex-direction: column;
}

//上方图标矩阵区域
.iconRect {
    display: flex;
    width: 80%;
    height: 90%;
    flex-wrap: wrap;
    margin: auto;
}

.iconCon {
    display: flex;
    background-color: #27519D;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 30%;
    height: 30%;
    border: 2px solid #1C8AD2;
    border-radius: 8px;
    box-sizing: border-box;
    margin: 0.2vw;
    color: #4FABFD;

    i {
        text-align: center;
        font-size: 36px;
        //color: rgb(8, 61, 50);
        margin-top: 8px;
    }

    span {
        font-size: 22px;
    }

    &:hover {
        cursor: pointer;
    }

    &:active {
        color: rgb(16, 209, 209);

        i {
            color: rgb(16, 209, 209);
        }
    }

}

//图标的移入动画效果
.ani1 {
    position: relative;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border: 2px solid #f8f8f8;
        border-radius: 8px;
        animation: clippath 5s infinite linear;
    }
}

.ani2 {
    position: relative;
    transform: scale(1.06);

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border: 4px solid #f8f8f8;
        border-radius: 8px;
        animation: clippath 5s infinite linear;
    }
}

@keyframes clippath {

    0%,
    100% {
        clip-path: inset(0 0 95% 0);
    }

    25% {
        clip-path: inset(0 95% 0 0);
    }

    50% {
        clip-path: inset(95% 0 0 0);
    }

    75% {
        clip-path: inset(0 0 0 95%);
    }
}
</style>