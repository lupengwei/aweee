<template>
  <div class="find">
    <header class="mui-bar mui-bar-nav">
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click="returnPage()"></a>
      <h1 class="mui-title">站点信息</h1>
    </header>
    <div class="container container-list">
      <router-link to="/find/content/1">
        <div @click="rememberScroll" class="mui-card">
          <div class="mui-card-header mui-card-media" style="height:40vw;background-image:url(../../static/images/daohang.jpg)"></div>
          <div class="mui-card-content">
            <div class="mui-card-content-inner">
              <p>锦城广场站台信息</p>
              <p style="color: #333;">点击这里你可以查看具体路径规划...</p>
            </div>
          </div>
          <div class="mui-card-footer">
            <a class="mui-card-link">Like</a>
            <a class="mui-card-link">Read more</a>
          </div>
        </div>
      </router-link>
      <ul id="ul1">
        <li>dfasdf <a href="javascript:;">隐藏</a></li>
        <li>45346 <a href="javascript:;">隐藏</a></li>
        <li>fghfgcvn <a href="javascript:;">隐藏</a></li>
        <li>vcbxcvbc <a href="javascript:;">隐藏</a></li>
        <li>757465867 <a href="javascript:;">隐藏</a></li>
      </ul>
      <router-link to="/find/content/2">
        <div @click="rememberScroll" class="mui-card">
          <div class="mui-card-header mui-card-media" style="height:40vw;background-image:url(../../static/images/cbd.jpg)"></div>
          <div class="mui-card-content">
            <div class="mui-card-content-inner">
              <p>Posted on January 18, 2016</p>
              <p style="color: #333;">这里显示文章摘要，让读者对文章内容有个粗略的概念...</p>
            </div>
          </div>
          <div class="mui-card-footer">
            <a class="mui-card-link">Like</a>
            <a class="mui-card-link">Read more</a>
          </div>
        </div>
      </router-link>

    </div>
  </div>
</template>
<!--js-->
<script>
  /**
   * Created by Administrator on 2017/3/27.
   */
  export default {
    name: 'find',
    data() {
      return {
        content_title: '站点信息'
      }
    },
    created: function () {
      this.showTitle();
      this.$nextTick(function () {
        var ele = window.document.querySelector('.container-list');
        if (ele)
          ele.scrollTop = this.$store.state.findStore.position;
      });
      this.addTiem();
    },

    methods: {
      showTitle: function () {
        this.$emit('showTitle', '发现');
      },
      rememberScroll: function () {
        var scrollTop = document.querySelector('.container').scrollTop;
        this.$store.commit('remberPositionY', scrollTop);
      },

      showNavId: function () {
        this.$emit('showNavId', 2)
      },
      returnPage: function () {
        history.go(-1);
      },
      showTitle: function (content_title) {
        this.content_title = content_title;
      },
      addTiem: function () {
        var aA = document.getElementsByTagName('a');
        // alert(aA.length) 学会函数的调用
        for (var i = 0; i < aA.length; i++) {
          aA[i].onclick = function () {
            this.parentNode.style.display = 'none';
          };
        }
      },
    },

  }

</script>
