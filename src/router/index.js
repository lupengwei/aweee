import Vue from 'vue';
import Router from 'vue-router';
import AMap from 'vue-amap';
import Hello from '@/components/Hello';
import Find from '@/components/Find';
import News from '@/components/News';
import New from '@/components/New';
import Map from '@/components/Map';
import xianlu from '@/components/xianlu';
import Find_List from '@/components/Find_List';
import Content from '@/components/Content';
import Pay from '@/components/Pay';
import Rote from '@/components/Rote';
import User from '@/pages/User';
import Topics from '@/pages/Topics';
import Post from '@/pages/Post';
import NotFound from '@/pages/NotFound';
// import Message from '@/pages/Message';
import Me from '@/pages/Me';
import Login from '@/pages/Login';

import About from '@/pages/About';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.use(Router);
Vue.use(MintUI)
Vue.use(AMap);
AMap.initAMapApiLoader({
  key: 'your amap key',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
});

const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    console.log(savedPosition)
    return savedPosition
  } else {
    const position = {}
    if (to.hash) {
      position.selector = to.hash
    }
    console.log(to.hash)
    if (to.matched.some(m => m.meta.scrollToTop)) {
      position.x = 0
      position.y = 0
    }
    return position
  }
}

export default new Router({
  routes: [{
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/find',
      name: 'Find',
      component: Find,

    },
    {
      path: '/xianlu',
      name: 'xianlu',
      component: xianlu,

    },
    {
      path: '/Find_List',
      name: 'Find_List',
      component: Find_List,

    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/User',
      name: 'User',
      component: User
    },
    {
      path: '/Map',
      name: 'Map',
      component: Map
    },
    {
      path: '/new',
      name: 'New',
      component: New
    },
    {
      path: '/Rote',
      name: 'Rote',
      component: Rote,

    },
    {
      path: '/Pay',
      name: 'Pay',
      component: Pay,

    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Me',
      name: 'Me',
      component: Me
    },
    // {
    //   path: '/Message',
    //   name: 'Message',
    //   component: Message,

    // },
    {
      path: '/NotFound',
      name: 'NotFound',
      component: NotFound,

    },
    {
      path: '/Post',
      name: 'Post',
      component: Post,

    },
    {
      path: '/Topics',
      name: 'Topics',
      component: Topics,

    },
    // {
    //   path: '/User',
    //   name: 'User',
    //   component: User,

    // },

    {
      path: '/contents/:id',
      name: 'content',
      component: Content
    },
    {
      path: '*',
      component: Hello
    }
  ],
  //mode: 'history'
})
