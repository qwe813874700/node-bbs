<template>
  <div class="header">
    <a href="" class="logo fl"></a>
    <div class="menu-motal">
      <ul class="menu-mobile hidden-md-and-up" :class="{hidden: hidden}">
        <li>
          <router-link to="/">首页</router-link>
        </li>
        <li>
          <router-link to="/">未读消息</router-link>
        </li>
        <li>
          <router-link to="/topic/111">我的话题</router-link>
        </li>
        <li v-if="!token">
          <router-link to="/login">登录</router-link>
        </li>
        <li v-if="!token">
          <router-link to="/register">注册</router-link>
        </li>
        <li v-if="token" @click="logout">
          <a>退出</a>
        </li>
      </ul>
    </div>
    <div class="el-icon-menu menu-click hidden-md-and-up" @click.prevent.stop="changeMobeilType">

    </div>
    <ul class="header-nav hidden-min-screen">
      <li>
        <router-link to="/">首页</router-link>
      </li>
      <li>
        <router-link to="/">未读消息</router-link>
      </li>
      <li>
        <router-link to="/">我的话题</router-link>
      </li>
      <li v-if="!token">
        <router-link to="/login">登录</router-link>
      </li>
      <li v-if="!token">
        <router-link to="/register">注册</router-link>
      </li>
      <li v-if="token" @click="logout">
        <a>退出</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      hidden: true
    }
  },
  computed: {
    ...mapGetters(['token'])
  },
  methods: {
    changeMobeilType() {
      this.hidden = !this.hidden
    },
    logout() {
      this.$store.dispatch('logout').then(() => {
        this.$router.push({
          path: '/login'
        })
      })
    }
  }
}
</script>

<style lang="scss">

$header_height: 60px;
$slider_width: 200px;

.header {
  @include layout_width;
  @include flex(true, ver);
  padding: 0 20px;
  height: $header_height;
  .logo {
    background-image: url("~assets/img/logo.png");
    display: block;
    width: 120px;
    height: 28px;
    background-size: cover;
  }
  .menu-click {
    color: $while_color;
    cursor: pointer;
    font-size: 30px;
  }
  .header-nav {
    @include flex(true, ver);
    li {
      height: $header_height;
      line-height: $header_height;
      padding: 0 20px;
      background: $header_color;
      &:hover {
        a {
          color: $while_color;
        }
      }
      a {
        color: $header_font_color;
        font-size: 14px;
      }
    }
  }
  .menu-motal {
    z-index: 99;
    .menu-mobile {
      width: $slider_width;
      position: fixed;
      right: 0;
      top: $header_height;
      bottom: 0;
      transition: all 0.3s;
      background: $header_color;
      &.hidden {
        right: -$slider_width;
      }
      li a {
        padding: 20px;
        font-size: 16px;
        color: $header_font_color;
        display: block;
        &:hover {
          background: #eee;
        }
      }
    }
  }
}
</style>
