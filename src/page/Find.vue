<template>
  <div class="elem-alllist">
      <div class="elem-header">
          <el-row>
            <el-col :span="6"><div class="eh-left"><img src="/static/img/timg (2).jpg" alt="商店标志"></div></el-col>
            <el-col :span="18">
                <div class="eh-right">
                    <h4>排骨精面馆</h4>
                    <p>欢迎光临，用餐高峰期请提前下单，谢谢</p>
                    <p><span>商家配送，约45分钟</span></p>
                </div>
            </el-col>
            <!-- <el-col :span="24">
                <div class="elem-hyh">
                    <p><el-tag type="danger">减</el-tag>满25减13，满70减40</p>
                    <p><el-tag type="warning">减</el-tag>满25减13，满70减40</p>
                    <p><el-tag type="success">减</el-tag>满25减13，满70减40</p>
                </div>
            </el-col> -->
          </el-row>
                <div><p>&nbsp;</p></div>
      </div>
      <div class="elem-body">
          <el-row>
            <el-col :span="6">
                <div class="elem-bleft">
                    <ul>
                        <li>热销</li>
                        <li>优惠</li>
                        <li>新品推荐</li>
                        <li>超值套餐</li>
                        <li>传统面条</li>
                        <li>新品推荐</li>
                        <li>超值套餐</li>
                        <li>传统面条</li>
                        <li>新品推荐</li>
                        <li>超值套餐</li>
                        <li>传统面条</li>
                        <li>新品推荐</li>
                        <li>超值套餐</li>
                        <li>传统面条</li>
                        <li>新品推荐</li>
                        <li>超值套餐</li>
                        <li>传统面条</li>
                    </ul>
                </div>
            </el-col>
            <el-col :span="18">
                <div class="elem-bright">
                    <h5>热销</h5>
                    <div>
                         <el-row>
                             <FindList v-for="(item,index) in allData" :key="index" :arrpro="item.id" v-on:listenToChildEvent="showNumFromChild"></FindList>
                         </el-row>
                    </div>
                </div>
            </el-col>
          </el-row>
      </div>
      <div class="elem-footer">
            <el-row>
              <el-col :span="18">
                  <div class="elem-onef" v-show="totalnum<=0">
                      <span class="zcsps">
                          <el-badge :value="0" class="item">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-gouwuche-copy"></use>
                            </svg>
                            </el-badge>
                        </span>
                       未选购商品
                  </div>
                  <div class="elem-onef elem-twof">
                      <span class="zcsps">
                          <el-badge :value="totalnum" class="item">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-gouwuche-copy"></use>
                            </svg>
                            </el-badge>
                        </span>
                       <span class="numcouts">￥{{totalprice}}</span>
                  </div>

              </el-col>
               <el-col :span="6">
                   <div class="elem-threef">
                       <span v-show="totalnum<=0">￥15起送</span>
                       <span><button v-on:click="sendMessage">去结算</button></span>
                   </div>
              </el-col>
          </el-row>
      </div>
      <IndexFooter :typed="typemesage"></IndexFooter>
  </div>
