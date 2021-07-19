export default {
  data() {
    const validatePass = (rule, value, callback) => {
      const password = this.formData.password
      const verfiyPasswordResult = this.$verify.verifyPasswordData(password)
      if (verfiyPasswordResult.code === -1) {
        callback(new Error(verfiyPasswordResult.msg))
      } else {
        if (this.formData.checkPass !== undefined && this.formData.checkPass !== '') {
          this.$refs.formData.validateField('checkPass');
        }
        callback()
      }
    };
    const validateCheckPass = (rule, value, callback) => {
      const password = this.formData.checkPass
      const verfiyPasswordResult = this.$verify.verifyPasswordData(password)
      if (verfiyPasswordResult.code === -1) {
        callback(new Error(verfiyPasswordResult.msg))
      } else if (password !== this.formData.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      rules: {
        password: [{
          validator: validatePass,
          trigger: 'blur'
        }],
        checkPass: [{
          validator: validateCheckPass,
          trigger: 'blur'
        }]
      }
    }
  }
}
