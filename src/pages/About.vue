<template>
  <div class="find">
    <header class="mui-bar mui-bar-nav">
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click="returnPage()"></a>
      <h1 class="mui-title" v-text="content_title"></h1>
    </header>
    <div class="about">
      <div class="about-item">
        <p class="about-item-title">关于成都地铁小助手</p>
      </div>
      <div class="auserinfo">

        <p class="auserinfo-nickname"></p>
      </div>

      <div class="about-box">
        <div class="about-item">
          <p class="about-item-title"></p>
          <p class="about-item-content">成都地铁运营有限公司的服务宗旨是“心系乘客、科学组织、安全准点、服务社会”。成都地铁运营有限公司将为乘客提供安全、准点、优质、文明、高效的服务。</p>
        </div>
        <div class="about-item">
          <p class="about-item-title">获取地址</p>
        </div>

        <div class="about-item">
          <p class="about-item-title">技术感谢</p>
          <p class="about-item-content">初心想开发基于vue的cnode社区，也是借此学习和熟悉vue2.x，也可以随意设计社区界面。感谢<a href="https://cnodejs.org/">cnodejs</a>社区提供的api接口，在此也感谢之前已经基于vue开过cnode社区的开发人员，因为也有借鉴他们的代码实现.以下人员特别感谢开源代码，</p>
        </div>
        <div class="about-item">
          <p class="about-item-title">当前版本</p>
          <p class="about-item-content ">V1.0.</p>
        </div>
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
        content_title: '关于'
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

  }

</script>

<style lang="css" scoped>
  .about {
    height: 100%;
    margin-top: 43px;
  }

  .top-box {
    position: static;
  }

  .auserinfo {
    position: relative;
    width: 100%;
    height: 150px;
    background: #444;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .auserinfo-avatar {
    display: block;
    width: 80px;
    height: 80px;
    margin: 10px;
    margin-top: 25px;
    border-radius: 50%;
  }

  .auserinfo-nickname {
    color: #fff;
    font-size: 14px;
  }

  .ausermotto {
    margin-top: 5px;
  }

  .about-item {
    padding: 5px 15px;
  }

  .about-item-title {
    display: block;
    font-size: 14px;
    line-height: 30px;
  }

  .about-item-content {
    margin-top: 5px;
    display: block;
    text-indent: 20px;
    color: #333;
    font-size: 13px;
  }

  .about-item-content a {
    text-decoration: underline;
    color: #80bd01;
  }

  .link {
    color: #80bd01;
    text-decoration: underline;
  }

</style>
