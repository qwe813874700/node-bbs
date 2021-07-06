<template>
  <div>
    <el-card class="mg-t">
      <div slot="header">
        <span>卡片名称</span>
      </div>
    </el-card>
    <el-card class="mg-t">
      <div slot="header">
        <span>卡片名称</span>
      </div>
    </el-card>
    <el-card class="mg-t">
      <div slot="header">
        <span>卡片名称</span>
      </div>
    </el-card>
    <el-card class="mg-t">
      <div slot="header">
        <span>卡片名称</span>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
  .mg-t {
    margin-top: 10px;
    &:first-child {
      margin-top: 0;
    }
  }
</style>
