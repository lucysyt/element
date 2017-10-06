<template>
  <div>
      <el-col :span="6">
            <div class="elem-brl">
                <img src="/static/img/gg2.jpg" alt="食品热销">
            </div>
        </el-col>
        <el-col :span="18">
            <div class="elem-brr">
                <h4>{{name}}</h4>
                <p class="js">{{desc}}</p>
                <p class="p1">月售{{xl}}份</p>
                <p class="p2"><i>￥</i>{{price}}元</p>
                <div class="jjclick">
                    <span v-show="nummber>=1" v-on:click="jiannum">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-jian"></use>
                        </svg>
                    </span>
                    <em v-show="nummber>=1">{{nummber}}</em>
                    <span v-on:click="addnum">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-jiahao"></use>
                        </svg>
                    </span>
                </div>
            </div>
        </el-col>
        <div style="clear:both;"></div>
        <div class="clearfix"></div>
  </div>
</template>
<script>
export default {
 props:[
     'arrpro'
 ],
  data () {
      return {
          nummber:0,
          arrdetail:{},
          name:'',
          desc:"",
          xl:'',
          price:''
      }
  },
  mounted(){
      this.getdetail();
  },
  methods:{
      getdetail:function(){
        this.$ajax.get('../static/json/findlist.json').then( (response)=> {
                for(var i = 0;i < response.data.length;i++){
                    if(response.data[i].id == this.arrpro){
                        this.arrdetail = response.data[i]
                    }
                }
                this.name = this.arrdetail.name;
                this.desc = this.arrdetail.des;
                this.xl = this.arrdetail.xl;
                this.price = this.arrdetail.price;
        })
      },
      addnum:function(){
         // console.log(this.price);
          this.nummber++;
          this.showNumParen([this.nummber,this.price,true]);
      },
      jiannum:function(){
          this.nummber--;
          if(this.nummber < 0 ){
              this.nummber = 0;
          }
          this.showNumParen([this.nummber,this.price,false]);
      },
      showNumParen:function(data){
          this.$emit('listenToChildEvent',data);
      }
  }
}
</script>
<style lang="less">

</style>

