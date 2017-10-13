<template>
  <div class="rote">
    <header class="mui-bar mui-bar-nav">
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click="returnPage()"></a>
      <h1 class="mui-title" v-text="content_title"></h1>
    </header>
    <div>
      <div class="col-xs-12 bus-switch">
        <div class="info">
          <h2>升仙湖<span>到</span>火车北站<span>地铁线路</span></h2>
        </div>
        <div class="info1">
          <div class="tab"><a href="javascript:changefx(1);" id="FXTAB1" class="active">去程路线</a>
            <div class="fanan" id="FX1" style="display: block;">
              <div>
                <div>
                  <div class="pad8lr lh30">
                    <div class="pad4t">
                      <div class="fananbox" onmouseover="setbg(this,'#f4fbfb')" onmouseout="setbg(this,'#fff')">
                        <div class="fananboxtop">
                          <div class="fbox2"><span class="fboxtitle"><b>方案1：地铁直达</b><font>全程1个站</font></span>
                            <div class="fboxcontent">
                              <div><i class="miniicon metro"></i>从 <a href="/bus/station214916.htm" class="otherstationlink">升仙湖</a>                                乘坐 <a href="/bus/xianlu_27105.htm" class="otherlinelink">地铁1号线</a>
                                <font class="stacount">（1站）</font>到达 <a class="otherstationlink" href="/bus/station217979.htm">火车北站</a></div>
                              <font title="end"></font>
                            </div>
                          </div>
                        </div>
                        </router-link>
                        <router-link to="/Find">
                          <el-button type="success" size="small">查看方案详细</el-button>
                        </router-link>
                        <div class="linestationmore" id="fa1" title="0"></div>
                      </div>
                      <div class="clear"></div>
                    </div>
                  </div>
                  <div class="spacer7h"></div>

                </div>
              </div>
            </div>

            <!-- <div class="fanan" id="FX2" style="display: block;">
                <div>
                  <div>
                    <div class="pad8lr lh30">
                      <div class="pad4t">
                        <div class="fananbox" onmouseover="setbg(this,'#f4fbfb')" onmouseout="setbg(this,'#fff')">
                          <div class="fananboxtop">
                            <div class="fbox2"><span class="fboxtitle"><b>方案1：地铁直达</b><font>全程1个站</font></span>
                              <div class="fboxcontent">
                                <div><i class="miniicon metro"></i>从 <a href="/bus/station217979.htm" class="otherstationlink">火车北站</a>                                  乘坐 <a href="/bus/xianlu_27105.htm" class="otherlinelink">地铁1号线</a>
                                  <font class="stacount">（1站）</font>到达 <a class="otherstationlink" href="/bus/station214916.htm">升仙湖</a></div>
                                <font title="end"></font>
                              </div>
                            </div>
                          </div>
                          <div class="fbox3"><span class="falink_1" onclick="showlineinfo(27105,0,0,0,0,217979,214916,214916,0,0,0,0,0,0,0,'fa1');showFA(1,this);">&nbsp;&nbsp;查看方案详细</span></div>
                          <div class="linestationmore" id="fa1" title="0"></div>
                        </div>
                        <div class="clear"></div>
                      </div>
                    </div>
                    <div class="spacer7h"></div>
                   
                  </div>
                </div>
              </div> -->
          </div>
        </div>
      </div>
      <div class="info1">
        <div class="active1">单价:{{dajia}}元</div>

        <div class="">每个订单最多购买十张单程票</div>
        <div class="xianzhi1">
          <el-input-number v-model="num1" :min="1" :max="10"></el-input-number>
        </div>
        <div class="shoufei">
          <div>应付金额: {{num1*dajia}}元</div>
        </div>
      </div>
      <div class="info1">
        <router-link to="/Hello">
          <el-button type="danger" size="large">返回修改</el-button>
        </router-link>
        <div class="rtop">
          <router-link to="/Pay">
            <el-button type="success" size="large">支付购票 </el-button>
          </router-link>
          </span>
        </div>
      </div>


    </div>
  </div>

  </div>
</template>

<script>
  export default {
    name: 'rote',
    data() {
      return {
        scrollTop: 0,
        content_title: '查询结果',
        num1: 1,

        dajia: 7,
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

  }

</script>

<!--scss-->
<style lang="scss">
  /* @import "../../static/scss/hello.scss"; */

  .bus-switch .info h2 span,
  .bus-switch .info h1 span {
    font-size: 16px;
    color: #555555;
    margin: 0 10px;
  }

  .info {
    margin-top: 55px;
    margin-left: 21px;
    background: #eee;
    border-radius: 19px;
    padding: 25px;
    color: coral;
    width: inset 0 0 17px rgba(0, 0, 0, 0.5);
    width: 90%;
    font-size: 13px;
  }

  .rtop {

    display: inline-block;
    padding: 0px 55px;
  }

  .info1 {
    margin-top: 5px;
    margin-left: 21px;
    background: #eee;
    border-radius: 19px;
    padding: 25px;
    color: coral;
    width: inset 0 0 17px rgba(0, 0, 0, 0.5);
    width: 90%;
    font-size: 13px;
  }

  tab a.active {
    background: #e75d71;
    color: #ffffff;
    border-radius: 4px 4px 0px 0px / 4px 4px 0px 0px;
  }

  .tab a.active {
    background: #e75d71;
    color: #ffffff;
    border-radius: 4px 4px 0px 0px / 4px 4px 0px 0px;
  }

  .tab a {
    display: inline-block;
    padding: 5px 10px;
  }

  .tab a {
    display: inline-block;
    padding: 5px 10px;
  }

  a:hover,
  a:focus {
    color: #ff6600;
    text-decoration: none;
  }

  a:hover,
  a:focus {
    color: #2a6496;
    text-decoration: underline;
  }

  a:active,
  a:hover {
    outline: 0;
  }

  a {
    color: #333333;
    text-decoration: none;
  }

  a {
    color: #428bca;
    text-decoration: none;
  }


  .fu {
    padding-top: 23px;
    width: 100%;
    padding-left: 31px;
    height: 79px;
  }

  .demonstratio {
    padding-left: 40px;
  }

  .shoufei {
    padding-left: 223px;
    padding-top: 55px;
  }

  .blockbut {
    padding-left: 29px;
    padding-top: px;
  }

  .main-product {
    padding-top: 5px;
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
    padding-bottom: 18px;
  }

</style>
