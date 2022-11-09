import home from '@/pages/home'
import control from '@/pages/control'
export default [
    //首页，用于展示或重定向
    {
        path:'/home',
        meta:{
            title:'首页',
            index:0
        },
        component: () => import('../pages/home/index')
       //component:home
    },
    {
        path: '*',//匹配未定义的路由
        redirect: 'home'//重定向
    },
     //控制中心
     {
        path:'/control',
        meta:{
            title:'控制中心',
            index:1
        },
        component: () => import('../pages/control/index')
        //component:control
    },
    //警报处理
    {
        path:'/warning',
        meta:{
            title:'警报处理',
            index:2
        },
        component:()=>import('../pages/warning/index'),
        //component:warning,
        children:[
            {path:'robot',
            meta:{
                index:1
            },
            component:()=>import('../pages/warning/robot')},
            {path:'gallery',
            meta:{
                index:2
            },
            component:()=>import('../pages/warning/gallery')},
            {path:'multifunction',
            meta:{
                index:3
            },
            component:()=>import('../pages/warning/multifunction')},

        ]
    },
    //传感系统
    {
        path:'/sensor',
        meta:{
            title:'传感系统',
            index:3
        },
        component:()=>import('../pages/sensor/newIndex')
    },
     //数据分析
     {
        path:'/analyze',
        meta:{
            title:'数据分析',
            index:5
        },
        component:()=>import('../pages/analyze/index')
    },
    //测试用页面，上线后清除
    {
        path:'/test',
        component:()=>import('../pages/test')
    }
]