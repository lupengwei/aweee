<style lang="css" scoped>


  .error {
    width: 200px;
    height: 200px;
    margin: 120px auto 10px auto;
    background: url(../assets/error.jpg) no-repeat;
    background-size: 100%;
    background-position: -10px center;
  }

  .etext {
    text-align: center;
    color: #555;
  }

</style>
<template>
  <div class="find">
    <header class="mui-bar mui-bar-nav">
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click="returnPage()"></a>
      <h1 class="mui-title" v-text="content_title"></h1>
    </header>

    <div class="notfound">
      <div class="error"></div>
      <div class="etext">页面不存在！</div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'find',
    data() {
      return {
        scrollTop: 0,
        content_title: '页面不存在'
      }
    },
    created: function () {
      this.showNavId();
    },
    methods: {
      showNavId: function () {
        this.$emit('showNavId', )
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
