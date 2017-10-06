<template>
    <div class="swbox">
        <div class="swiperbox" @touchstart="touchStart($event)" @touchmove="touchMove($event)" @touchend="touchEnd($event)">
            <transition name="fade">
                <div v-if="active===index" v-for='(swiper,index) in swiperbox' :key='index' >
                    <img :src='baseUrl+index+imgType' />
                </div>
            </transition>
            <div class="swipcirl">
                <ul>
                    <li v-for='(swiper,index) in swiperbox' :key='index' :class="active==index?'active':''"></li>
                </ul>
            </div>
        </div>
        <div class="btnpri" v-if="(active+1)==swiperbox.length"><router-link to="/index"></router-link></div>
    </div>
    
</template>
<script>
  export default {
    data () {
      return {
        swiperbox: [1, 2, 3, 4],
        baseUrl: '/static/img/yd',
        imgType: '.jpg',
        active: 0,
        dire: 0,
        startY: 0,
        startX: 0
      }
    },
    mounted () {
    },
    methods: {
      touchStart (e) {
       // console.log('手指点击屏幕')
        this.startY = e.touches[0].pageX
        this.startX = e.touches[0].pageY
      },
      touchMove (e) {
        e.preventDefault()
        let endX
        let endY
        endX = e.changedTouches[0].pageX
        endY = e.changedTouches[0].pageY
        let direction = this.GetSlideDirection(this.startX, this.startY, endX, endY)

        switch (direction) {
          case 0:
            this.dire = 0
            break

          case 1:
            this.dire = 1
            break

          case 2:
            this.dire = 2
            break

          case 3:
            this.dire = 3
            break

          case 4:
            this.dire = 4
            break

          default:
        }
      },
      touchEnd (e) {
        e.preventDefault()
        console.log(this.dire)
        if (this.dire === 3) {
          this.active++
          if (this.active >= this.swiperbox.length) {
            this.active = this.swiperbox.length - 1
          }
        } else if (this.dire === 2) {
          this.active--
          if (this.active <= 0) {
            this.active = 0
          }
        } else { return }
      },
      GetSlideAngle (dx, dy) { // 返回角度
        return Math.atan2(dy, dx) * 180 / Math.PI
      },
      GetSlideDirection (startX, startY, endX, endY) { // 获取滑动方向
        // 根据起点和终点返回方向 1：向上，2：向下，3：向左，4：向右,0：未滑动
        let dy = startY - endY
        let dx = endX - startX
        let result = 0
        // 如果滑动距离太短
        if (Math.abs(dx) < 50 && Math.abs(dy) < 2) {
          return result
        }
        var angle = this.GetSlideAngle(dx, dy)

        if (angle >= -45 && angle < 45) {
          result = 4
        } else if (angle >= 45 && angle < 135) {
          result = 1
        } else if (angle >= -135 && angle < -45) {
          result = 2
        } else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
          result = 3
        }
        return result
      }
    }
}
</script>
<style lang='less'>
.swbox {width: 100%;height: 100%;}
.swiperbox {
    position: relative; 
    width: 100%;
    height: 100%;
    div {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        display: block;     
        background-color: rosybrown;
        overflow: hidden;
        z-index: 1;
        img {
            position: absolute;
            top: 50%;
            left: 50%;
            display: block;
            min-width: 100%;
            min-height: 100%;
            transform: translate(-50%, -50%);
        }
    }
}
.btnpri {
    position: fixed;
    top: auto;
    bottom: 55px;
    left: -10px;
    width: 100%;
    height: 200px;
    text-align: center;
    z-index: 9999;
    a { 
        width: 200px;
        height: 200px;
        border-radius: 50%;
        display: inline-block;
        background-color: transparent;
        }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}
div.swipcirl {
    position: absolute;
    top: auto;
    bottom: 20px;
    left: 0;
    width: 100%;
    height: 20px;
    background-color: transparent;
    text-align: center;
    ul {
        li {
            margin-right: 5px;
            display: inline-block;
            width: 10px;
            height: 10px;
            border-radius: 10px;
            background-color: white;
            opacity: .5;
            &.active {
                opacity: 1;
            }
        }
    }
}
</style>

