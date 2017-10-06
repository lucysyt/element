<template lang='html'>
  <div class='head'>
      <div class='head-top'>
          <h1>饿了就要饿了么
            <span>
              <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-wenduji"></use>
              </svg>
            </span>
            <span>36°<br/>高温</span>
        </h1>
      </div>
      <div class='search-index'>
        <el-autocomplete size="large" class="inline-input" v-model="state1"
        :fetch-suggestions="querySearch" placeholder="搜索商家商品名称"
        @select="handleSelect"></el-autocomplete>
      </div>
      <div class="hot-search">
          <el-row>
            <el-col :span="3"><div class="grid-content bg-purple">玉米</div></el-col>
            <el-col :span="4"><div class="grid-content text-center">麻辣烫</div></el-col>
            <el-col :span="4"><div class="grid-content text-center">手撕包菜</div></el-col>
            <el-col :span="6"><div class="grid-content text-center">人气美食1折起</div></el-col>
            <el-col :span="3"><div class="grid-content text-right">香蕉</div></el-col>
            <el-col :span="4"><div class="grid-content text-right">腊肉</div></el-col>
        </el-row>
      </div>
       <div class="ele-conbox">
           <div class="ele-types">
            <el-carousel indicator-position="outside">
                    <el-carousel-item v-for="item in typeitem" :key="item">
                        <el-row>
                        <el-col v-for="items in item" :key="items" :span="6"><div class="grid-content"><span v-html="items.icon"></span><br/>{{items.name}}</div></el-col>
                        </el-row>
                    </el-carousel-item>
            </el-carousel>
          </div>
          <div class="gg"><img src='/static/img/gg.jpg' /></div>
          <div class="gg-tj">
              <el-row>
                <el-col :span="12">
                    <div class="grid-content">
                        <h4>限量抢购</h4>
                        <p>超值美味9.9元起</p>
                        <p><span>86人</span>正在抢></p>
                        <img src='/static/img/gg1.jpg' />
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="grid-content">
                        <h4>暖心下午茶</h4>
                        <p>炸鸡甜品奶茶</p>
                        <p>立减10元起></p>
                        <img src='/static/img/gg2.jpg' />
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="grid-content">
                        <h4>营养快餐</h4>
                        <p><el-tag>海量美食任意选</el-tag></p>
                        <img src='/static/img/gg3.jpg' />
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="grid-content">
                        <h4>蟹蟹老板</h4>
                        <p><el-tag>快来吃蟹</el-tag></p>
                        <img src='/static/img/gg4.jpg' />
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="grid-content">
                        <h4>免费试吃</h4>
                        <p><el-tag>快来抽奖</el-tag></p>
                        <img src='/static/img/gg5.jpg' />
                    </div>
                </el-col>
            </el-row>
          </div>
          <div class="clearfix"></div>
          <div class="tjsj">
              <h4>推荐商家</h4>
              <IndexList></IndexList>
          </div>
      </div>
      
  </div>
  
