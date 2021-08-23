import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../components/Layout/Layout.vue'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Layout,
    redirect: 'topic/list',
    children: [
      {
        path: 'login',
        name: 'Login',
        component: () => import('components/Login/Login'),
        meta: {
          title: '登录'
        }
      },
      {
        path: 'register',
        name: 'Register',
        component: () => import('components/Register/Register'),
        meta: {
          title: '注册'
        }
      },
      {
        path: 'topic/list',
        name: 'TopicList',
        component: () => import('components/Topic/TopicList')
      },
      {
        path: 'topic/create',
        name: 'TopicCreate',
        component: () => import('components/Topic/TopicCreate'),
        meta: {
          title: '发布话题'
        }
      },
      {
        path: 'topic/content/:id',
        name: 'Topic',
        component: () => import('components/Topic/Topic')
      },
      {
        path: 'setting',
        name: 'Setting',
        component: () => import('components/Setting/Setting'),
        meta: {
          title: '设置'
        }
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

const white_list = ['/login', '/register', '/topic/list']

router.beforeEach((to, from, next) => {
  if (white_list.indexOf(to.path) > -1) { // 白名单不作校验
    next()
  } else {
    if (!store.getters.token) { // 判断是否存在token
      store.dispatch('logout', '')
      next({ path: '/login' })
    } else {
      console.log(666)
      next()
    }
  }
  
})

export default router
