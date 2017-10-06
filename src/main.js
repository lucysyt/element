// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import router from './router'
import '!style-loader!css-loader!less-loader!./assets/less/style.less'
import 'animate.css'
import './assets/iconfont/iconfont.js'
import axios from 'axios'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$ajax = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
Vue.filter('dCurrency', function (value) {
  return '￥' + value
})
Vue.filter('dTofixed', function (value) {
  var isNum = parseFloat(value)
  if (!isNum) {
    alert('请输入数字')
    return '请输入数字'
  } else {
    var valueed = Math.round(isNum * 100) / 100
    var item = valueed.toString().split('.')
    if (item.length === 1) {
      valueed = valueed.toString() + '.00'
      return valueed
    }
    if (item.length > 1) {
      if (item[1].length < 2) {
        valueed = valueed.toString() + '0'
      }
      return valueed
    }
  }
})
