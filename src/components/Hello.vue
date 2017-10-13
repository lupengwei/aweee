<template>
  <div class="hello">
    <header class="mui-bar mui-bar-nav">
      <a class="mui-action-back mui-icon  mui-pull-left"></a>
      <h1 class="mui-title" v-text="content_title"></h1>
    </header>
    <div class="block">
      <span class="demonstration">默认 Hover 指示器触发</span>
      <el-carousel height="300px">
        <el-carousel-item>
          <div class="mui-slider-item mui-slider-item-duplicate">
            <a href="http://cd.bendibao.com/traffic/201796/92525.shtm">
              <img src="../../static/images/q1.jpg">
              <p class="mui-slider-title">双流机场下飞机后怎么走到地铁站</p>
            </a>
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="mui-slider-item">
            <a href="http://cd.bendibao.com/tour/2017216/89872.shtm">
              <img src="../../static/images/q2.jpg">
              <p class="mui-slider-title">2017西岭雪山优惠门票价格及购买指南</p>
            </a>
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="mui-slider-item">
            <a href="http://cd.bendibao.com/traffic/201796/92524.shtm">
              <img src="../../static/images/q3.jpg">
              <p class="mui-slider-title">成都地铁10号线公交接驳站点及线路</p>
            </a>
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="mui-slider-item">
            <a href="http://cd.bendibao.com/ditie/">
              <img src="../../static/images/q4.jpg">
              <p class="mui-slider-title">成都地铁14号线即将运用</p>
            </a>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="sosou">
      <div class="xuan">
        <div class="block">
          <span class="demonstration"></span>
          <el-cascader placeholder="请搜素起点" :options="options" filterable></el-cascader>
        </div>
      </div>
      <div class="back">
        <i class="el-icon-arrow-down"></i>

      </div>
      <div class="back">
        <i class="el-icon-arrow-down"></i>

      </div>
      <div class="xuan">
        <div class="block">
          <span class="demonstration"></span>
          <el-cascader placeholder="请搜索终点" :options="options" filterable="" filterable change-on-select></el-cascader>
        </div>
        <router-link to="/Rote">
          <button class="btn">查询</button>
        </router-link>
      </div>
    </div>
    <a href=javascript:window.open( "www.sina.com.cn")>新浪</a>
    <div class="main-product">
      <router-link to="/contents/4" class="product-item">
        <img src="../../static/images/222.jpg" class="product-img" alt="" />
        <span class="product-span">扫码购票</span>
      </router-link>
      <router-link to="/Map" class="product-item">
        <img src="../../static/images/22.jpg" class="product-img" alt="" />
        <span class="product-span">在线导航</span>
      </router-link>
      <router-link to="/xianlu" class="product-item">
        <img src="../../static/images/33.jpg" class="product-img" alt="" />
        <span class="product-span">线路规划</span>
      </router-link>
      <router-link to="/Find_List" class="product-item">
        <img src="../../static/images/44.jpg" class="product-img" alt="" />
        <span class="product-span">站点信息</span>
      </router-link>
    </div>
  </div>
  </div>
</template>

