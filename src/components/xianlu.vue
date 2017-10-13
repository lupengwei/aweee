<template>
  <div class="find">
    <header class="mui-bar mui-bar-nav">
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click="returnPage()"></a>
      <h1 class="mui-title" v-text="content_title"></h1>
    </header>
    <div id="app">
      <!-- <div id="mapContainer"></div>
      <div id="tip">
        <div id="info">初始化加载地图时，center及level属性缺省，地图默认显示用户所在城市范围</div>
      </div> -->

      <div class="amap-wrapper">
        <el-amap :vid="'amap-vue'"></el-amap>
        <el-amap vid="amapDemo" :zoom="zoom" :center="center">
          <el-amap-info-window v-for="window in windows" :position="window.position" :content="window.content" :open="window.open"></el-amap-info-window>
        </el-amap>
        <div class="toolbar">
          <span v-if="loaded">
          location: lng = {{ lng }} lat = {{ lat }}
        </span>
          <span v-else>正在定位</span>
        </div>
      </div> -->
    </div>
    <div class="sosou1">
      <div class="xuan">
        <div class="block">
          <span class="demonstration"></span>

          <el-cascader placeholder="请选择起点" :options="options" filterable></el-cascader>
        </div>
      </div>
      <!-- <i class="">
          <img src="../../static/images/27.jpg" class="change1">
        </i> -->
      <div class="xuan1">
        <div class="block">
          <span class="demonstration"></span>

          <el-cascader placeholder="请选择终点" :options="options" filterable="" filterable change-on-select></el-cascader>
        </div>
        <router-link to="/Rote">
          <button class="btn">查询</button>
        </router-link>

      </div>
    </div>

  </div>
</template>

<script>
  var map = new AMap.Map('container', {
    resizeEnable: true,
    zoom: 19,
    center: [104.065735, 30.659462],
    mapStyle: 'amap://styles/d6bf8c1d69cea9f5c696185ad4ac4c86'
    //前往创建自定义地图样式：http://lbs.amap.com/dev/mapstyle/index
  });
  var map = new AMap.Map('mapContainer', {
    resizeEnable: true
  });
  //地图中添加地图操作ToolBar插件
  map.plugin(['AMap.ToolBar'], function () {
    //设置地位标记为自定义标记
    var toolBar = new AMap.ToolBar();
    map.addControl(toolBar);
  });
  module.exports = {
    data() {
      let self = this;
      return {
        center: [121.59996, 31.197646],
        lng: 0,
        lat: 0,
        loaded: false,
        plugin: [{
          pName: 'Geolocation',
          events: {
            init(o) {
              // o 是高德地图定位插件实例
              o.getCurrentPosition((status, result) => {
                if (result && result.position) {
                  self.lng = result.position.lng;
                  self.lat = result.position.lat;
                  self.center = [self.lng, self.lat];
                  self.loaded = true;
                  self.$nextTick();
                }
              });
            }
          }
        }]
      };
    }
  };
  //   export default {
  //     name: 'find',
  //     data() {
  //       return {
  //         scrollTop: 0,
  //         content_title: '地图买票',
  //         msg: 'vue-amap向你问好！'
  //       }
  //     },
  //     created: function () {
  //       this.showNavId();
  //     },
  //     methods: {
  //       showNavId: function () {
  //         this.$emit('showNavId', 1)
  //       },
  //       returnPage: function () {
  //         history.go(-1);
  //       },
  //       showTitle: function (content_title) {
  //         this.content_title = content_title;
  //       }
  //     },
  //     activated: function () {
  //       var ele = document.querySelector('.container-list');
  //       //记录一下滚动条的位置
  //       ele && (ele.scrollTop = this.scrollTop);
  //     },
  //     deactivated: function () {
  //       var ele = document.querySelector('.container-list');
  //       //记录一下滚动条的位置
  //       ele && (this.scrollTop = ele.scrollTop);
  //     }
  //   }

</script>

<!--scss-->
<style>
  /* .amap-wrapper {
    width: 500px;
    height: 500px;
  } */

  .sosou1 {

    padding-left: 4px;
    width: 102%;
    height: 160px;
    background: #ffd;
    border-radius: 3%;
  }

  .tip {
    height: 45px;
    background-color: #fff;
    padding-left: 10px;
    padding-right: 10px;
    border: 1px solid #969696;
    position: absolute;
    font-size: 12px;
    right: 10px;
    bottom: 20px;
    border-radius: 3px;
    line-height: 45px;
  }

</style>
