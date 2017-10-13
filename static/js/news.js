/**
 * Created by Administrator on 2017/3/27.
 */
export default {
  name: 'News',
  data() {
    return {
      content_title: '帮助'
    }
  },
  created: function () {
    this.showNavId();
  },
  methods: {
    showNavId: function () {
      this.$emit('showNavId', 3)
    },
    returnPage: function () {
      history.go(-1);
    }
  }
}
