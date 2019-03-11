<template>
  <div class="content">
    <div class="logo">
      <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png"
      style='width: 98px' alt="">
    </div>
    <div class="form">
      <input class="user" type="text" placeholder="请输入用户名" v-model="phone" @keyup="checkPhone"></input>
      <span v-show="tips" style="color: red">{{tips}}</span>
      <div class="pwd">
        <input type="password" placeholder="请输入密码"></input>
        <slot name="getCode"></slot>
      </div>
      <div class="sub">
        <div class="btn">登录</div>
        <div class="other">其他方式登录</div>
        <slot name="注册账号"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      phone: '',
      tips: ''
    }
  },
  methods: {
    
    checkPhone () {
      clearTimeout(this.timeId)
      this.timeId = setTimeout(() => {
        const reg = /^1[34578]\d{9}$/
        if (!reg.test(this.phone)) {
          this.tips = '手机格式不正确'
        } else {
          this.tips = ''
        }
      },2000)
    }
  }
  
}
</script>


<style lang="stylus" scoped>
  .content
    width 100%
    .logo 
      margin-top 30px
      width 100%
      height 32px        
      text-align center
      margin-bottom 80px
    .form
      width 90%
      height 250px
      margin 0 auto
      input
        width 100%
        height 40px
        border-bottom 1px solid #666
        outline none
        margin-bottom 20px
        &::placeholder
          font-size 14px
          color #666
      .sub
        width 100%
        height 100px
        div
          margin-top 20px
          width 100%
          height 40px
          line-height 40px
          border-radius 5px
        .btn
          background #b4282d
          color #ffffff
          text-align center
        .other
          border 1px solid #b4282d
          text-align center
</style>
