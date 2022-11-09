import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


const store = new Vuex.Store({
    state: {
        gasInfo: [],
        robotInfo: [],
        sensorInfo: [],
        batteryInfo:[],
        positionInfo:[]
    },

    mutations: {
        //更改气体信息
        changeGasInfo(state, gasinfo) {
           // console.log('收到了更改机器人的信息');
            state.gasinfo = gasinfo
        },
        //更改气体信息
        changeBatteryInfo(state, batteryInfo) {
           // console.log('收到了更改电池的信息');
            state.batteryInfo = batteryInfo
        },
        //更改机器人信息
        changeRobotInfo(state, robotInfo) {
           // console.log('收到了更改机器人的信息');
            state.robotInfo = robotInfo
        },
        //更改传感器信息
        changeSensorInfo(state, sensorInfo) {
           // console.log('收到了更改传感器的信息');
            state.sensorInfo = sensorInfo
        },
         //更改机器人位置信息
         changePositionInfo(state, positionInfo) {
           // console.log('收到了更改机器人位置的信息');
            state.positionInfo = positionInfo
        }

    }

})

export default store



