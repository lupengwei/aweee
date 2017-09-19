<template>
  <div class="new">
    <header class="mui-bar mui-bar-nav">
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click="returnPage()"></a>
      <h1 class="mui-title" v-text="content_title"></h1>
    </header>
    <div class="container">


      <div class="mui-scroll-wrapper">
        <div class="denglu">
        <div class="portrait">
      
        
        </div>
        </div>
        <div class="">
          <ul class="mui-table-view mui-table-view-chevron">
            <li class="mui-table-view-cell mui-media">
              <a class="mui-navigate-right" href="#Login">
                <!-- <img class="mui-media-object mui-pull-left head-img" id="head-img" src="../static/images/lpw.jpg"> -->-->
                <div class="mui-media-body">
                  Hello chengdu
                  <p class="mui-ellipsis">账号:lupengwei</p>
                </div>
              </a>
            </li>
          </ul>
          <ul class="mui-table-view mui-table-view-chevron">
            <li class="mui-table-view-cell">
              <a href="#account" class="mui-navigate-right">账号与安全</a>
            </li>
          </ul>
          <ul class="mui-table-view mui-table-view-chevron">
            <li class="mui-table-view-cell">
              <a href="/notifications" class="mui-navigate-right">新消息通知</a>
            </li>
            <li class="mui-table-view-cell">
              <a href="#privacy" class="mui-navigate-right">设置</a>
            </li>
            <li class="mui-table-view-cell">
              <a href="#general" class="mui-navigate-right">通用</a>
            </li>
          </ul>
          <ul class="mui-table-view mui-table-view-chevron">
            <li class="mui-table-view-cell">
              <a href="#about" class="mui-navigate-right">关于 <i class="mui-pull-right update">V1.0</i></a>
            </li>
          </ul>
          <ul class="mui-table-view">
            <li class="mui-table-view-cell">
              <a>退出登录</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</template>


<script>
  export default {
    name: 'new',
    data() {
      return {
        content_title: '我的',

        nav_active_id: 1
      }
    },
    created: function () {
      this.showNavId();
    },
    methods: {
      showNavId: function () {
        this.$emit('showNavId', 4)

      },
      openMenu: function () {
        this.is_open_menu = !this.is_open_menu;
      },
      showNavId: function (nav_active_id) {
        this.nav_active_id = nav_active_id;
      },
      returnPage: function () {
        history.go(-1);
      }
    }
  }

</script>

<!--scss-->
<style lang="scss">
  //@import "../../static/scss/news.scss";
  .buozhou {
    padding-top: 50px;
  }
  .portrait {
    width: 80px;
    height: 80px;
    background: url(../../static/images/lpw.jpg) no-repeat center;
        background-size: cover;
    border-radius: 79px;
    margin: 45px 39%;
}

  .title {
    flex-flow: 1;
  }

  .denglu {
    height: 251px;
    width: 100%;
    padding-top: 9px;
  }

  .line {
    border-bottom: 2px solid #300;
  }

</style>
