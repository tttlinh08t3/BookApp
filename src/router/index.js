import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/Login'
import Welcome from '@/components/welcome/Welcome'
import BookList from '@/components/book-list/BookList'
import BookDetail from '@/components/book-detail/BookDetail'
import MyBooks from '@/components/my-books/MyBooks'
import Settings from '@/components/settings/Settings'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/books',
      name: 'BookList',
      component: BookList
    },
    {
      path: '/my-books',
      name: 'MyBooks',
      component: MyBooks,
      meta: {requiresAuth: true, roles: ['ADMIN', 'USER']}
    },
    {
      path: '/book-detail',
      name: 'BookDetail',
      component: BookDetail
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    }
  ]
})
