<template>
  <div class="pay">
    <header class="mui-bar mui-bar-nav">
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click="returnPage()"></a>
      <h1 class="mui-title" v-text="content_title"></h1>
    </header>
    <div class="container">
      <div class="timerBox">
        <div class="time">
          <div>
            <header class="time_last">支付剩余时间</header>
            <p class="timeText">{{remaining}}</p>
          </div>
        </div>
      </div>
      <li>
        <p class="title">
          您可以选择
          <span v-text="type"></span>进行在线支付
        </p>
        <mt-radio title="支付工具" v-model="type" :options="typeList" align="right"></mt-radio>
      </li>
    </div>
    <p class="determine">确认支付</p>
    <alert-tip v-if="showAlert" @closeTip="closeTipFun" :alertText="alertText"></alert-tip>
  </div>
</template>

<script>
  export default {
    name: 'pay',
    data() {
      return {
        scrollTop: 0,
        content_title: '在线支付',
        payDetail: false, //付款信息详情
        showAlert: false,
        countNum: 900, //倒计时15分钟
        alertText: null,
        type: '',
        typeList: ['支付宝', '微信', '财付通', ],
      }
    },
    mounted() {
      this.remainingTime();
    },
    beforeDestroy() {
      clearInterval(this.timer);
    },
    created: function () {
      this.showNavId();
      this.nexttime();
      setInterval(() => {
        this.now = Math.trunc((new Date()).getTime() / 1000)
      }, 1000)
    },
    computed: {
      seconds() {
        return (this.now) % 60;
      },
      minutes() {
        return Math.trunc((this.now) / 60) % 60;
      },

      hours() {
        return Math.trunc((this.now) / 60 / 60) % 24;
      },

      days() {
        return Math.trunc((this.now) / 60 / 60 / 24);
      },
      remaining: function () {
        let minute = parseInt(this.countNum / 60);
        if (minute < 10) {
          minute = '0' + minute;
        }
        let second = parseInt(this.countNum % 60);
        if (second < 10) {
          second = '0' + second;
        }
        return '00 : ' + minute + ' : ' + second;
      }
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
      nexttime: function () {
        var s = 0;

        this.time = (parseInt(s / 60) + '分' + (s % 60) + '秒')
      },
      remainingTime() {
        clearInterval(this.timer);
        this.timer = setInterval(() => {
          this.countNum--;
          if (this.countNum == 0) {
            clearInterval(this.timer);
            this.showAlert = true;
            this.alertText = '支付超时';
          }
        }, 1000);
      },
    },
  }

</script>

<!--scss-->
<style scoped>
  .show_time_amount {
    background-color: #fff;
    padding: .7rem;
    text-align: center;
  }

  .time_last {

    margin-top: 1rem;
  }

  .time {

    margin: .3rem 0 1rem;
  }

  .order_detail {

    font-weight: bold;
  }

  .rating_page {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f5f5f5;
    z-index: 204;
    padding-top: 1.95rem;
  }


  .pay_way_list {
    background-color: #fff;
  }

  .pay_item {
    padding: .4rem .7rem;

    align-items: center;
    line-height: 2.6rem;
    border-bottom: 0.025rem solid #f5f5f5;
  }

  .pay_icon_contaienr {
    align-items: center;
  }

  .zhifubao {

    background: url(../../static/images/zhifubao.png) no-repeat;
    background-size: 100% 100%;
    margin-right: .2rem;
  }

  .time {

    padding: .4rem .7rem;
    background-color: #ccc;
    text-align: center;
    margin: 0 .7rem;
    line-height: 47px;
    border-radius: 5%;
    margin-top: 5px;
    font-size: 20px;
    font-weight: normal;
    height: 222px;
    align-items: center;
    line-height: 2.6rem;
    border-bottom: 0.025rem solid #f5f5f5;
    font-weight: 100;
    font-family: 'Roboto', serif;
  }

  svg {

    margin-right: .3rem;
  }

  span {
    text-indent: 12px;
  }

  .choose_icon {

    fill: #ccc;
  }

  .choosed_way {
    fill: #4cd964;
  }



  .determine {
    background-color: #4cd964;
    text-align: center;
    margin: 0 .7rem;
    line-height: 47px;
    border-radius: 2.2rem;
    margin-top: 550px;
    font-size: 20px;
    font-weight: normal;
    height: 45px;
  }

  .timerBox {

    text-align: center;
  }



  .timeText {
    color: #1abc9c;
    font-size: 34px;
    font-family: 'Roboto Condensed', serif;
    font-weight: 35px;
    margin-top: 10px;
    margin-bottom: 1px;
  }

  .digit {
    color: #0f1;
    float: left;
    font-size: 35px;

    margin: 10px;
    text-align: center;
  }

</style>
