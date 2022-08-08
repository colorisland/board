import Vue from 'vue'
import Router from 'vue-router'
import store from '../store';

// Containers
const TheContainer = () => import('@/containers/TheContainer')

// Views
const Dashboard = () => import('@/views/Dashboard')

// Views - Components
const MemberList = () => import('@/views/member/MemberList')
const BanList = () => import('@/views/member/BanList')

const Story = () => import('@/views/content/Story')
const Comment = () => import('@/views/content/Comment')
const Board=()=>import('@/views/content/Board')


// Views - Pages
const Page404 = () => import('@/views/pages/Page404')
const Page500 = () => import('@/views/pages/Page500')
const Signin = () => import('@/views/pages/Signin')
const Register = () => import('@/views/pages/Register')
const Forms = () => import('@/views/pages/Forms')

// Users
const Users = () => import('@/views/users/Users')
const User = () => import('@/views/users/User')

Vue.use(Router)

var router = new Router({
  store,
  mode: 'hash', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  routes: configRoutes()
})

export default router

function configRoutes () {
  return [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Home',
      component: TheContainer,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: 'users',
          meta: {
            label: 'Users'
          },
          component: {
            render(c) {
              return c('router-view')
            }
          },
          children: [
            {
              path: '',
              name: 'Users',
              component: Users
            },
            {
              path: ':id',
              meta: {
                label: 'User Details'
              },
              name: 'User',
              component: User
            }
          ]
        },
        {
          path: 'member',
          redirect: '/member/member-list',
          name: '회원',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'member-list',
              name: '회원 리스트',
              component: MemberList
            },
            {
              path: 'ban-list',
              name: '제재된 회원',
              component: BanList
            }
          ]
        },
        {
          path: 'content',
          redirect: '/content/story',
          name: '콘텐츠',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'story',
              name: '스토리',
              component: Story
            },
            {
              path: 'comment',
              name: '댓글',
              component: Comment
            },
            {
              path: 'board',
              name: '회원정보',
              component: Board
            }
            //이걸 연결했더니 헤더와 푸터가 생겼다
          ]
        },
      ]
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin,
      meta: { 
          guest: true
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
      meta: { 
          guest: true
      }
    },
    {
      path: '/pages',
      redirect: '/pages/404',
      name: 'Pages',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: '404',
          name: 'Page404',
          component: Page404
        },
        {
          path: '500',
          name: 'Page500',
          component: Page500
        },
        {
          path: 'signin',
          name: 'Signin',
          component: Signin
        },
        {
          path: 'register',
          name: 'Register',
          component: Register
        },
        {
          path: 'forms',
          name: 'Forms',
          component: Forms
        }
      ]
    }
  ]
}

router.beforeEach((to, from, next) => {
  window.currentRoute = to;
  window.prevRoute = from;
  if(to.matched.some(record => !record.meta.guest)) {
    if (store.state.isLoggedIn) {
        next({
            path: '/signin',
            params: { nextUrl: to.fullPath }
        })
    } else {
        if(to.matched.some(record => record.meta.is_admin)) {
            if(store.getters.isUserAdmin){
                next()
            }
            else{
                next('/');
            }
        } else if(to.matched.some(record => record.meta.is_editor)) {
              if(store.getters.isUserEditor){
                  next()
              }
              else{
                  next('/');
              }
        } else {
            next();
        }
    }
  }else {
    next();
  }           
});