</template>
<script>
import FindList from '../components/FindList'
import IndexFooter from '../components/IndexFooter'
export default {
  data () {
      return {
          typemesage:'2',
          totalnum:0,
          totalprice:0,
          allData:{}
      }
  },
  components:{
      FindList,
      IndexFooter
  },
  mounted(){
      this.getdata()
  },
  methods:{
      getdata:function(){
            this.$ajax.get('../static/json/findlist.json').then( (response)=> {
                this.allData = response.data;
            })
      },
      showNumFromChild:function(data){
          //console.log(data);
          if(data[2]==true){
              this.totalnum++;
              this.totalprice +=parseInt(data[1]);
          }
          else {
              this.totalnum--;
              this.totalprice -= parseInt(data[1]);
              if(this.totalnum<=0){
                  this.totalnum = 0;
                  this.totalprice = 0;
              }
          }
      },
      sendMessage:function(){
          this.$message({
                message: '付款完成，商户已接单！',
                type: 'success',
                onClose:function(){
                    this.$router.push('/orderlist');
                }
            });
      }
  }
}
</script>
<style lang="less">
 .elem-header {
    background-color: #20A0FF;
    .eh-left {
        margin-top: .625rem;
        margin-left: .625rem;
        border: 1px solid #fff;
        border-radius: .25rem;
        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }
    .eh-right {
         margin-top: .625rem;
        margin-right: .625rem;
        padding-left: .9375rem;
        color: #fff;
        font-size: .875rem;
        h4 {
            font-size: 1.125rem;
            color: #fff;
        }
        p {
            margin-top: .625rem;
            span {
                padding: 0 .3125rem;
                border: .0625rem solid #fff;
                border-radius: .125rem;
            }
        }
    }
    .elem-hyh {
        margin-top: .625rem;
        padding: .625rem;
        padding-bottom: .2rem;
        background-color: #fff;
        p {
            line-height: 1.875rem;
            font-size:.875rem;
            color: #999;
            span {
                margin-right: .625rem;
            }
        }
    }
 }
 .elem-body {
     height: 100%;
 }
 .elem-bleft {
     width: 100%;
     height: 100%;
     background-color: #F9FAFC;
     ul {
         li {
             color: #666;
             text-align: center;
             padding: .625rem 0;
             border-bottom: 1px solid #E5E9F2;
         }
     }
 }
 .elem-bright {
    padding: 0 .625rem;
    padding-bottom: 8.125rem;
    .clearfix {
            clear: both;
            margin:1rem 0;
            height: .0625rem;
            background-color: #e2e2e2;
        }
     h5 {
         margin-top: .625rem;
         margin-bottom: .625rem;
         font-size: 1rem;
         color: #666;
         font-weight: normal;
     }
     .elem-brl {
         width: 100%;
         height: 6.25rem;
         border:.0625rem solid #fff;
         border-radius:.25rem;
         overflow: hidden;
         img {
             width: 100%;
             height: 100%;
             object-fit: cover;
         }
     }
     .elem-brr {
         position: relative;
         padding-left: .625rem;
         overflow: hidden;
         h4 {
             margin-bottom: .375rem;
             color: #1F2D3D;
             font-size: 1.125rem;
         }
         .js {
             font-size: 12px;
             color: #999;
         }
        .p1 {
            margin: .5rem 0;
            color: #999;
            font-size: .75rem;
        }
        .p2 {
            color: red;
            font-size: 1.25rem;
            font-weight: bold;
            i {
                font-size: .875rem;
                font-style: normal;
            }
        }
       
        .jjclick {
            position: absolute;
            right: 0;
            bottom: 0;
            .icon {
                font-size: 1.375rem;
            }
            em {
                 color: #1F2D3D;
                font-style: normal;
            }
        }
     }
 }
 .elem-footer {
     position: fixed;
     bottom: 4.375rem;
     left: 0;
     padding: 0 .625rem;
     width: 100%;
     height: 4.375rem;
     line-height: 4.375rem;
     background-color: rgba(0, 0, 0, .4);
     .elem-onef {
         .zcsps {
             margin-top: .3125rem;
             width: 3.75rem;
             height: 3.75rem;
             border-radius: 50%;
             text-align: center;
             background-color: rgba(0, 0, 0, .4);
             display: inline-block;
             .icon {
                 font-size: 2.1875rem;
                 color: #808080;
             }
         }
     }
     .elem-twof {
         color: #fff;
         
         .icon {
             color: #20A0FF !important;
         }
         .numcouts {
             font-size: 1.5rem;
         }
     }
     .elem-threef {
         background-color: rgba(0, 0, 0, .4);
         text-align: center;
         color: #ccc;
         font-size: 1.125rem;
         button {
             width: 100%;
             height: 4.375rem;
             background-color: #20A0FF;
             border: none;
             font-size: 1.125rem;
             color: #fff;
         }
     }
 }
</style>

