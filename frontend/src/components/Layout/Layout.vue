<template>
  <div class="layout">
    <div class="layout-header">
      <Header></Header>
    </div>
    <div class="layout-container">
      <div class="container-content">
        <router-view></router-view>
      </div>
      <div class="container-slider hidden-md-only">
        <Slider></Slider>
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
