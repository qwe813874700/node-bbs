<template>
  <div class="layout">
    <el-row class="layout-header">
      <Header></Header>
    </el-row>
    <div class="layout-container" :gutter="20">
      <div class="container-slider hidden-min-screen  fr">
        <Slider></Slider>
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
    <div class="layout-footer">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Header from './Header/Header.vue'
import Footer from './Footer/Footer.vue'
import Slider from './Slider/Slider.vue'

export default {
  components: {
    Header,
    Footer,
    Slider
  }
}
</script>
