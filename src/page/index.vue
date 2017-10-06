<template lang='html'>
<transition enter-active-class="animated zoomInLeft" leave-active-class="animated zoomOutRight">
  <div class="box">
    <IndexHeader></IndexHeader>
    <IndexFooter :typed="typemesage"></IndexFooter>
  </div>
</transition>
</template>
<script>
import IndexHeader from '../components/IndexHeader'
import IndexFooter from '../components/IndexFooter'
export default {
  data () {
    return {
      typemesage:'1'
    }
  },
  components: {
    IndexHeader,
    IndexFooter
  }
}
</script>
<style>
.box {
 padding-bottom:70px;
}
</style>


