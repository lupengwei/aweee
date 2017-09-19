<template>
  <div id="app" class="mui-off-canvas-wrap mui-draggable mui-scalable">
    <!--菜单部分-->



    <!--/菜单部分-->
    <!--主体部分-->
    <div class="mui-inner-wrap mui-transitioning">
      <nav class="mui-bar mui-bar-tab">
        <a class="mui-tab-item" href="#/" :class="{'mui-active':nav_active_id == 1}" @click="nav_active_id = 1">
          <span class="mui-icon mui-icon-home"></span>
          <span class="mui-tab-label">首页</span>
        </a>
        <a class="mui-tab-item" href="#/find" :class="{'mui-active':nav_active_id == 2}" @click="nav_active_id = 2">
          <span class="mui-icon mui-icon-eye"></span>
          <span class="mui-tab-label">地图</span>
        </a>
        <a class="mui-tab-item" href="#/news" :class="{'mui-active':nav_active_id == 3}" @click="nav_active_id = 3">
          <span class="mui-icon mui-icon-email"></span>
          <span class="mui-tab-label">帮助</span>
        </a>
        <a class="mui-tab-item" href="#/new" :class="{'mui-active':nav_active_id == 4}" @click="nav_active_id = 4">
          <span class="mui-icon mui-icon-contact"></span>
          <span class="mui-tab-label">我的</span>
        </a>
      </nav>
      <transition>
        <keep-alive>
          <router-view v-on:showNavId="showNavId"></router-view>
        </keep-alive>
      </transition>
    </div>
    <!--/主体部分-->

  </div>
</template>

<!--js-->
<script>
  export default {
    name: 'app',
    data: function () {
      return {
        is_open_menu: false,
        nav_active_id: 1
      }
    },
    methods: {
      openMenu: function () {
        this.is_open_menu = !this.is_open_menu;
      },
      showNavId: function (nav_active_id) {
        this.nav_active_id = nav_active_id;
      }
    }
  }

</script>
<style lang="scss">
  @import "../static/scss/app.scss";

  .touxiang {
    height: 80px;
  }

</style>
