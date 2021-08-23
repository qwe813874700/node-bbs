<template>
  <el-card>
    <div slot="header">
      <nav-breadcumb></nav-breadcumb>
    </div>
    <el-form :model="formData" status-icon :rules="rules" ref="formData" label-width="80px" class="demo-formData">
      <el-form-item
        prop="email"
        label="邮箱"
        :rules="[
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ]">
        <el-input v-model="formData.email"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="formData.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('formData')">提交</el-button>
        <el-button @click="resetForm('formData')">重置</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
import NavBreadcumb from 'components/Common/NavBreadcumb/NavBreadcumb'
import UserMixin from 'api/mixins/userMixin'

export default {
  mixins: [UserMixin],
  components: {
    NavBreadcumb
  },
  created() {
    console.log(this.$store.getters.token)
  },
  data() {
    return {
      formData: {
        email: '',
        password: ''
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$request.login(this.formData).then(res => {
            if (res.code === this.$config.SUCC_CODE) {
              this.$notify.success({
                title: '成功',
                message: res.msg
              })
              this.$store.dispatch('succLogin', res.token)
              this.$router.push({
                path: '/'
              })
            } else {
              this.$notify.error({
                title: '失败',
                message: res.msg
              })
            }
          })
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style scss="scss">
</style>
