<template>
  <div class="post">
    <header class="mui-bar mui-bar-nav">
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click="returnPage()"></a>
      <h1 class="mui-title" v-text="content_title"></h1>
    </header>
    <div class="dialog">
      <ul class="mui-table-view mui-table-view-chevron">
        <li class="mui-table-view-cell">
          <a href="#User" class="mui-navigate-right">修改密码</a>
        </li>
      </ul>
      <ul class="mui-table-view mui-table-view-chevron">
        <li class="mui-table-view-cell">
          <a href="#notfound" class="mui-navigate-right">字体设置</a>
        </li>
      </ul>
      <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10" class="list">
        <li>
          <p class="title">
            喜好设置
          </p>
          <mt-checklist title="出行设置" v-model="settle" :options="settleList" align="right"></mt-checklist>
        </li>
        <li>
          <p class="title">
            设置系统功能消息提示声音和震荡时段
            <span v-text="type"></span>
            <ul class="mui-table-view">
              <li class="mui-table-view-cell">
                <a>声音<i class="mui-pull-right update"> <el-switch v-model="value2" on-color="#13ce66" off-color="#ff4949">
              </el-switch></i></a>
              </li>
            </ul>
            <ul class="mui-table-view">
              <li class="mui-table-view-cell">
                <a>震动<i class="mui-pull-right update"> <el-switch v-model="value3" on-color="#13ce66" off-color="#ff4949">
              </el-switch></i></a>
              </li>
            </ul>
          </p>
          <mt-radio title="隐私" v-model="type" :options="typeList" align="right"></mt-radio>
        </li>
        <p class="title">
          设置以下位置为常用位置
        </p>
        <li>
          <el-checkbox label="家"></el-checkbox>
          <el-checkbox label="公司"></el-checkbox>
          <el-checkbox label="健生房"></el-checkbox>
          <el-checkbox label="地铁站"></el-checkbox>
          <el-checkbox label="备用地址"></el-checkbox>
        </li>

      </ul>
      <div>


      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'post',
    data() {
      return {
        scrollTop: 0,
        content_title: '设置',
        settle: [],
        settleList: ['到站提醒', '语音导航', ],
        type: '',
        typeList: ['全部', '近一个月', '近半年', ],
        currency: '',
        currencyList: [],
        value2: true,
        value3: false,

      }
    },
    created: function () {
      this.showNavId();
    },
    mounted() {
      this.windowonload();
    },
    methods: {
      showNavId: function () {
        this.$emit('showNavId', 4)
      },
      returnPage: function () {
        history.go(-1);
      },
      showTitle: function (content_title) {
        this.content_title = content_title;
      },
      windowonload: function () {
        var aLi = document.getElementsByTagName('li');

        for (var i = 0; i < aLi.length; i++) {
          if (i % 2 == 1) {

            aLi[i].style.backgroundColor = '#ccc'
          } else {
            aLi[i].style.backgroundColor = ''
          }
        }
      }
    },

  }

</script>
<style lang="css" scoped>
  .dialog {
    position: absolute;
    /* z-index: 100; */
    top: 45px;
    bottom: 78px;
    width: 100%;
    background: rgba(18, 161, 161, 0.01);
    font-size: 17px;
  }

  .dialog .title {
    line-height: 0.8rem;
    background-color: #f1f1f1;
    padding-left: .2rem;
    margin: 0;
  }

  .dialog .list {
    margin-bottom: 0.9rem;
  }

  .dialog .footer {
    height: 0.9rem;
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 100;
    background: #fff;
    line-height: 0.9rem;
  }

  .dialog .footer .btn {
    width: 80%;
    display: inline-block;
    padding: 0 5%;
    text-align: center;
  }

  .post {
    height: 100%;
  }

  .iconfont {
    font-size: 18px;
    color: #80bd01;
    margin-right: 5px;
  }

  .title {
    margin-top: 43px;
    padding: 10px 10px;
  }

  .select {
    padding: 10px 10px;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
  }

  .select select {
    padding: 0;
  }

  .con {
    padding: 5px 10px
  }

  .con textarea {
    line-height: 24px
  }

  textarea {
    margin-top: 10px;
    min-height: 300px;
    padding: 10px;
  }

  input,
  select,
  textarea {
    background: #eee;
    box-sizing: border-box;
    width: 100%;
    height: 32px;
    padding: 10px;
    line-height: 28px;
    border: none;
    font-size: 14px;
    resize: none;
    border-radius: 5px;
    margin-top: 5px;
  }

  .submit {
    display: block;
    width: 250px;
    padding: 10px 15px;
    margin: auto;
    margin-top: 20px;
    text-align: center;
    background: #80bd01;
    color: #fff;
    border-radius: 5px;
  }

</style>
