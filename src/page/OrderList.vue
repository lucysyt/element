<template>
  <div class="orderbox">
      <h4>全部订单</h4>
      <div class="orderlist" v-for="(item,index) in arrOrder" :key="index">
          <a href="/find">
          <el-row>
              <el-col :span="4"><div><img src="/static/img/timg (1).jpg" alt="店铺标志"></div></el-col>
              <el-col :span="14">
                  <div class="order-content">
                      <h5><span>{{item.name}}</span>&nbsp;&nbsp;<i class="el-icon-arrow-right "></i></h5>
                      <p class="o-time">{{item.time}}</p>
                      <p class="o-name">{{item.pro}}</p>
                      <p class="o-price"><i>￥</i>{{item.price}}</p>
                  </div>
              </el-col>
              <el-col :span="6"><div class="o-state">{{item.state}}</div></el-col>
          </el-row>
          </a>
      </div>
      <IndexFooter :typed="typemesage"></IndexFooter>
  </div>
</template>
<script>
import IndexFooter from '../components/IndexFooter'
export default {
  data () {
      return {
          typemesage:'3',
          arrOrder:[]
      }
  },
  components:{
      IndexFooter
  },
  mounted(){
      this.getData()
  },
  methods:{
      getData:function(){
        this.arrOrder = [
            {"name":"白领小厨（四川北路店）","time":"2017-10-02","state":"订单派送中","pro":"番茄炒蛋2件商品","price":"8"},
            {"name":"盖板（商户北路店）","time":"2017-09-14","state":"订单已完成","pro":"培根14件商品","price":"30.2"},
            {"name":"舒祥媛（的川北路店）","time":"2017-08-12","state":"订单已完成","pro":"手撕鸡饭2件商品","price":"16"},
            {"name":"三米粥铺（吴淞路店）","time":"2017-07-11","state":"订单已完成","pro":"写在万字2件商品","price":"14"},
            {"name":"我呀便当（东大名路店）","time":"2017-10-02","state":"订单已完成","pro":"招牌双拼2件商品","price":"20.8"},
            {"name":"白领小厨（四川北路店）","time":"2017-10-02","state":"订单已完成","pro":"青椒炒蒜2件商品","price":"16.9"}
        ]  
      }
  }
}
</script>
<style lang='less'>
.orderbox {
    padding-bottom: 4.375rem;
    h4 {
        padding: .9375rem .625rem;
        font-size: 1.25rem;
        color: #fff;
        font-weight: normal;
        background: -moz-linear-gradient(left, rgba(0, 133, 254, 0.5), rgba(0, 133, 254, 1));
        background: -webkit-gradient(linear, left 0, right 0, from(#00aafc), to(#0085fe));
    }
    .orderlist {
        margin: .625rem;
        border-bottom: .0625rem solid #f5f5f5;
        img {
            width: 100%;
            height: 3.125rem;
            object-fit: contain;
            border: 1px solid #f5f5f5;
            border-radius: 4px;
        }
        .order-content {
            padding-left: .625rem;
            h5 {
                position: relative;
                overflow: hidden;
                color: #1F2D3D;
                font-size:1.125rem;
                font-weight: bold;
                span {
                    width: 11.5625rem;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    display: inline-block;
                }
                i {
                    position: absolute;
                    right: -.0625rem;
                    top: .3125rem;
                    font-size: .875rem;
                    color: #999;
                }
            }
            .o-time {
                margin-bottom: .9375rem;
                font-size: .75rem;
                color: #999;
            }
            .o-name {
                margin-bottom: .3125rem;
                 color: #8492A6;
                font-size: .875rem;
            }
            .o-price {
                margin-bottom: .9375rem;
                color: #1F2D3D;
                font-size: 1rem;
                font-weight: bold;
                i {
                    font-size: .875rem;
                    font-style: normal;
                }
            }
        }
        .o-state{
            font-size: .875rem;
            line-height: 1.5rem;
            text-align: right;
            color: #8492A6;
        }
    }
}
</style>
