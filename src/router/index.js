import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Find from '@/components/Find';
import News from '@/components/News';
import New from '@/components/New';
import Find_List from '@/components/Find_List';
import Content from '@/components/Content';
// import User from '@/pages/User';
// import Topics from '@/pages/Topics';
// import Post from '@/pages/Post';
// import NotFound from '@/pages/NotFound';
// import Message from '@/pages/Message';
// import Me from '@/pages/Me';
import Login from '@/pages/Login';
// import Detail from '@/pages/Detail';
import About from '@/pages/About';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';


Vue.use(Router);
Vue.use(MintUI)

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
      children: [{
        path: 'content/:id',
        name: 'content',
        component: Content
      }]
    },
    {
      path: '/find',
      name: 'Find',
      component: Find,
      children: [{
          path: '/',
          name: 'Find_List',
          component: Find_List
        },
        {
          path: 'content/:id',
          name: 'content',
          component: Content
        }
      ]
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
      path: '/new',
      name: 'New',
      component: New
    },
    // {
    //   path: '/Detail',
    //   name: 'Detail',
    //   component: Detail,

    // },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
    },
    // {
    //   path: '/Me',
    //   name: 'Me',
    //   component: Me,

    // },
    // {
    //   path: '/Message',
    //   name: 'Message',
    //   component: Message,

    // },
    // {
    //   path: '/NotFound',
    //   name: 'NotFound',
    //   component: NotFound,

    // },
    // {
    //   path: '/Post',
    //   name: 'Post',
    //   component: Post,

    // },
    // {
    //   path: '/Topics',
    //   name: 'Topics',
    //   component: Topics,

    // },
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
