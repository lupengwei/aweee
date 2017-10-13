<template>
  <div class="me">
    <header class="mui-bar mui-bar-nav">
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click="returnPage()"></a>
      <h1 class="mui-title" v-text="content_title"></h1>
    </header>
    <!-- <div class="container">
      <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-submenu>
        <el-menu-item index="3"><a href="" target="_blank">订单管理</a></el-menu-item>
      </el-menu>
    </div> -->
  </div>
</template>

<script>
  export default {
    name: 'me',
    data() {
      let selected = "all"
      let display = true
      let orders
      let orders_untreated
      let orders_status
      return {
        scrollTop: 0,
        content_title: '我的订单',
        selected,
        display,
        orders,
        activeIndex: '1',
        activeIndex2: '1',
        orders_untreated,
        orders_status,
        show: 'all'
      }
    },
    created: function () {
      this.showNavId();
    },
    mounted: function () {
      this.changeOrder('orders')
    },
    methods: {

      returnPage: function () {
        history.go(-1);
      },
      showTitle: function (content_title) {
        this.content_title = content_title;
      },
      changeOrder(item) {
        this.$store.dispatch('changeOrder', item)
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    computed: {
      filteredNotes() {
        if (this.show === 'all') {
          return this.notes
        } else if (this.show === 'favorites') {
          return this.notes.filter(note => note.favorite)
        }
      }
    },
  }

</script>
<style>
  .auserinfo {
    margin-top: 43px;
    position: relative;
    width: 100%;
    height: 150px;
    background: #444;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
  }



  .order-container {
    position: absolute;
    top: 40px;
    height: 100%;
    width: 100%;
  }

  .page-part {
    z-index: 99;
    padding-top: 55px;
  }

  .order-list {
    position: relative;
    top: 49px;
    height: calc(100% - 144px);
    overflow: scroll;
  }

  .order-item img {
    width: 100px;
    height: 100px;
    float: left;
  }

  .order-item h4 {
    padding-top: 20px;
    margin-left: 110px;
  }

  .order-item {
    height: 100px;
    position: relative;
    top: 5px;
  }

  .order-item p {
    position: absolute;
    bottom: 10%;
    color: #c1c1c1;
    left: 110px;
  }

  .mint-navbar.is-fixed {
    top: 40px;
  }

  .mint-navbar .mint-tab-item.is-selected {
    margin-bottom: 0;
  }

</style>
