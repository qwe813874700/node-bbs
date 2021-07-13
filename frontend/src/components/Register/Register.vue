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

export default {
  components: {
    NavBreadcumb
  },
  data() {
    const validatePass = (rule, value, callback) => {
      const password = this.formData.password
      const verfiyPasswordResult = this.$verify.verifyPasswordData(password)
      if (verfiyPasswordResult.code === -1) {
        callback(new Error(verfiyPasswordResult.msg))
      } else {
        if (this.formData.checkPass !== '') {
          this.$refs.formData.validateField('checkPass');
        }
        callback()
      }
    };
    const validateCheckPass = (rule, value, callback) => {
      const password = this.formData.checkPass
      const verfiyPasswordResult = this.$verify.verifyPasswordData(password)
      if (verfiyPasswordResult.coder === -1) {
        callback(new Error('请再次输入密码'))
      } else if (password !== this.formData.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    };
    return {
      formData: {
        password: '',
        checkPass: '',
        username: '',
        email: ''
      },
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validateCheckPass, trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    submitRegiester(formName) {
      this.$refs[formName].validate((validResult) => { // 校验成功时， validResult 为 true
        if (validResult) {
          this.$request.register(this.formData).then(res => {
            console.log(res)
            if (res.code === this.$config.SUCC_CODE) {
              this.$notify.success({
                title: '成功',
                message: res.msg
              })
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
