<template>
  <div class="user">
    <header class="mui-bar mui-bar-nav">
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click="returnPage()"></a>
      <h1 class="mui-title" v-text="content_title"></h1>
    </header>
    <div class="user1">
      <form data-v-ff83a60c="" class="loginForm">
        <section data-v-ff83a60c="" class="input_container"><input data-v-ff83a60c="" type="text" placeholder="账号"></section>
        <section data-v-ff83a60c="" class="input_container"><input data-v-ff83a60c="" type="password" placeholder="密码">
          <div data-v-ff83a60c="" class="button_switch">
            <div data-v-ff83a60c="" class="circel_button"></div> <span data-v-ff83a60c="">abc</span> <span data-v-ff83a60c="">...</span></div>
        </section>
        <section data-v-ff83a60c="" class="input_container captcha_code_container"><input data-v-ff83a60c="" type="text" placeholder="验证码" maxlength="4">
          <div data-v-ff83a60c="" class="img_change_img">
            <div data-v-ff83a60c="" class="change_img">
              <p data-v-ff83a60c="">看不清</p>
              <p data-v-ff83a60c="">换一张</p>
            </div>
          </div>
        </section>
      </form>
    </div>
  </div>
</template>

<script>
  import {
    mapGetters
  } from "vuex"
  export default {
    name: 'find',
    data() {
      return {
        scrollTop: 0,
        content_title: '密码登录',

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
      }
    },
    activated: function () {
      var ele = document.querySelector('.container-list');
      //记录一下滚动条的位置
      ele && (ele.scrollTop = this.scrollTop);
    },
    deactivated: function () {
      var ele = document.querySelector('.container-list');
      //记录一下滚动条的位置
      ele && (this.scrollTop = ele.scrollTop);
    }
  }

</script>

<style lang="css" scoped>
  .user {
    height: 100%;
    margin-top: 88px;
  }

  .input_container[data-v-ff83a60c] {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: .6rem .8rem;
    border-bottom: 1px solid #f1f1f1;
  }

  .user1 {
    height: 100%;
    margin-top: 88px;
  }

  .top-box {
    position: static;
  }

  loginForm[data-v-ff83a60c] {
    background-color: #fff;
    margin-top: .6rem;
  }

</style>
