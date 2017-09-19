<template>
  <div class="login">
    <header class="mui-bar mui-bar-nav">
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click="returnPage()"></a>
      <h1 class="mui-title" v-text="content_title"></h1>
    </header>

    <div class="login-div">
      <img class="logo" src="../../static/images/272.jpg">

      <div id="login_div" v-if="show == 'login'">
        <input label="手机号" placeholder="请输入手机号" type="tel" :value="tel" @input="tel = arguments[0]" :attr="{ minlength:11, maxlength:11}"
          :state="status.tel">
        </input>
        <input label="密码" placeholder="请输入密码(8 - 16位)" type="password" :value="password" @input="password = arguments[0]" :attr="{ minlength:8, maxlength:16}"
          :state="status.password">
        </input>
      </div>

      <div id="register_div" v-if="show == 'register'">
        <input label="用户名" placeholder="请输入用户名(2 - 4位)" :value="username" @input="username = arguments[0]" :state="status.user" :attr="{ minlength:2, maxlength:6}">
        </input>
        <input label="邮箱" placeholder="请输入邮箱" type="email" :value="email" @input="email = arguments[0]" :state="status.email">
        </input>
        <input label="密码" placeholder="请输入密码(8 - 16位)" type="password" :value="password" @input="password = arguments[0]" :attr="{ minlength:8, maxlength:16}"
          :state="status.password">
        </input>
        <input label="手机号" placeholder="请输入手机号" type="tel" :value="tel" @input="tel = arguments[0]" :attr="{ minlength:11, maxlength:11}"
          :state="status.tel">
        </input>
      </div>
      <div class="agreement">
        <input type="checkbox" class="checkbox" id="checkbox_a1" checked>
        <label for="checkbox_a1" @click="checked = !checked"></label>
        <span class="left">勾选即表示接收<a href="#" class="agreement-text">《NES使用协议》</a></span>
        <span class="right"><a href="#" class="forget">忘记密码?</a></span>
      </div>
      <button class="register  submit" @click="Jump('login')" :disabled="!checked">登&nbsp;&nbsp;&nbsp;&nbsp;录</button>
      <button class="register submit" @click="Jump('register')" :disabled="!checked">注&nbsp;&nbsp;&nbsp;&nbsp;册</button>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'login',
    data() {
      let username = ''
      let email = ''
      let password = ''
      let tel = ''
      let status = {
        'user': '',
        'email': '',
        'password': '',
        'tel': ''
      }
      let checked = true
      let popupVisible = false
      let show = 'login'
      return {
        username,
        email,
        password,
        tel,
        status,
        checked,
        popupVisible,
        show,
        scrollTop: 0,
        content_title: '登录'
      }
    },
    created: function () {
      this.showNavId();
    },
    methods: {
      showNavId: function () {
        this.$emit('showNavId', 4)
      },
      returnPage: function () {
        history.go(-1);
      },
      showTitle: function (content_title) {
        this.content_title = content_title;

      },

    },

  }

</script>
<style type="text/css">
  /* import 'mint-ui/lib/style.css'; */

  .login-container {
    height: 100%;
    width: 100%;
  }

  .mint-popup {
    background: #56C1#efeff4F6;
    width: 100%;
    text-align: center;
    height: 30px;
    font-size: 16px;
    color: #ffffff;
  }

  .login-div {
    width: 90%;
    margin: 80px auto 100px auto;
    border-radius: 5px;
  }

  .login-div .logo {
    width: 62%;
    padding-bottom: 126px;
    padding-left: 154px;
  }

  .submit {
    width: 250px;
    height: 40px;
    display: block;
    margin: 0 auto;
    border-radius: 5px;
    font-size: 20px;
    font-weight: bold;
    color: #ffffff;
    outline: none;
  }

  .submit:active {
    background: #FC7171;
  }

  .login {
    margin-top: 30px;
    background-color: #efeff4;
    border: 1px solid #efeff4;
  }

  .register {
    margin-top: 10px;
    background-color: #34F062;
    border: 1px solid #34F062;
  }

  button:disabled {
    background-color: #B9ABAB;
    border: none;
  }

  .agreement {
    margin-top: 10px;
    height: 28px;
    position: relative;
  }

  .agreement .left {
    position: absolute;
    top: 25%;
  }

  .agreement .right {
    position: absolute;
    top: 20%;
    right: 0;
  }

  .right .forget {
    color: #c1c1c1;
  }

  .agreement-text {
    color: #0A81F5;
  }

  .checkbox {
    display: none;
  }

  .checkbox+label {
    background-color: #FFF;
    border: 1px solid #C1CACA;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
    width: 20px;
    height: 20px;
    top: 5px;
    border-radius: 5px;
    display: inline-block;
    position: relative;
    margin-right: 10px;
  }

  .checkbox:checked+label {
    background-color: #ECF2F7;
    border: 1px solid #92A1AC;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05), inset 15px 10px -12px rgba(255, 255, 255, 0.1);
    color: #243441;
  }

  .checkbox:checked+label:after {
    content: '\2714';
    position: absolute;
    top: 0;
    line-height: 22px;
    display: inline-block;
    height: 22px;
    width: 22px;
    color: #758794;
    font-size: 20px;
    color: #73F353;
  }

</style>
