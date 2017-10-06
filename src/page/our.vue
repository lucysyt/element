<template>
  <div>
      <div class="ourbox">
          <div class="ourheader">
              <h4><span>我的</span>
              <span class="pull-right"><i class="el-icon-setting"></i></span>
              </h4>
              <div>
                  <el-row>
                      <el-col :span='6'>
                          <div class="imgbox"><img src="/static/img/2016djnbckoaopx.jpg" alt="头像"></div>
                      </el-col>
                      <el-col :span='18'>
                          <div class="ourmess">
                           <p>想吃大闸蟹</p>
                           <p>131****5806</p>
                          </div>
                      </el-col>
                  </el-row>
              </div>
              
          </div>
          <div class="ourbody">
              <div class="ourone">
                  <el-row>
                      <el-col :span='8'>
                          <div class="lb">
                              <p><i>0.00</i>元</p>
                              <p>钱包</p>
                          </div>
                      </el-col>
                      <el-col :span='8'>
                          <div class="lb">
                              <p class="red"><i>0.00</i>个</p>
                              <p>优惠</p>
                          </div>
                      </el-col>
                      <el-col :span='8'>
                          <div class="lb">
                              <p class="green"><i>422</i>分</p>
                              <p>积分</p>
                          </div>
                      </el-col>
                  </el-row>
              </div>
              <div class="outtwo">
                  <el-row>
                      <el-col :span='24'>
                          <div>
                              <p><i></i>收货地址</p>
                          </div>
                      </el-col>
                       <el-col :span='24'>
                          <div>
                              <p><i></i>收货地址</p>
                          </div>
                      </el-col>
                  </el-row>
              </div>
              <div class="outtwo">
                  <el-row>
                      <el-col :span='14'>
                          <div>
                              <p><i></i>推荐有奖</p>
                          </div>
                      </el-col>
                      <el-col :span='10'><div><p>5元现金</p></div></el-col>
                       <el-col :span='14'>
                          <div>
                              <p><i></i>积分上传</p>
                          </div>
                      </el-col>
                      <el-col :span='10'><div><p>0元好物在这里</p></div></el-col>
                       <el-col :span='14'>
                          <div>
                              <p><i></i>积分上传</p>
                          </div>
                      </el-col>
                      <el-col :span='10'><div><p>0元好物在这里</p></div></el-col>
                       <el-col :span='14'>
                          <div>
                              <p><i></i>积分上传</p>
                          </div>
                      </el-col>
                      <el-col :span='10'><div><p>0元好物在这里</p></div></el-col>
                       <el-col :span='14'>
                          <div>
                              <p><i></i>积分上传</p>
                          </div>
                      </el-col>
                      <el-col :span='10'><div><p>0元好物在这里</p></div></el-col>
                       <el-col :span='14'>
                          <div>
                              <p><i></i>积分上传</p>
                          </div>
                      </el-col>
                      <el-col :span='10'><div><p>0元好物在这里</p></div></el-col>
                  </el-row>
              </div>
              <div class="elmw">饿了吗，我现在很饿啊！！！</div>
          </div>
      </div>
      <IndexFooter :typed="typemesage"></IndexFooter>
  </div>
</template>
<script>
import IndexFooter from '../components/IndexFooter'
export default {
  data () {
      return {
          typemesage:'4'
      }
  },
  components:{
      IndexFooter
  },
}
</script>
<style lang='less'>
.ourbox {
    padding-bottom: 4.375rem;
    background-color: #E5E9F2;
   
 .ourheader {
     padding: .9375rem .625rem;
     color: #fff;
    background: -moz-linear-gradient(left, rgba(0, 133, 254, 0.5), rgba(0, 133, 254, 1));
    background: -webkit-gradient(linear, left 0, right 0, from(#00aafc), to(#0085fe));
    h4 {
        margin-bottom: .9375rem;
        font-size: 1.5rem;
        font-weight: normal;
    }
    .imgbox {
        width: 5.5rem;
        height: 5.5rem;
        border-radius: 2.75rem;
        overflow: hidden;
        text-align: center;
        img {
            width: 100%;
            object-fit: convert;
        }
    }
    .ourmess{
        padding-top: .625rem;
        padding-left: .9375rem;
        p {
            font-size: 1.125rem;
            margin-bottom: .5rem;
        }
    }

 }
}
.ourbody{
    .ourone {
        margin-bottom: .9375rem;
        background-color: #fff;
        border-bottom: .0625rem solid #e2e2e2;
        text-align: center;
        i {
            font-style: normal
        }
       
        .lb {
            padding: .625rem 0;
            border-right: .0625rem solid #e2e2e2;
            &:nth-child(2) {
                border-right: none;
            }
            
            p {
                font-size: .875rem;
                i {
                    font-size: 1.125rem;
                }
               &:first-child{
                   color: #F7BA2A;
               } 
               color: #8492A6;
               &.red {
                    color: #FF4949;
                }
                &.green {
                    color: #13CE66;
                }
            }
        }
    }
    .outtwo {
        margin-bottom: .625rem;
        
        background-color: #fff;
        p {
            padding: 0 .625rem;
            font-size: .875rem;
            color: #324057;
            border-bottom: .0625rem solid #e2e2e2;
            line-height: 2.5rem;
        }
        .el-col-10 {
            text-align: right;
            p {
                color: #8492A6;
            }
        }
    }
     border-bottom: 1px solid #e2e2e2;
     .elmw{
         text-align: right;
         line-height: 2.1875rem;
         color: #8492A6;
     }

}

</style>