<script>
  export default {
    name: 'hello',
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
      },
      handleChange(value) {
        console.log(value);
      }
      // shoufei: function (num2) {

      //   num2 = num1 * dajia;
      // }
    },
    data() {
      return {
        num1: 1,
        scrollTop: 0,
        dajia: 7,
        content_title: '成都地铁助手',
        num2: 0,
        options: [{
            value: 'yihaoxian',
            label: '1号线',
            children: [{
                value: 'shengxianhu',
                label: '升仙湖',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },

              {
                value: 'renmingbeilu',
                label: '人民北路',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: 'wenshuyuan',
                label: '文殊院',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: 'luomashi',
                label: '骡马市',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: 'tianfuguangchang',
                label: '天府广场',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: 'jingjangbinguan',
                label: '锦江宾馆',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              }, {
                value: 'huaxiba',
                label: '华西坝',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: 'shengtiyuguan',
                label: '省体育馆',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: 'nijiaqiao',
                label: '倪家桥',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: 'tongxinling',
                label: '桐杺林',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: 'huochenanzhan',
                label: '火车南站',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: 'gaoxinzhan',
                label: '高薪站',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: 'jinrongcheng',
                label: '金融城',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: 'fuhuayuan',
                label: '孵化园',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: 'jinchengguangchang',
                label: '锦城广场',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: 'shijicheng',
                label: '世纪城',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: 'tianfusanjie',
                label: '天府三街',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: 'tianfuwujie',
                label: '天府五街',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: 'huafudadao',
                label: '华府大道',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: 'sihe',
                label: '四河',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: 'guangdu',
                label: '广都',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: '',
                label: '',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: '',
                label: '',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: '',
                label: '',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: '',
                label: '',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: '',
                label: '',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: '',
                label: '',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: '',
                label: '',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },

            ],

          },
          {
            value: 'erhaoxian',
            label: '2号线',
            children: [{
                value: 'shenxipugxianhu',
                label: '犀浦',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },

              {
                value: 'tianhelu',
                label: '天河路',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: 'baicaolu',
                label: '百草路',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: 'jingzhouli',
                label: '金州路',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: 'jinkebeilu',
                label: '金科北路',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: 'yingbidadao',
                label: '迎宾大道',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              }, {
                value: 'chadianzikeyunzhan',
                label: '茶店子客运站',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: 'yangxilijiao',
                label: '羊犀立交',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: 'yipingtianxia',
                label: '一品天下',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: 'shuhandonglu',
                label: '蜀汉东路',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: 'baiguolin',
                label: '白果林',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: 'gaoxinzhan',
                label: '中医大省医院',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: 'jinrongcheng',
                label: '通惠门',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: 'fuhuayuan',
                label: '人民公园',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: 'jinchengguangchang',
                label: '天府广场',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: 'shijicheng',
                label: '春熙路',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: 'tianfusanjie',
                label: '东门大桥',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: 'tianfuwujie',
                label: '牛王庙',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: 'huafudadao',
                label: '牛市口',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: 'sihe',
                label: '塔子施公园',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: 'guangdu',
                label: '成都东客站',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: '',
                label: '成渝立交',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: '',
                label: '惠王陵',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: '',
                label: '洪河',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: '',
                label: '成都行政学院',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: '',
                label: '大面铺',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: '',
                label: '连山坡',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: '',
                label: '书房'
              },
              {
                value: '',
                label: '龙平路'
              }, {
                value: '',
                label: '龙泉驿'
              },

            ],

          },
          {
            value: 'sanhaoxian',
            label: '3号线',
            children: [{
                value: 'junquzongyiyuan',
                label: '军区总医院',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },

              {
                value: 'xiongmaodadao',
                label: '熊猫大道',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: 'wenshuyuan',
                label: '动物园',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: 'zhaojueshinanlu',
                label: '昭觉市南路',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: 'simaqiao',
                label: '驷马桥',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: 'lijiatuo',
                label: '李家沱',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              }, {
                value: 'qianfenglu',
                label: '前锋路',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: 'hongxingqiao',
                label: '红星桥',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: 'shieryiyuan',
                label: '市二医院',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: 'chunxilu',
                label: '春熙路',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: 'xninanmenf',
                label: '新南门',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: 'gaoxinzhan',
                label: '磨子桥',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: 'jinrongcheng',
                label: '省体育馆',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: 'fuhuayuan',
                label: '衣冠庙',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: 'jinchengguangchang',
                label: '高升桥',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: 'shijicheng',
                label: '红牌楼',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: 'tianfusanjie',
                label: '太平园',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },

            ],

          },
          {
            value: 'sihaoxian',
            label: '4号线',
            children: [{
                value: 'shengxianhu',
                label: '西河站',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },

              {
                value: 'renmingbeilu',
                label: '明蜀王陵',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: 'wenshuyuan',
                label: '成都大学',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: 'luomashi',
                label: '十林站',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: 'tianfuguangchang',
                label: '来龙战',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: 'jingjangbinguan',
                label: '槐树店站',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              }, {
                value: 'huaxiba',
                label: '万年路',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: 'shengtiyuguan',
                label: '双桥路',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: 'nijiaqiao',
                label: '玉双路',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: 'tongxinling',
                label: '市二医院站',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: 'huochenanzhan',
                label: '太升南路',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: 'gaoxinzhan',
                label: '骡马市',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: 'jinrongcheng',
                label: '宽窄巷子',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: 'fuhuayuan',
                label: '中医大省医院站',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: 'jinchengguangchang',
                label: '草堂北路站',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: 'shijicheng',
                label: '蔡桥',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: 'tianfusanjie',
                label: '西南财大站',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: 'tianfuwujie',
                label: '文化宫站',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: 'huafudadao',
                label: '清江西路站',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: 'sihe',
                label: '成都西站',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: 'guangdu',
                label: '中坝',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: '',
                label: '非遗博览园',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: '',
                label: '马场坝站',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: '',
                label: '凤凰大街',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: '',
                label: '涌泉站',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: '',
                label: '光华果园',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: '',
                label: '南熏大道',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: '',
                label: '凤溪河',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              }, {
                value: '',
                label: '杨柳河'
              }, {
                value: '',
                label: '万盛站'
              },

            ],

          },
          {
            value: 'shihaoxian',
            label: '10号线',
            children: [{
                value: 'shengxianhu',
                label: '太平园',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },

              {
                value: 'renmingbeilu',
                label: '簇锦',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: 'wenshuyuan',
                label: '华兴',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: 'luomashi',
                label: '金华',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: 'tianfuguangchang',
                label: '双流机场T1航站楼',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
              {
                value: 'jingjangbinguan',
                label: '双流机场T2航站楼',
                // children: [{
                //     value: 'cexiangdaohang',
                //     label: 'A出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'B出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'C出口'
                //   },
                //   {
                //     value: 'dingbudaohang',
                //     label: 'D出口'
                //   }
                // ]
              },
            ],

          },

        ],

      };
    }
  };

