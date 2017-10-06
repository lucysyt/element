<template lang='html'>
<div class="container">
 <header>此页面列表页面</header>
 <div class='content'>
     <ul class='cont-ul'>
         <list v-for='item in curList' :key='item.id' :prid='item.id' :price='item.price' :title='item.title' :img='item.img'></list>
     </ul>
 </div>
 <pagination :data-num='items.length' :each='eachPageSize' :visiblepage='visiablepage' v-on:change-page='changePage'></pagination>
 <common-footer></common-footer>
</div>  
</template>
<script>
import HomeHeader from '../components/homeHeader'
import CommonFooter from '../components/commonFooter'
import List from '../components/list'
import Pagination from '../components/Pagination'

export default {
  name: 'home',
  data () {
    return {
      items: [],
      cur: 0,
      dataNum: 0,
      eachPageSize: 6,
      visiablepage: 5,
      curpage: 1
    }
  },
  components: {
    HomeHeader,
    CommonFooter,
    List,
    Pagination
  },
  computed: {
    curList: function () {
      var p = []
      for (var i = 0, l = this.items.length; i < l; i++) {
        p[i] = this.items[i]
      }
      return p.slice((this.curpage - 1) * this.eachPageSize, (this.curpage - 1) * this.eachPageSize + this.eachPageSize)
    }
  },
  methods: {
    changePage: function (cur) {
      this.curpage = cur
    }
  },
  created () {
    this.$ajax.get('./static/goods.json')
      .then((response) => {
        this.items = response.data.goods
      })
      .catch(function (response) {
      })
  }
}
</script>
<style lang='css' scoped>
   .container {
    width: 100%;
    margin: 0 auto;
  }
  .content {
    margin-bottom: 1.8rem;
  }
  .cont-ul {
    padding-top: 0.5rem;
    background-color: #ccc;
  }
  .cont-ul::after {
    content: '';
    display: block;
    clear: both;
    width: 0;
    height: 0;
  }
</style>

