<template>
  <div>
    <header class="mui-bar mui-bar-nav">
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click="returnPage()"></a>
      <h1 class="mui-title" v-text="content_title"></h1>
    </header>
    <div class="container">
      <div class="xuandian">
        <div class="xianlu">
          <ul>
            <li v-for="item in options" class="menu-item" ref="foodList">
              <a class="line">{{item.label}}</a>
              <ul>
              </ul>
            </li>
          </ul>
        </div>

        <div class="foods-wrapper" ref="foodsWrapper">
          <ul>
            <li v-for="item in options[2]['children']" class="food-list" ref="foodList">
              <a class="title1">{{item.label}}</a>
              <ul>

              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div class="sosou">
        <div class="xuan">
          <div class="block">
            <span class="demonstration"></span>

            <el-cascader placeholder="请搜素起点" :options="options" filterable></el-cascader>
          </div>
        </div>
        <i>单价：3元</i>
        <div class="xuan1">
          <div class="block">
            <span class="demonstration"></span>

            <el-cascader placeholder="请搜索终点" :options="options" filterable="" filterable change-on-select></el-cascader>
          </div>
          <button class="btn">查询</button>
        </div>
      </div>
      <!-- <div class="xianzhi">每个订单最多购买十张单程票</div>
      <div class="xianzhi1">
        <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10"></el-input-number>
      </div>
      <div class="shoufei">
        <div>应付金额:34元</div>
      </div>
      <div class="blockbut">
        <span class="demonstratio"></span>
        <span class="wrapper">
    <el-button :plain="true" type="danger"  size="large" >取消</el-button>
    <el-button :plain="true" type="success" size="large">购票</el-button>
    
  </span>
      </div> -->

    </div>

    <!-- <div class="xuandian">
      <div class="xianlu">
        <ul>
          <li v-for="item in options" class="menu-item" ref="foodList">

            <a class="line">{{item.label}}</a>
            <ul>

            </ul>
          </li>
        </ul>
      </div>

      <div class="foods-wrapper" ref="foodsWrapper">
        <ul>
          <li v-for="item in options[2]['children']" class="food-list" ref="foodList">
            <a class="title1">{{item.label}}</a>
            <ul>

            </ul>
          </li>
        </ul>
      </div>
    </div> -->
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
      }
    },
    data() {
      return {
        num1: 1,
        scrollTop: 0,
        content_title: '在线购票',
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
                // value: '',
                // label: '',
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
                // value: '',
                // label: '',
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
                // value: '',
                // label: '',
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
                // value: '',
                // label: '',
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
                // value: '',
                // label: '',
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
                // value: '',
                // label: '',
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
                // value: '',
                // label: '',
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
                // value: '',
                // label: '',
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
                // value: '',
                // label: '',
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
                // value: '',
                // label: '',
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
                // value: '',
                // label: '',
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
                // value: '',
                // label: '',
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
                // value: '',
                // label: '',
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
                // value: '',
                // label: '',
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
                // value: '',
                // label: '',
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
                // value: '',
                // label: '',
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
                // value: '',
                // label: '',
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
                // value: '',
                // label: '',
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
                // value: '',
                // label: '',
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
                // value: '',
                // label: '',
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
                // value: '',
                // label: '',
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
<style lang="scss">
  //@import "./common/stylus/mixin.styl";
  @import "../../static/scss/hello.scss";
  .demonstratio {
    padding-left: 40px;
  }

  .shoufei {
    padding-left: 223px;
    padding-top: 79px;
  }

  .blockbut {
    padding-left: 63px;
    padding-top: 39px;
  }

  .main-product {
    padding-top: 5px;
  }

  .sosou {
    margin-left: 40px;
    padding-left: 4px;
    width: 80%;
    height: 160px;
    background: #ffd;
    border-radius: 3%;
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
    margin-left: 210px;
    background: #ff4136;
    border: none;
    font-size: 16px;
    color: #fff;
    cursor: pointer;
    outline: 0;
    font-family: Microsoft yahei;
    margin-top: -124px;
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
    flex: 1;

    overflow: scroll;
    height: 100vh;
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