</script>

<!--scss-->
<style lang="scss" scoped>
  //@import "./common/stylus/mixin.styl";
  @import "../../static/scss/hello.scss";
  .demonstratio {
    padding-left: 40px;
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .back {
    padding-left: 119px;
    padding-top: -1px;
  }

  .shoufei {
    padding-left: 223px;
    padding-top: 55px;
  }

  .blockbut {
    padding-left: 19px;
    padding-top: 19px;
  }

  .main-product {
    padding-top: 5px;
  }

  .sosou {
    margin-left: 41px;
    padding-left: 6px;
    width: 80%;
    height: 167px;
    background: #eee;
    border-radius: 3%;
    margin-top: 16px;
    margin-bottom: 34px;
  }

  .jiaohuan {
    border-radius: 3%;
  }

  .change1 {
    margin: -9px;
    padding-left: 105px;
  }

  .xuan {
    padding-left: 23px;
    padding-top: 9px;
  }

  .xuan1 {
    padding-left: 23px;
    padding-top: 9px;
  }


  .xuandian {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    position: absolute;
    width: 100%;
    top: 335px;
    bottom: -11px;
    overflow: hidden;
  }

  .xianlu {
    padding: 0px;
    flex: 0 0 120;
    width: 120px;
    background: #f3f5f7;
  }

  .zhangdian {
    display: table;
    height: 44px;
    width: 56px;
    padding: 0 12px;
    line-height: 14px;
  }

  .xianzhi {
    padding-top: 30px;
    padding-left: 77px;
    width: 80%;
    height: 30px;
    font-size: 17px;
    color: #004;
    cursor: pointer;
    outline: 0;
    font-family: Microsoft yahei;
  }

  .xianzhi1 {
    padding-top: 37px;
    padding-left: 93px;
    width: 80%;
    height: 50px;
  }

  .menu-item {
    display: table;
    height: 54px;
    width: 56px;
    padding: 0 0px;
    line-height: 14px;
  }

  .btn {
    display: block;
    width: 56px;
    height: 96px;
    margin-left: 222px;
    background: #ff4136;
    border: none;
    font-size: 16px;
    color: #fff;
    cursor: pointer;
    outline: 0;
    font-family: Microsoft yahei;
    margin-top: -136px;
  }

  .switch {
    display: block;
    float: left;
    cursor: pointer;
    width: 29px;
    height: 38px;
    margin: 0 3px;
    border: 2px solid #E5E604;
    padding-left: 97px;
    margin-left: 73px;
    margin-bottom: 8px; //background: url(../images/arr.png) 0 -40px no-repeat;
  }

  .text {
    display: table-cell;
    width: 56px;
    vertical-align: middle;
  }

  .foods-wrapper {
    flex: 1
  }

  .title1 {
    padding-left: 1px;
    height: 30px;
    line-height: 30px;
    border-left: -3px solid #d94de1;
    font-size: 23px;
    color: #9399F3;
    background: #F3F588;
  }

  .food-item {
    display: flex;
    margin: 18px;
    padding-bottom: 18px; //border-1px(rgba(7, 17, 27, 0.1));
  }

</style>
