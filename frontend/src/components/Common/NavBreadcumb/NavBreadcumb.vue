<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>{{ currTitle() }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  methods: {
    currTitle() {
      return this.$route.meta.title
    }
  }
}
</script>
