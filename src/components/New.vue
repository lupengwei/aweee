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
                 <img class="mui-media-object mui-pull-left head-img" id="head-img" src="../../static/images/lpw.jpg">
                <div class="mui-media-body">
                   你好！
                  <p class="mui-ellipsis">账号:lupengwei</p>
                </div>
              </a>
            </li>
          </ul>
          <ul class="mui-table-view mui-table-view-chevron">
            <li class="mui-table-view-cell">
              <a href="#User" class="mui-navigate-right">账号与安全</a>
            </li>
          </ul>
          <ul class="mui-table-view mui-table-view-chevron">
            <li class="mui-table-view-cell">
              <a href="#Me" class="mui-navigate-right">我的订单</a>
            </li>
            <li class="mui-table-view-cell">
              <a href="#post" class="mui-navigate-right">偏好设置</a>
            </li>
            <li class="mui-table-view-cell">
              <a href="Find_List" class="mui-navigate-right">系统咨询</a>
            </li>
          </ul>
          <ul class="mui-table-view mui-table-view-chevron">
            <li class="mui-table-view-cell">
              <a href="#about" class="mui-navigate-right">关于小助手 <i class="mui-pull-right update">V1.0</i></a>
            </li>
          </ul>
          <ul class="mui-table-view">
            <li class="">
              <a>
                            <i class="mui-pull-right update"> </i></a>
            </li>
          </ul>

        </div>
        <div>
          <el-popover ref="popover5" placement="top" width="160" v-model="visible2">
            <p>你确定退出当前账号吗？退出后你的订单可能无法正常使用！</p>
            <div style="text-align: right; margin: 0">
              <el-button size="mini" type="text" @click="visible2 = false">取消</el-button>
              <el-button type="primary" size="mini" @click="visible2 = false">确定</el-button>
            </div>
          </el-popover>
          <el-button v-popover:popover5>退出登录</el-button>

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
        value2: true,
        visible2: false,
        nav_active_id: 1
      }
    },
    created: function () {
      this.showNavId();
    },
    mounted() {
      this.windowonload();
    },
    methods: {
      showNavId: function () {
        this.$emit('showNavId', 4)

      },

      showNavId: function (nav_active_id) {
        this.nav_active_id = nav_active_id;
      },
      returnPage: function () {
        history.go(-1);
      },
      windowonload: function () {
        var aLi = document.getElementsByTagName('li');

        for (var i = 0; i < aLi.length; i++) {
          if (i % 2 == 0) {
            console.log(aLi[i].style)
            aLi[i].style.backgroundColor = '#ccc'
          } else {
            aLi[i].style.backgroundColor = ''
          }
        }
      }
    }
  }

</script>

<!--scss-->
<style lang="scss">
  //@import "../../static/scss/News.scss";
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
