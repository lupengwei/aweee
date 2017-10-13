<template>
  <div class="find">
    <header class="mui-bar mui-bar-nav">
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click="returnPage()"></a>
      <h1 class="mui-title" v-text="content_title"></h1>
    </header>
    <div class="dialog">
      <ul class="mui-table-view mui-table-view-chevron">
        <li class="mui-table-view-cell">
          <a href="#Topics" class="mui-navigate-right">修改密码</a>
        </li>
      </ul>
      <ul class="mui-table-view mui-table-view-chevron">
        <li class="mui-table-view-cell">
          <a href="#notfound" class="mui-navigate-right">实名认证</a>
        </li>
      </ul>
      <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10" class="list">
        <li>
          <mt-checklist title="权限设置" v-model="settle" :options="settleList" align="right"></mt-checklist>
        </li>
        <li>
          <p class="title">
            设置系统功能
            <span v-text="type"></span>
            <ul class="mui-table-view">
              <li class="mui-table-view-cell">
                <a>保留数据<i class="mui-pull-right update"> <el-switch v-model="value2" on-color="#13ce66" off-color="#ff4949">
              </el-switch></i></a>
              </li>
            </ul>
            <ul class="mui-table-view">
              <li class="mui-table-view-cell">
                <a>多平台同时在线<i class="mui-pull-right update"> <el-switch v-model="value3" on-color="#13ce66" off-color="#ff4949">
              </el-switch></i></a>
              </li>
            </ul>
          </p>
        </li>
      </ul>
    </div>
  </div>
  </div>
</template>

<script>
  export default {
    name: 'find',
    data() {
      return {
        scrollTop: 0,
        content_title: '账户与安全',
        time: '20',
        sendMsgDisabled: false,
        phonenumber: '',
        message: '',
        writeinfo: '',
        value2: true,
        value3: false,
        info: false,
        active1: {
          select: false
        },
        active2: {
          select: false
        }
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
      user() {
        var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
        if (myreg.test(this.phonenumber)) {
          console.log(this.phonenumber);
          this.$refs.login.disabled = false
          this.$refs.login.className = 'red'
        } else {
          this.$refs.login.className = 'check'
          this.$refs.login.disabled = true
        }
      },
      check_message() {
        if (this.writeinfo === this.message) {
          this.info = false
          this.$refs.checklogin.disabled = false
        } else {
          this.info = true
        }
      },
      send_message() {
        this.$refs.login.disabled = true;
        this.$refs.login.className = 'check'
        let me = this;
        me.sendMsgDisabled = true;
        let interval = window.setInterval(function () {
          if ((me.time--) <= 0) {
            me.time = 20;
            me.sendMsgDisabled = false;
            me.$refs.login.className = 'red';
            me.$refs.login.disabled = false;
            me.info = false
            window.clearInterval(interval);
          }
        }, 1000);
        var codes = [];
        for (var i = 48; i < 57; codes.push(i), i++);
        for (var i = 60; i < 90; codes.push(i), i++);
        for (var i = 97; i < 122; codes.push(i), i++);
        var arr = [];
        for (var i = 0; i < 4; i++) { //从0-61之间取随机数
          var index = Math.floor(Math.random() * (61 - 0 + 1) + 0);
          var char = String.fromCharCode(codes[index]);
          arr.push(char);
        }
        this.message = arr.join('');
        console.log(this.message);
        this.info = true
      },
      choose1() {
        this.active1.select = !this.active1.select
        this.active2.select = false
      },
      choose2() {
        this.active2.select = !this.active2.select
        this.active1.select = false
        console.log(this.phonenumber);
      },
      close() {
        this.$router.push({
          path: '/'
        })
      },
      login() {
        var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
        if (this.phonenumber.length == 0) {
          alert('请输入手机号码！');
        } else if (!myreg.test(this.phonenumber)) {
          alert('请输入有效的手机号！')
        } else {
          this.$store.commit('checking')
          this.$router.push({
            path: '/'
          })
        }

      }

    }
  }

</script>

<!--scss-->
<style>
  .dialog {
    position: absolute;
    /* z-index: 100; */
    top: 45px;
    bottom: 78px;
    width: 100%;
    background: rgba(18, 161, 161, 0.01);
  }

  * {
    margin: 0;
    padding: 0;
  }

  body {
    background: #fff;
  }

  button {
    border: none;
    outline: none;
    background-color: #fff;
  }

  .input {
    display: block;
    width: 80%;
    height: 25px;
    padding-top: 10px;
    padding-bottom: 10px;
    margin: 0 auto;
    position: relative;
  }

  .input:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 1px;
    transform: scaleY(.5);
    background-color: #8A8A8A;
  }

  input {
    width: 70%;
    height: 25px;
    line-height: 25px;
    text-indent: 40px;
    margin: 0 auto;
    border: none;
    outline: none;
  }

  .check {
    display: block;
    width: 50px;
    height: 25px;
    float: right;
    color: #fff;
    background-color: #BFBFBF;
    border-radius: 3px;
  }

  .red {
    display: block;
    width: 50px;
    height: 25px;
    float: right;
    color: #fff;
    background-color: red;
  }

  .loading {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    /*background-color:red;*/
  }

  .close {
    width: 25px;
    height: 25px;
    margin-top: 10px;
    margin-left: 10px;
  }

  .logo1 {
    display: block;
    width: 100%;
    height: 50px;
    padding-top: 50px;
    padding-bottom: 50px;
    /*background-color:red;*/
  }

  .logo img {
    display: block;
    width: 50px;
    height: 50px;
    border-radius: 10px;
    margin: 0 auto;
  }

  .phone1 {
    background: url('../assets/phone.png') no-repeat;
  }

  .shield {
    background: url('../assets/shield.png') no-repeat;
  }

  .phone.select {
    background: url('../assets/phoneselect.png') no-repeat;
  }

  .shield.select {
    background: url('../assets/shieldselect.png') no-repeat;
  }

  .login {
    width: 80%;
    height: 40px;
    line-height: 40px;
    display: block;
    margin: 0 auto;
    margin-top: 25px;
    border-radius: 5px;
    font-size: 17px;
    color: #fff;
    background-color: #ff2d2d;
  }

  .use {
    margin: 0;
    padding: 0;
    display: block;
    margin: 10px auto;
    width: 80%;
    height: 30px;
    line-height: 30px;
    color: #8A8A8A;
    text-align: center;
  }

  .others {
    display: block;
    margin: 0 auto;
    margin-top: 100px;
    width: 60%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    /*background-color: red;*/
    color: #8A8A8A;
    position: relative;
  }

  .loading .others::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    right: 75%;
    height: 1px;
    transform: scaleY(.5);
    background-color: #8a8a8a;
  }

  .loading .others::after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    left: 75%;
    height: 1px;
    transform: scaleY(.5);
    background-color: #8a8a8a;
  }

  .methods li {
    flex: 1;
    list-style: none;
  }

  .methods li img {
    display: block;
    margin: 0 auto;
    margin-top: 10px;
    height: 30px;
    width: 30px;
  }

  .methods {
    display: flex;
    width: 60%;
    height: 60px;
    margin: 0 auto;
  }

  .loading .message {
    display: block;
    margin: 0 auto;
    height: 40px;
    line-height: 40px;
    border-radius: 5px;
    color: white;
    opacity: .5;
    background-color: black;
  }

</style>
