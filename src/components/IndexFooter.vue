<template>
  <div class="footerbox">
    <el-row>
      <el-col :span="6">
        <div class="grid-content" v-on:click="changeFooters('1')">
            <a href="/index" :class="types=='1' ? 'active':''" >
              <p>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-elmyhq"></use>
                </svg>
              </p>
              <p>外卖</p>
            </a>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content" v-on:click="changeFooters('2')">
            <a href="/find"  :class="types=='2' ? 'active':''">
               <p>
                  <svg class="icon" aria-hidden="true">
                      <use xlink:href="#icon-appyingyongtubiao"></use>
                  </svg>
                </p>
                <p>发现</p>
            </a>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content" v-on:click="changeFooters('3')">
          <a href="/orderlist" :class="types=='3'? 'active':''">
           <p>
              <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-dingdan"></use>
              </svg>
            </p>
            <p>订单</p>
          </a>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content" v-on:click="changeFooters('4')">
          <a href="/our" :class="types=='4'? 'active':''">
           <p>
              <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-weibiaoti1"></use>
              </svg>
            </p>
            <p>我的</p>
          </a>
        </div>
        </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  props: {
        typed: String
  },
  data () {
    return {
      types:'1'
    }
  },
  mounted:function(){
    this.fztype()
  },
  methods :{
   fztype:function(){
     this.types = this.typed
    },
   changeFooters:function(obj){
    // console.log(obj);
     this.types = obj
   }
  }
}
</script>
<style lang='less'>
.footerbox {
  position: fixed;
  bottom: 0;
  left: 0;
  padding: .625rem;
  width: 100%;
  text-align: center;
  border-top: 1px solid #c7c7c7;
  color: #7f7f7f;
  background-color: #f7f7f7;
  z-index: 9999;
  .icon {
    margin-bottom: .3125rem;
    font-size: 1.5rem;
  }
  a {
      color: #7f7f7f;
      &.active {
       color: #00a0f5 !important;
      }
  }
}
</style>

