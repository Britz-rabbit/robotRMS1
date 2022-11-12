<template>
    <img :src="rgb_msg" style="width:100%;height:100%" />
</template>

<script>
export default {
    name: "rgb_ws",
    data() {
        return {
            rgb_msg: ""
        }
    },
    created() {
        this.initWebSocket()
    },
    beforeDestroy() {
        this.websocketclose();
        this.websocket.close();
    },  
    destroyed() {

    },
    methods: {
        initWebSocket() {
            const wsuri = 'ws://192.168.2.228:40001';
            this.websocket = new WebSocket(wsuri);
            this.websocket.onopen = this.websocketonopen;
            this.websocket.onerror = this.websocketonerror;
            this.websocket.onmessage = this.websocketonmessage;
            this.websocket.onclose = this.websocketclose;
        },
        websocketonopen() {
            console.log("WebSocket连接成功");
            console.log("111");
        },
        websocketonerror(e) {
            console.log(e);
            //出问题后打印出对象，然后自动重连ws
            const wsuri = 'ws://192.168.2.228:40001';
            this.websocket = new WebSocket(wsuri);
        },
        websocketonmessage(e) {
            this.rgb_msg = "data:image/jpeg;base64," + e.data;
        },
        websocketclose() {
            console.log("connection closed");
            this.websocket.close();
        },
    }
}
</script>

<style lang="scss" scoped>

</style>
