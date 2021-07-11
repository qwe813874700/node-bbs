module.exports= {
  isEmail: (str) => {
    return /^[A-Za-zd0-9]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/.test(str)
  }
}