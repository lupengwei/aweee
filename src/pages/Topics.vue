<template>
  <div class="restContainer">
    <header class="mui-bar mui-bar-nav">
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click="returnPage()"></a>
      <h1 class="mui-title" v-text="content_title"></h1>
    </header>
    <head-top head-title="重置密码" goBack="true"></head-top>
    <form class="restForm">
      <section class="input_container phone_number">
        <input type="text" placeholder="账号" name="phone" maxlength="11" v-model="phoneNumber" @input="inputPhone">
        <button @click.prevent="getVerifyCode" :class="{right_phone_number:rightPhoneNumber}" v-show="!computedTime">获取验证码</button>
        <button @click.prevent v-show="computedTime">已发送({{computedTime}}s)</button>
      </section>
      <section class="input_container">
        <input type="text" placeholder="旧密码" name="oldPassWord" v-model="oldPassWord">
      </section>
      <section class="input_container">
        <input type="text" placeholder="请输入新密码" name="newPassWord" v-model="newPassWord">
      </section>
      <section class="input_container">
      </section>
      <section class="input_container captcha_code_container">
        <input type="text" placeholder="验证码" name="mobileCode" maxlength="6" v-model="mobileCode">
        <div class="img_change_img">
          <img v-show="captchaCodeImg" :src="captchaCodeImg">
          <div class="change_img" @click="getCaptchaCode">
            <p>看不清</p>
            <p>换一张</p>
          </div>
        </div>
      </section>
    </form>
    <div class="login_container" @click="resetButton">确认修改</div>
    <alert-tip v-if="showAlert" :showHide="showAlert" @closeTip="closeTip" :alertText="alertText"></alert-tip>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        content_title: '修改密码',
        phoneNumber: null, //电话号码
        oldPassWord: null,
        newPassWord: null, //新密码
        rightPhoneNumber: false, //输入的手机号码是否符合要求
        captchaCodeImg: null, //验证码地址
        mobileCode: null, //短信验证码
        computedTime: 0, //倒数记时
        showAlert: false, //显示提示组件
        alertText: null, //提示的内容
        accountType: 'mobile', //注册方式
        captchaCodeImg: null,
      }
    },
    // components: {

    // },
    // created() {
    //   this.getCaptchaCode()
    // },
    methods: {
      showNavId: function () {
        this.$emit('showNavId', 2)
      },
      returnPage: function () {
        history.go(-1);
      },
      showTitle: function (content_title) {
        this.content_title = content_title;
      },
    },
    //   //判断输入的电话号码
    //   inputPhone() {
    //     if (/.+/gi.test(this.phoneNumber)) {
    //       this.rightPhoneNumber = true;
    //     } else {
    //       this.rightPhoneNumber = false;
    //     }
    //   },
    //获取验证吗
    // async getVerifyCode() {
    //   if (this.rightPhoneNumber) {
    //     this.computedTime = 30;
    //     //倒计时
    //     this.timer = setInterval(() => {
    //       this.computedTime--;
    //       if (this.computedTime == 0) {
    //         clearInterval(this.timer)
    //       }
    //     }, 1000)
    //     //判断用户是否存在
    //     let res = await checkExsis(this.phoneNumber, this.accountType);
    //     //判断返回的信息是否正确，用户是否注册
    //     if (res.message) {
    //       this.showAlert = true;
    //       this.alertText = res.message;
    //       return
    //     } else if (!res.is_exists) {
    //       this.showAlert = true;
    //       this.alertText = '您输入的手机号尚未绑定';
    //       return
    //     }
    //     //获取验证信息
    //     let getCode = await mobileCode(this.phoneNumber);
    //     if (getCode.message) {
    //       this.showAlert = true;
    //       this.alertText = getCode.message;
    //       return
    //     }
    //     this.validate_token = getCode.validate_token;
    //   }
    // },
    // async getCaptchaCode() {
    //   let res = await getcaptchas();
    //   this.captchaCodeImg = res.code;
    // },
    //重置密码
    async resetButton() {
      if (!this.phoneNumber) {
        this.showAlert = true;
        this.alertText = '请输入正确的账号';
        return
      } else if (!this.oldPassWord) {
        this.showAlert = true;
        this.alertText = '请输入旧密码';
        return
      } else if (!this.newPassWord) {
        this.showAlert = true;
        this.alertText = '请输入新密码';
        return
        this.showAlert = true;
        this.alertText = '请输确认密码';
        return
      } else if (this.newPassWord !== this.confirmPassWord) {
        this.showAlert = true;
        this.alertText = '两次输入的密码不一致';
        return
      } else if (!this.mobileCode) {
        this.showAlert = true;
        this.alertText = '请输验证码';
        return
      }
      // 发送重置信息
      // let res = await changePassword(this.phoneNumber, this.oldPassWord, this.newPassWord, this.confirmPassWord, this
      //   .mobileCode);
      // if (res.message) {
      //   this.showAlert = true;
      //   this.alertText = res.message;
      //   this.getCaptchaCode()
      //   return
      // } else {
      //   this.showAlert = true;
      //   this.alertText = '密码修改成功';
      // }
    },
    closeTip() {
      this.showAlert = false;
    }

  }

