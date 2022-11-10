import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


const store = new Vuex.Store({
    state: {
        //气体数据
        gasInfo: [],
        //机器人相关数据
        robotInfo: [],
        //传感器相关数据
        sensorInfo: [
            {
              //名称
              name: '烟雾传感器',
              //时间
              date: 123658652,
              //根据不同传感器添加不同单位，value同理
              position: `32米`,
              value: `160`,
              //是否异常
              isDanger: true,
              //是否确认
              isConfirm: false,
              //详细情况
              detail: {}
            },
            {
              name: '烟雾传感器',
              //根据不同传感器添加不同单位，value同理
              position: `32米`,
              value: `160`,
              //是否异常
              isDanger: false,
              //是否确认
              isConfirm: true,
              //详细情况
              detail: {}
            },
            {
              name: '烟雾传感器',
              //根据不同传感器添加不同单位，value同理
              position: `32米`,
              value: `160`,
              //是否异常
              isDanger: true,
              //是否确认
              isConfirm: false,
              //详细情况
              detail: {}
            },
            {
              name: '烟雾传感器',
              //根据不同传感器添加不同单位，value同理
              position: `32米`,
              value: `160`,
              //是否异常
              isDanger: true,
              //是否确认
              isConfirm: true,
              //详细情况
              detail: {}
            },
            {
              name: '烟雾传感器',
              //根据不同传感器添加不同单位，value同理
              position: `32米`,
              value: `160`,
              //是否异常
              isDanger: true,
              //是否确认
              isConfirm: true,
              //详细情况
              detail: {}
            },
            {
              name: '烟雾传感器',
              //根据不同传感器添加不同单位，value同理
              position: `32米`,
              value: `160`,
              //是否异常
              isDanger: true,
              //是否确认
              isConfirm: false,
              //详细情况
              detail: {}
            },
            {
              name: '烟雾传感器',
              //根据不同传感器添加不同单位，value同理
              position: `32米`,
              value: `160`,
              //是否异常
              isDanger: false,
              //是否确认
              isConfirm: true,
              //详细情况
              detail: {}
            },
            {
              name: '烟雾传感器',
              //根据不同传感器添加不同单位，value同理
              position: `32米`,
              value: `160`,
              //是否异常
              isDanger: false,
              //是否确认
              isConfirm: true,
              //详细情况
              detail: {}
            },
            {
              name: '烟雾传感器',
              //根据不同传感器添加不同单位，value同理
              position: `32米`,
              value: `160`,
              //是否异常
              isDanger: true,
              //是否确认
              isConfirm: false,
              //详细情况
              detail: {}
            },
            {
              name: '烟雾传感器',
              //根据不同传感器添加不同单位，value同理
              position: `32米`,
              value: `160`,
              //是否异常
              isDanger: false,
              //是否确认
              isConfirm: true,
              //详细情况
              detail: {}
            },
            {
              name: '烟雾传感器',
              //根据不同传感器添加不同单位，value同理
              position: `32米`,
              value: `160`,
              //是否异常
              isDanger: true,
              //是否确认
              isConfirm: false,
              //详细情况
              detail: {}
            },
            {
              name: '烟雾传感器',
              //根据不同传感器添加不同单位，value同理
              position: `32米`,
              value: `160`,
              //是否异常
              isDanger: true,
              //是否确认
              isConfirm: true,
              //详细情况
              detail: {}
            },
            {
              name: '烟雾传感器',
              //根据不同传感器添加不同单位，value同理
              position: `32米`,
              value: `160`,
              //是否异常
              isDanger: true,
              //是否确认
              isConfirm: true,
              //详细情况
              detail: {}
            },
            {
              name: '烟雾传感器',
              //根据不同传感器添加不同单位，value同理
              position: `32米`,
              value: `160`,
              //是否异常
              isDanger: true,
              //是否确认
              isConfirm: false,
              //详细情况
              detail: {}
            },
            {
              name: '烟雾传感器',
              //根据不同传感器添加不同单位，value同理
              position: `32米`,
              value: `160`,
              //是否异常
              isDanger: false,
              //是否确认
              isConfirm: true,
              //详细情况
              detail: {}
            },
            {
              name: '烟雾传感器',
              //根据不同传感器添加不同单位，value同理
              position: `32米`,
              value: `160`,
              //是否异常
              isDanger: false,
              //是否确认
              isConfirm: true,
              //详细情况
              detail: {}
            },
          ],
        //电池相关数据
        batteryInfo:[],
        positionInfo:[],
        //用户的相关信息
        userInfo:[{
          user:'admin',
          password:'123'
        }]
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



