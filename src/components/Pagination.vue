<template lang='html'>
  <div class='page'>
    <ul>
      <li v-if="curPage !== 1"><a href='javascript:;' v-on:click='firstClick()'>首页</a></li>
      <li><a href='javascript:;' v-on:click='prevClick()'>上一页</a></li>
      <li v-for='index in pages' v-bind:class='{active:curPage == index}'>
        <a href='javascript:;' v-on:click='btnClick(index)'>{{index}}</a>
      </li>
      <li><a href='javascript:;' v-on:click='nextClick()'>下一页</a></li>
      <li v-if="curPage !== totalPages" ><a href='javascript:;'  v-on:click='lastClick()'>尾页</a></li>
      <li><a href='javascript:;'>共<i>{{totalPages}}</i>页</a></li>
      <span v-if="totalPages > visiblepage">
          <input v-model="numPage" placeholder='1' maxlength="20">{{message}}
          <li><a href='javascript:;' v-on:click='jumpClick()'>跳转</a></li>
      </span>

    </ul>
  </div>
</template>
<script>
export default {
  props: {
    dataNum: {// 总共多少条数据
      type: Number,
      default: 300
    },
    cur: {// 当前所在的是第几页
      type: Number,
      default: 1
    },
    each: {// 规定每页显示多少条数据
      type: Number,
      default: 10
    },
    visiblepage: {// 默认显示10页页码
      type: Number,
      default: 10
    }
  },
  data: function () {
    return {// 初始化当前页码
      curPage: 0,
      numPage: '',
      message: ''
    }
  },
  created: function () { // 设置变量接收当前页码
    this.curPage = this.cur
  },
  computed: {
    totalPages: function () { // 从得到的总数据计算得出有多少页（向上取整）
      return Math.ceil(this.dataNum / this.each) || 0
    },
    pages: function () {
      var lowPage = 1 // 设置最低显示的页码
      var highPage = this.totalPages // 设置最大显示的页码等于总页数
      var pageArr = [] // 将得到的页面数放入数组
      if (this.totalPages > this.visiblepage) { // 如果总页面数大于默认可显示页码数
        var sub = Math.ceil(this.visiblepage / 2) // 设置变量获取默认显示页数的一半
        if (this.curPage > sub && this.curPage < this.totalPages - sub + 1) { // 如果需要显示的页面码数大于sub，并且小于总页面数减去sub并加上1
          lowPage = this.curPage - sub // 页面上显示的最小的页码值等于当前选中的值-可显示页码数的一半
          highPage = this.curPage + sub - 2 // 当前最大页码的值等于选中的值+可显示页码数的一半-2
        } else if (this.curPage <= sub) {
          lowPage = 1
          highPage = this.visiblepage
        } else {
          lowPage = this.totalPages - this.visiblepage + 1
          highPage = this.totalPages
        }
      }
      while (lowPage <= highPage) {
        pageArr.push(lowPage)// 如果最低页码数小于最大页码数，就一直循环将数据放到页码数组中渲染
        lowPage++
      }
      return pageArr
    }
  },
  methods: {
    firstClick: function () {
      this.curPage = 1
      this.$emit('change-page', this.curPage)
    },
    btnClick: function (index) {
      this.curPage = index
      this.$emit('change-page', index)
    },
    nextClick: function () {
      if (this.curPage < this.totalPages) {
        this.curPage++
        this.$emit('change-page', this.curPage)
      }
    },
    prevClick: function () {
      if (this.curPage > 1) {
        this.curPage--
        this.$emit('change-page', this.curPage)
      }
    },
    lastClick: function () {
      // console.log('11111111')
      this.curPage = this.totalPages
      this.$emit('change-page', this.totalPages)
    },
    jumpClick: function () {
      let regExp = /[^\d]/g
      // this.numPage = this.numPage.replace(/[^\d]/g, '')
      if (regExp.test(this.numPage)) {
        this.message = '请输入数字'
        return
      } else if (this.numPage < 1) {
        this.message = '数字不能低于最小页码'
        return
      } else if (this.numPage > this.totalPages) {
        this.message = '数字不能大于最大页码'
        return
      } else {
        this.message = ''
      }
      this.curPage = this.numPage
      this.$emit('change-page', this.curPage)
    }
  }
}
</script>
<style>
.page ul li {border: 1px solid green;display: inline-block;}
.page ul li:hover {background-color: green;}
.page ul li:hover a {color: white;}
.page ul li.active {background-color: green;}
.page ul li.active a {color: white;}
.page ul li a { padding: 6px  12px; display: block;color: green;}
.page ul li a i {color: red;font-style: normal;}
.page ul li button {padding: 6px  12px; background-color: transparent;border: none; display: block;color: green;cursor: pointer}
.page ul li button:hover {color: white;}
</style>