</script>

<style lang="scss" scoped>
  // @import 'src/style/mixin';
  .restContainer {
    padding-top: 1.95rem;
  }

  $blue: #3190e8;
  $bc: #e4e4e4;
  $fc:#fff; // 背景图片地址和大小
  @mixin bis($url) {
    background-image: url($url);
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

  @mixin borderRadius($radius) {
    -webkit-border-radius: $radius;
    -moz-border-radius: $radius;
    -ms-border-radius: $radius;
    -o-border-radius: $radius;
    border-radius: $radius;
  } //定位全屏
  @mixin allcover {
    position: absolute;
    top: 0;
    right: 0;
  } //定位上下左右居中
  @mixin center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  } //定位上下居中
  @mixin ct {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  } //定位上下居中
  @mixin cl {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  } //宽高
  @mixin wh($width, $height) {
    width: $width;
    height: $height;
  } //字体大小、行高、字体
  @mixin font($size, $line-height, $family: 'Microsoft YaHei') {
    font: #{$size}/#{$line-height} $family;
  } //字体大小，颜色
  @mixin sc($size, $color) {
    font-size: $size;
    color: $color;
  }


  .restForm {
    background-color: #fff;
    margin-top: .6rem;
    .input_container {
      display: flex;
      justify-content: space-between;
      padding: .6rem .8rem;
      border-bottom: 1px solid #f1f1f1;

      button {

        font-family: Helvetica Neue, Tahoma, Arial;
        padding: .28rem .4rem;
        border: 1px;
        border-radius: 0.15rem;
      }
      .right_phone_number {
        background-color: #4cd964;
      }
    }
    .phone_number {
      padding: .3rem .8rem;
    }
    .captcha_code_container {
      height: 2.2rem;
      .img_change_img {
        display: flex;
        align-items: center;
        img {

          margin-right: .2rem;
        }
        .change_img {
          display: flex;
          flex-direction: 'column';
          flex-wrap: wrap;
          width: 2rem;
          justify-content: center;
        }
      }
    }
  }

  .captcha_code_container {
    height: 2.2rem;
    .img_change_img {
      display: flex;
      align-items: center;
      img {

        margin-right: .2rem;
      }
      .change_img {
        display: flex;
        flex-direction: 'column';
        flex-wrap: wrap;
        width: 2rem;
        justify-content: center;
      }
    }
  }

  .login_container {
    margin: 1rem .5rem;

    background-color: #4cd964;
    padding: .5rem 0;
    border: 1px;
    border-radius: 0.15rem;
    text-align: center;
  }

</style>
