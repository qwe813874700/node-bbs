import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../components/Layout/Layout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Layout,
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
        path: 'topic-list',
        name: 'TopicList',
        component: () => import('components/Topic/TopicList')
      },
      {
        path: 'topic-create',
        name: 'TopicCreate',
        component: () => import('components/Topic/TopicCreate'),
        meta: {
          title: '发布话题'
        }
      },
      {
        path: 'topic/:id',
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

export default router
