<template>
    <div class='container'>
        <dv-border-box-10>
            <!-- 上方筛选框 -->
            <div class="bar ">
                <el-button type="success" size="mini">全部设备</el-button>
                <el-badge :value="12" class="item">
                    <el-button type="danger" size="mini">异常设备</el-button>
                </el-badge>
                <el-button type="warning" size="mini">一键确认</el-button>

            </div>
            <!-- 机器人传感列表数据 -->
            <div class="listCon" style="width: 100%;margin:0 auto;height: 100%;margin-bottom: 2vh;">
                <el-table :data="robotTableDate" height="96%" highlight-current-row>
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
                            <el-switch v-model="scope.row.isConfirm" active-color="#13ce66" inactive-color="#ff4949">
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


        </dv-border-box-10>
    </div>
</template>

<script>
export default {
    name: '',
    data() {
        return {
            //tabs的激活页占位符
            activeName: 'first',
            //机器人传感器的数据
            robotTableDate: [
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
                    isDanger: false,
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
            ],
            //异常的数据(包含已处理)
            filteredDate: [

            ],
            //xxx传感器的数据
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
        //对多选按钮的回调处理
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        //tabs的回调处理
        handleClick(tab, e) {
            console.log(tab, e);
        }
    },
}
</script>

<style lang='less'  >
.container {
    width: 100%;
    //margin: 0 auto;
    height: 96%;
    margin-top: 1%;
    overflow: hidden;
}

.border {
    border: 1px solid red;
}

.bar {
    width: 100%;
    height: 5vh;
    margin: 1.6vh;
    display: flex;
    // justify-content: center;
    align-items: center;

    .el-button {
        margin-left: 1.2vw;
        height: 38px;
        font-size: 18px;
    }
}

//表单设置

//表底部的边框
.el-table td.el-table__cell,
    .el-table th.el-table__cell.is-leaf {
        border-bottom: 2px dotted rgb(114, 110, 110) ;
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