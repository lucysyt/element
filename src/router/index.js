import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/page/home'
import Detail from '@/page/goodsDetail'
import Guide from '@/page/Guide'
import Index from '@/page/index'
import Find from '@/page/Find'
import OrderList from '@/page/OrderList'
import our from '@/page/our'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'guide',
      component: Guide
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },
    {
      path: '/find',
      name: 'find',
      component: Find
    },
    {
      path: '/orderlist',
      name: 'orderlist',
      component: OrderList
    },
    {
      path: '/our',
      name: 'our',
      component: our
    }
  ]
})
