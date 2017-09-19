<template>
  <div>
    <header class="mui-bar mui-bar-nav">
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click="returnPage()"></a>
      <h1 class="mui-title" v-text="content_title"></h1>
    </header>

    <div class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
      <div class="mui-scroll">
        <a class="mui-control-item mui-active">
            推荐
        </a>
        <a class="mui-control-item">
            热点
        </a>
        <a class="mui-control-item">
            北京
        </a>
        <a class="mui-control-item">
            社会
        </a>
        <a class="mui-control-item">
            娱乐
        </a>
        <a class="mui-control-item">
            科技
        </a>
      </div>
    </div>
    <div class="mui-slider">
      <div class="mui-slider-group">
        <!--第一个内容区容器-->
        <div class="mui-slider-item">
          <!-- 具体内容 -->
        </div>
        <!--第二个内容区-->
        <div class="mui-slider-item">
          <!-- 具体内容 -->
        </div>
      </div>
      <div class="mui-numbox">
        <!-- "-"按钮，点击可减小当前数值 -->
        <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
        <input class="mui-numbox-input" type="number" />
        <!-- "+"按钮，点击可增大当前数值 -->
        <button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
      </div>
    </div>
  </div>
</template>

<!--js-->
<script src="../../static/js/content.js"></script>

<!--scss-->
<style lang="scss">
  @import "../../static/scss/content.scss";

</style>