</template>
<script>
import IndexList from '../components/IndexList'
export default {
    data() {
        return {
            restaurants: [],
            state1: '',
            state2: '',
            typeitem:[]
        }
    },
    components:{
        IndexList
    },
    methods: {
        querySearch(queryString, cb) {
            var restaurants = this.restaurants
            var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants
            // 调用 callback 返回建议列表的数据
            cb(results)
        },
        createFilter(queryString) {
            return (restaurant) => {
                return (restaurant.value.indexOf(queryString.toLowerCase()) === 0)
            }
        },
        loadAll() {
            return [
                { 'value': '三全鲜食（北新泾店）', 'address': '长宁区新渔路144号' },
                { 'value': 'Hot honey 首尔炸鸡（仙霞路）', 'address': '上海市长宁区淞虹路661号' },
                { 'value': '新旺角茶餐厅', 'address': '上海市普陀区真北路988号创邑金沙谷6号楼113' },
                { 'value': '泷千家(天山西路店)', 'address': '天山西路438号' },
                { 'value': '胖仙女纸杯蛋糕（上海凌空店）', 'address': '上海市长宁区金钟路968号1幢18号楼一层商铺18-101' },
                { 'value': '贡茶', 'address': '上海市长宁区金钟路633号' },
                { 'value': '豪大大香鸡排超级奶爸', 'address': '上海市嘉定区曹安公路曹安路1685号' },
                { 'value': '茶芝兰（奶茶，手抓饼）', 'address': '上海市普陀区同普路1435号' },
            ]
        },
        handleSelect(item) {
            console.log(item)
           // alert(item)
        },
    },
    mounted() {
        this.restaurants = this.loadAll()
        this.typeitem = 
            {
                "one":[
                    {"name":"川湘菜","icon":"<svg class='icon' aria-hidden='true'><use xlink:href='#icon-chuancai'></use></svg>"},
                    {"name":"浪漫鲜花","icon":"<svg class='icon' aria-hidden='true'><use xlink:href='#icon-xianhualipin-copy'></use></svg>"},
                    {"name":"医药健康","icon":"<svg class='icon' aria-hidden='true'><use xlink:href='#icon-yiyaoxiang'></use></svg>"},
                    {"name":"汉堡薯条","icon":"<svg class='icon' aria-hidden='true'><use xlink:href='#icon-shiwuqimin1'></use></svg>"},
                    {"name":"包子粥店","icon":"<svg class='icon' aria-hidden='true'><use xlink:href='#icon-zhoulei'></use></svg>"},
                    {"name":"地方菜系","icon":"<svg class='icon' aria-hidden='true'><use xlink:href='#icon-shiwu_fuzhi'></use></svg>"},
                    {"name":"披萨意面","icon":"<svg class='icon' aria-hidden='true'><use xlink:href='#icon-shiwuqimin4'></use></svg>"},
                    {"name":"准时达","icon":"<svg class='icon' aria-hidden='true'><use xlink:href='#icon-meishi'></use></svg>"}
                ],
                "two":[
                    {"name":"川湘菜","icon":"<svg class='icon' aria-hidden='true'><use xlink:href='#icon-chuancai'></use></svg>"},
                    {"name":"浪漫鲜花","icon":"<svg class='icon' aria-hidden='true'><use xlink:href='#icon-xianhualipin-copy'></use></svg>"},
                    {"name":"医药健康","icon":"<svg class='icon' aria-hidden='true'><use xlink:href='#icon-yiyaoxiang'></use></svg>"},
                    {"name":"汉堡薯条","icon":"<svg class='icon' aria-hidden='true'><use xlink:href='#icon-shiwuqimin1'></use></svg>"},
                    {"name":"包子粥店","icon":"<svg class='icon' aria-hidden='true'><use xlink:href='#icon-zhoulei'></use></svg>"},
                    {"name":"地方菜系","icon":"<svg class='icon' aria-hidden='true'><use xlink:href='#icon-shiwu_fuzhi'></use></svg>"},
                    {"name":"披萨意面","icon":"<svg class='icon' aria-hidden='true'><use xlink:href='#icon-shiwuqimin4'></use></svg>"},
                    {"name":"准时达","icon":"<svg class='icon' aria-hidden='true'><use xlink:href='#icon-meishi'></use></svg>"}
                ]
            }
        
    }
}
</script>

<style lang='less'>
.head {
    width: 100%;
    background: #008bfe;
    /* 一些不支持背景渐变的浏览器 */
    background: -moz-linear-gradient(left, rgba(0, 133, 254, 0.5), rgba(0, 133, 254, 1));
    background: -webkit-gradient(linear, left 0, right 0, from(#00aafc), to(#0085fe));
    .head-top {
        padding: .9375rem 1.2rem 0 1.2rem;
        h1 {
            font-size: 1.875rem;
            line-height: 2.625rem;
            color: white;
            font-weight: 600;
            span {
                float: right;
                margin-top: .3125rem;
                font-size: .875rem;
                line-height: 1rem;
                font-weight: normal;
                svg {
                    font-size: 1.875rem;
                }
            }
        }
    }
    .search-index {
        padding: .9375rem 1.2rem 0 1.2rem;
        .inline-input {
            width: 100%;
            input {
                text-align: center;
            }
        }
    }
    .hot-search {
        padding: .9375rem 1.2rem .9375rem 1.2rem;
        font-size:.6875rem;
        color: #fff;
    }
}
.ele-conbox {
    padding: .9375rem 1.2rem .9375rem 1.2rem;
    background-color: #fff;
}
.ele-types {
    .el-carousel__container {
        height: 11.5rem;
    }
    div {
        text-align: center;
        color: #999;
        font-size: .875rem;
        .icon {
            margin-top: .625rem;
            margin-bottom: .625rem;
            font-size: 2.5rem;
        }
        &.grid-content {
            margin-bottom: .625rem;
        }
    }
}
.gg {
    img {
        width: 100%;
    }
}
.gg-tj {
    .grid-content {
        padding: .9375rem;
        background-color: #f9f9f9;
        h4 {
            color: #333;
            font-size: 1.125rem;
            font-weight: bold;
        }
        p {
           padding-top: .3125rem;
            font-size: .75rem;
            color: #999;
            .el-tag {
                background: none !important;
                border: 1px solid #999;
                color: #999;
            }
        }
        img {
            width: 100%;
            display: inline-block;
        }
    }
}
.tjsj {
    h4 {
        margin: 1.25rem 0;
        font-size: 1.25rem;
    }
    .grid-content {
        padding-bottom: .9375rem;
        margin: 0 0 1.25rem 0;
        border-bottom: .0625rem solid #f5f5f5;
    }
}
</style>
