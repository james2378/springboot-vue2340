import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'

     import users from '@/views/modules/users/list'
    import biyeluenwen from '@/views/modules/biyeluenwen/list'
    import dictionary from '@/views/modules/dictionary/list'
    import keti from '@/views/modules/keti/list'
    import ketirenwu from '@/views/modules/ketirenwu/list'
    import news from '@/views/modules/news/list'
    import pingyuejiaoshi from '@/views/modules/pingyuejiaoshi/list'
    import xuantishenqing from '@/views/modules/xuantishenqing/list'
    import yonghu from '@/views/modules/yonghu/list'
    import zhidaojiaoshi from '@/views/modules/zhidaojiaoshi/list'
    import dictionaryBanji from '@/views/modules/dictionaryBanji/list'
    import dictionaryBiyeluenwenYesno from '@/views/modules/dictionaryBiyeluenwenYesno/list'
    import dictionaryKeti from '@/views/modules/dictionaryKeti/list'
    import dictionaryKetiYesno from '@/views/modules/dictionaryKetiYesno/list'
    import dictionaryKetirenwu from '@/views/modules/dictionaryKetirenwu/list'
    import dictionaryKetirenwuYesno from '@/views/modules/dictionaryKetirenwuYesno/list'
    import dictionaryNews from '@/views/modules/dictionaryNews/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryXuantishenqingYesno from '@/views/modules/dictionaryXuantishenqingYesno/list'
    import dictionaryXueyuan from '@/views/modules/dictionaryXueyuan/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    } ,{
        path: '/users',
        name: '管理信息',
        component: users
      }
    ,{
        path: '/dictionaryBanji',
        name: '班级',
        component: dictionaryBanji
    }
    ,{
        path: '/dictionaryBiyeluenwenYesno',
        name: '打分状态',
        component: dictionaryBiyeluenwenYesno
    }
    ,{
        path: '/dictionaryKeti',
        name: '课题类型',
        component: dictionaryKeti
    }
    ,{
        path: '/dictionaryKetiYesno',
        name: '申请状态',
        component: dictionaryKetiYesno
    }
    ,{
        path: '/dictionaryKetirenwu',
        name: '任务类型',
        component: dictionaryKetirenwu
    }
    ,{
        path: '/dictionaryKetirenwuYesno',
        name: '申请状态',
        component: dictionaryKetirenwuYesno
    }
    ,{
        path: '/dictionaryNews',
        name: '公告类型',
        component: dictionaryNews
    }
    ,{
        path: '/dictionarySex',
        name: '性别',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryXuantishenqingYesno',
        name: '申请状态',
        component: dictionaryXuantishenqingYesno
    }
    ,{
        path: '/dictionaryXueyuan',
        name: '学院',
        component: dictionaryXueyuan
    }


    ,{
        path: '/biyeluenwen',
        name: '毕业论文',
        component: biyeluenwen
      }
    ,{
        path: '/dictionary',
        name: '字典表',
        component: dictionary
      }
    ,{
        path: '/keti',
        name: '课题信息',
        component: keti
      }
    ,{
        path: '/ketirenwu',
        name: '课题任务',
        component: ketirenwu
      }
    ,{
        path: '/news',
        name: '公告信息',
        component: news
      }
    ,{
        path: '/pingyuejiaoshi',
        name: '评阅教师',
        component: pingyuejiaoshi
      }
    ,{
        path: '/xuantishenqing',
        name: '选题申请',
        component: xuantishenqing
      }
    ,{
        path: '/yonghu',
        name: '用户',
        component: yonghu
      }
    ,{
        path: '/zhidaojiaoshi',
        name: '指导教师',
        component: zhidaojiaoshi
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
