<template>
  <div class="News">
    <header class="mui-bar mui-bar-nav">
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click="returnPage()"></a>
      <h1 class="mui-title" v-text="content_title"></h1>
    </header>
    <div class="container">
      <div class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
        <div class="content_title" style="margin-top: 18px;">
          <h4>业务介绍</h4>
        </div>
        <el-steps :space="300" :active="1" style="margin-top: 16px;">
          <el-step icon="upload" title="在线购票线下取票业务" description="该业务支持在成都地铁小助手APP内，通过首末站查询在线购买单程票，完成购票后生成取票二维码，在您出发站内的网络取票机上进行取票。该业务无需开通，但需要你有第三方支付平台，如：支付宝，微信，银联支付。"></el-step>
        </el-steps>
        <el-steps :space="300" :active="2" title="进行中" style="margin-top: 12px;">
          <el-step icon="edit" title=" 出行信息查询业务" description="该业务可以方便您出行的路线规划，您可以自助查询乘车路径；换乘站点各个站内的设施信息，各个站点的首末班时间点，左右开门等信息该业务无需开通即可使用。"></el-step>
        </el-steps>
        <el-steps :space="300" :active="1" style="margin-top: 16px;">
          <el-step icon="information" title="时刻信息查询" description="该业务通过大数据分析，帮助您规划的出行时间和出行方式，错开人流高峰期，给你最优的出行方案。"></el-step>
        </el-steps>
        <el-steps :space="300" :active="1" style="margin-top: 16px;">
          <el-step icon="menu" title="扫码购票业务" description="该业务可以在站内网络终端上进行扫码购票"></el-step>
        </el-steps>
        <el-steps :space="300" :active="1" style="margin-top: 16px;">

          <el-step icon="warning" title="更多帮助" description="如需更多帮助请联系在线客服或拨打成都地铁小助手客服热线：400-888-888；"></el-step>
        </el-steps>
        <el-button style="margin-top: 23px;" type="info" @click="returnPage()">开始使用</el-button>



      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'News',
    data() {
      return {
        content_title: '帮助',
        active: 0,
        nav_active_id: 3
      }
    },
    created: function () {
      this.showNavId();
    },
    methods: {
      next: function () {
        if (this.active++ > 5) this.active = 0;
      },
      showNavId: function () {
        this.$emit('showNavId', 3)

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


  // export default {

  //   name: 'News',

  //   data() {
  //     return {
  //       scrollTop: 0,

  //       active: 0,
  //       content_title: '帮助',

  //       nav_active_id: 1
  //     }
  //   },
  //   created: function () {
  //     this.showNavId();
  //   },
  //   methods: {
  //    
  //     returnPage: function () {
  //       history.go(-2);
  //     },
  //     showNavId: function () {
  //       this.$emit('showNavId', 3)

  //     },
  //     openMenu: function () {
  //       this.is_open_menu = !this.is_open_menu;
  //     },
  //     showNavId: function (nav_active_id) {
  //       this.nav_active_id = nav_active_id;
  //     },
  //     returnPage: function () {
  //       history.go(-1);
  //     }

  //   }
  // }

</script>

<!--scss-->
<style lang="scss">
  @import "../../static/scss/News.scss";
  @import url("//unpkg.com/element-ui@1.4.4/lib/theme-default/index.css");
  .buozhou {
    padding-top: 50px;
  }


  .title {
    flex-flow: 1;
  }

  .line {
    border-bottom: 2px solid #300;
  }

</style>
