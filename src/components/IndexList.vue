<template>
  <div>
      <el-row>
        <el-col :span="24">
            <div class="grid-content">
                <a href="/find">
                <el-row>
                 <el-col :span="4">
                     <div class="tiumle">
                         <img src="/static/img/timg (1).jpg" alt="logo">
                     </div>
                 </el-col>
                 <el-col :span="20">
                     <div class="indexlist">
                         <h5>九州糖营养快餐</h5>
                         <p>
                          <el-rate
                            v-model="value5"
                            disabled
                            show-text
                            text-color="#ff9900"
                            text-template="{value}">
                            </el-rate>
                          <span>月售175单</span>
                          <span class="pull-right fn"><el-tag>蜂鸟专送</el-tag></span>
                        </p>
                        <p class="ms"><span>￥满20起送<svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-xuxian"></use>
                            </svg>配送费￥3</span><span class="pull-right">1.4km<svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-xuxian"></use>
                            </svg>39分钟</span></p>
                        <div class="hdlist">
                           <span class="drophd" @click = "toggle(1)">4个活动<i class="el-icon-caret-bottom el-icon--right"></i></span>
                           <div class="clearfix"></div>
                            <p><el-tag type="danger">减</el-tag>满20减10，满30减15，满40减20</p>
                            <p><el-tag type="danger">特</el-tag>折扣</p>
                            <div v-show ="current == 1">
                            <p><el-tag type="danger">减</el-tag>满20减10，满30减15，满40减20</p>
                            <p><el-tag type="danger">减</el-tag>满20减10，满30减15，满40减20</p>
                            </div>
                        </div>
                     </div>
                 </el-col>
                </el-row>
                </a>
            </div>
        </el-col>
        <el-col :span="24">
            <div class="grid-content">
                <a href="/find">
                    <el-row>
                    <el-col :span="4">
                        <div class="tiumle">
                            <img src="/static/img/timg (2).jpg" alt="logo">
                        </div>
                    </el-col>
                    <el-col :span="20">
                        <div class="indexlist">
                            <h5>九州糖营养快餐</h5>
                            <p>
                            <el-rate
                                v-model="value5"
                                disabled
                                show-text
                                text-color="#ff9900"
                                text-template="{value}">
                                </el-rate>
                            <span>月售175单</span>
                            <span class="pull-right fn"><el-tag>蜂鸟专送</el-tag></span>
                            </p>
                            <p class="ms">
                                <span>￥满20起送<svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-xuxian"></use>
                                </svg>配送费￥3</span>
                                <span class="pull-right">1.4km<svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-xuxian"></use>
                                </svg>39分钟</span>
                            </p>
                            <div class="hdlist">
                                <span class="drophd"  @click = "toggle(2)">4个活动<i class="el-icon-caret-bottom el-icon--right"></i></span>
                                <div class="clearfix"></div>
                                <p><el-tag type="danger">减</el-tag>满20减10，满30减15，满40减20</p>
                                <p><el-tag type="danger">特</el-tag>折扣</p>
                                <div v-show ="current == 2">
                                <p><el-tag type="danger">减</el-tag>满20减10，满30减15，满40减20</p>
                                <p><el-tag type="danger">减</el-tag>满20减10，满30减15，满40减20</p>
                                </div>
                            </div>
                        </div>
                    </el-col>
                    </el-row>
                </a>
            </div>
        </el-col>
         <el-col :span="24">
            <div class="grid-content">
                 <a href="/find">
                <el-row>
                 <el-col :span="4">
                     <div class="tiumle">
                         <img src="/static/img/timg (2).jpg" alt="logo">
                     </div>
                 </el-col>
                 <el-col :span="20">
                     <div class="indexlist">
                         <h5>九州糖营养快餐</h5>
                         <p>
                          <el-rate
                            v-model="value5"
                            disabled
                            show-text
                            text-color="#ff9900"
                            text-template="{value}">
                            </el-rate>
                          <span>月售175单</span>
                          <span class="pull-right fn"><el-tag>蜂鸟专送</el-tag></span>
                        </p>
                        <p class="ms">
                            <span>￥满20起送<svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-xuxian"></use>
                            </svg>配送费￥3</span>
                            <span class="pull-right">1.4km<svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-xuxian"></use>
                            </svg>39分钟</span>
                        </p>
                        <div class="hdlist">
                            <span class="drophd"  @click = "toggle(3)">4个活动<i class="el-icon-caret-bottom el-icon--right"></i></span>
                            <div class="clearfix"></div>
                            <p><el-tag type="danger">减</el-tag>满20减10，满30减15，满40减20</p>
                            <p><el-tag type="danger">特</el-tag>折扣</p>
                            <div v-show ="current == 3">
                            <p><el-tag type="danger">减</el-tag>满20减10，满30减15，满40减20</p>
                            <p><el-tag type="danger">减</el-tag>满20减10，满30减15，满40减20</p>
                            </div>
                        </div>
                     </div>
                 </el-col>
                </el-row>
                 </a>
            </div>
        </el-col>
      </el-row>
  </div>
</template>
<script>
export default {
  data () {
      return {
          value5:3.7,
          current:false
      }
  },
  methods:{
      toggle:function(cur){
          (this.current == cur) ? this.current=false : this.current=cur;
      }
  }
}
</script>
<style lang="less">
.tiumle {
    border: .0625rem solid #f5f5f5;
    height: 5.3125rem;
    line-height: 5.3125rem;
    text-align: center;
    overflow: hidden;
    border-radius: .125rem;
    resize: both;
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
}

.indexlist {
    padding-left: .625rem;
    color: #636363;
    font-size: .875rem;
    h5 {
        margin-bottom: .625rem;
        font-size: 1.125rem;
        font-weight: normal;
        color: #333;
    }
    p {
        margin-bottom: .625rem;
        clear: both;
     .el-rate {
            display: inline;
            i {
                font-size: .625rem;
            }
        }
        &.ms {
                .icon {
                    width: 1.0625rem;
                    height: 1rem;
                }
            }
        .fn {
            .el-tag {
                background-color: #009bff;
            }
        }
    }
    .hdlist {
        position: relative;
        padding-top: .625rem;
        border-top: .0625rem solid #f9f9f9;
        .drophd {
            position: absolute;
            right: 0;
            top: .625rem;
        }
        p {
            span {
              margin-right: .625rem;
            }
            
        }
    }
   
}
</style>


