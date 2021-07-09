<template>
  <el-card>
    <div slot="header">
      <nav-breadcumb></nav-breadcumb>
    </div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="活动区域">
        <el-select v-model="form.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="活动名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item>
        <vue-editor v-model="content" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
import NavBreadcumb from 'components/Common/NavBreadcumb/NavBreadcumb'

export default {
  components: {
    NavBreadcumb
  },
  data() {
    return {
      form: {
        name: '',
        region: ''
      },
      content: ''
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    }
  }
}
</script>

<style scss="scss">
</style>
