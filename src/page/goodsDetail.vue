<template lang='html'>
  <div class="detail">
  
    <detail-header></detail-header>

    <div v-for="value in items" v-if="value.id==id">
      <img :src='value.img' :alt='value.title' />
      <p class="site-title">编号：{{value.id}} <br/> 名称：{{value.title}}</p>
       <p class="site-cont">
        价格： {{value.price}}
       </p>
    </div>
    <common-footer></common-footer>
  </div>
</template>
<script>
import DetailHeader from '../components/DetailHeader'

import CommonFooter from '../components/commonFooter'

export default {
  name: 'detail',
  data () {
    return {
      id: '',
      items: []
    }
  },
  mounted () {
    this.id = this.$route.query.id
  },

  components: {

    DetailHeader,

    CommonFooter

  },
  created () {
    this.$ajax.get('./static/goods.json')
    .then((response) => {
      this.items = response.data.goods
    })
    .catch((response) => {
      console.log('捕捉信息' + response)
    })
  }

}
</script>
<style lang="css">
.detail {

  padding: 0.25rem;

  font-size: 12px;
}



.detail>img {

  display: block;

  width: 80%;

  margin: 0 auto 0.5rem;
}



.detail>p {

  font-size: 1.1rem;

  line-height: 1.5rem;

  text-align: left;

  padding-bottom: 0.5rem;
}



.detail>p.site-title {

  color: #ff8000;
}



.detail>p.site-cont {

  color: #666;

  font-size: 0.9rem;
}
</style>
