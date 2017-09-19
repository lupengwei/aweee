<template>
  <div class="find">
    <header class="mui-bar mui-bar-nav">
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click="returnPage()"></a>
      <h1 class="mui-title" v-text="content_title"></h1>
    </header>
    <!-- <p class="searchBox">
            <b class="iconfont">&#xe61a;</b>
            <input type="text" placeholder="歌手/歌名/专辑名/歌词" v-model="searchKey" @keyup.enter="search(searchKey)">
            <button class="iconfont" @click="search(searchKey)">&#xe601;</button>
        </p> -->
    <div class="ditu">
      <img src="../../static/images/1.jpg" class="tu">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'find',
    data() {
      return {
        scrollTop: 0,
        content_title: '站点'
      }
    },
    created: function () {
      this.showNavId();
    },
    methods: {
      showNavId: function () {
        this.$emit('showNavId', 2)
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

<!--scss-->
<style>
  .ditu {
    overflow: scroll;
    height: 100vh;
    padding-top: 45px;
    padding-bottom: 45px;
  }

  .searchPage {
    padding-top: 55px;
    height: 74vh;
    width: 80%;
    min-width: 80%;
    margin: 0 auto;
    overflow: hidden;
  }

  .searchBox {
    padding-top: 55px;

    margin: 1rem auto 0 auto;
    height: 5vh;
    border: 1px #ccc solid;
    border-radius: 2.5vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .searchBox input {
    border: none;
    flex: 1;
  }

  .searchBox b,
  .searchBox button {
    margin: 0 1rem;
  }

</style>
