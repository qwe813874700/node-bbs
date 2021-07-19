<template>
  <el-card>
    <div slot="header">
      <nav-breadcumb></nav-breadcumb>
    </div>
    <el-form :model="formData" status-icon :rules="rules" ref="formData" label-width="100px" class="demo-formData">
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
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="formData.checkPass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitRegiester('formData')">注册</el-button>
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
  data() {
    return {
      formData: {
        password: '',
        checkPass: '',
        username: '',
        email: ''
      }
    };
  },
  methods: {
    submitRegiester(formName) {
      this.$refs[formName].validate((validResult) => { // 校验成功时， validResult 为 true
        if (validResult) {
          this.$request.register(this.formData).then(res => {
            if (res.code === this.$config.SUCC_CODE) {
              this.$notify.success({
                title: '成功',
                message: res.msg
              })
              this.$router.push('/login')
            } else {
              this.$notify.error({
                title: '失败',
                message: res.msg
              })
            }
          })
        } else {
          console.log('error submit!!');
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
