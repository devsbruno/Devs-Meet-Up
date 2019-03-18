import Vue from 'vue'
import Router from 'vue-router'


import Home from '@/views/Home'
import Meetups from '@/views/Meetup/Meetups'
import CreateMeetup from '@/views/Meetup/CreateMeetup'
import Meetup from '@/views/Meetup/Meetup'
import Profile from '@/views/User/Profile'
import Signup from '@/views/User/Signup'
import Signin from '@/views/User/Signin'
import AuthGuard from './auth-guard'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/meetups',
      name: 'Meetups',
      component: Meetups
    },
      {
      path: '/meetup/new',
      name: 'CreateMeetup',
      component: CreateMeetup,
      beforeEnter: AuthGuard
    },
    {
      path: '/meetups/:id',
      name: 'Meetup',
      component: Meetup
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile, 
      beforeEnter: AuthGuard
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    }
  ]
})
