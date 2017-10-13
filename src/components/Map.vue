<template>
  <div class="map">
    <header class="mui-bar mui-bar-nav">
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click="returnPage()"></a>
      <h1 class="mui-title" v-text="content_title"></h1>
    </header>

    <div class="container" element-loading-text="拼命加载中" @click="openFullScreen" v-loading.fullscreen.lock="fullscreenLoading">
      <div id="container" tabindex="0"></div>
      <div id='panel'></div>
    </div>
  </div>
</template>

<style>
  #container {
    height: 70%;
    width: 96%;
    margin: 7px;
    border-radius: 3%;
    font: 12px Helvetica, 'Hiragino Sans GB', 'Microsoft Yahei', '微软雅黑', Arial;
  }

  .info-title {
    color: white;
    font-size: 14px;
    background-color: rgba(0, 155, 255, 0.8);
    line-height: 26px;
    padding: 0px 0 0 6px;
    font-weight: lighter;
    letter-spacing: 1px
  }

  .info-content {
    padding: 4px;
    color: #666666;
    line-height: 23px;
  }

  .info-content img {
    float: left;
    margin: 3px;
  }

</style>
<script type="text/javascript">
  setTimeout(() => {
    var map = new AMap.Map('container', {
      resizeEnable: true,
      zoom: 11,
      center: [104.058182, 30.559515]
    });
    var marker = new AMap.Marker({
      position: [104.058182, 30.559515]
    });
    marker.setMap(map);
    marker.on('click', function (e) {
      infowindow.open(map, e.target.getPosition());
    })
    AMap.plugin('AMap.AdvancedInfoWindow', function () {
      var infowindow = new AMap.AdvancedInfoWindow({
        content: '<div class="info-title">成都地铁小助手</div><div class="info-content">' +
          '<img src="../../assets/1234.jpg">' +
          '请你输入你的目的地。<br/>' +
          '<a ">点击查询路线</a></div>',
        offset: new AMap.Pixel(0, -30)
      });
      infowindow.open(map, [104.058182, 30.559515]);
    });
    AMap.plugin(['AMap.ToolBar', 'AMap.Scale', ],
      function () {
        map.addControl(new AMap.ToolBar());

        map.addControl(new AMap.Scale());

      });
    var placeSearch = new AMap.PlaceSearch({ //构造地点查询类
      pageSize: 11,
      pageIndex: 1,
      city: "成都", //城市
      map: map,
      panel: "result"
    });
    //关键字查询
    placeSearch.search('方恒', function (status, result) {});
  })


  export default {
    name: 'map',
    data() {
      return {
        scrollTop: 0,
        content_title: '路线查询',
        loading2: true,
        fullscreenLoading: false
      }
    },
    created: function () {
      this.showNavId();
    },
    methods: {
      showNavId: function () {
        this.$emit('showNavId', 1)
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
    },
    openFullScreen() {
      this.fullscreenLoading = true;
      setTimeout(() => {
        this.fullscreenLoading = false;
      }, 3000);
    }
  }
  // var marker = new AMap.Marker({
  //   position: [116.480983, 39.989628]
  // });
  // marker.setMap(map);
  // // marker.on('click', function (e) {
  //   infowindow.open(map, e.target.getPosition());
  // // })
  // AMap.plugin('AMap.AdvancedInfoWindow', function () {
  //   infowindow = new AMap.AdvancedInfoWindow({
  //     content: '<div class="info-title">高德地图</div><div class="info-content">' +
  //       '<img src="https://webapi.amap.com/images/amap.jpg">' +
  //       '高德是中国领先的数字地图内容、导航和位置服务解决方案提供商。<br/>' +
  //       '<a target="_blank" href = "https://mobile.amap.com/">点击下载高德地图</a></div>',
  //     offset: new AMap.Pixel(0, -30)
  //   });
  //   infowindow.open(map, [116.480983, 39.989628]);
  // })

</script>
