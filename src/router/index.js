import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TeamList from "@/views/TeamList";
import TeamSingle from "@/views/TeamSingle";
import SignIn from "@/components/SignIn";
import SignUp from "@/components/SignUp";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'TeamList',
    component: TeamList
  },
  {
    path: '/team/:id',
    name: 'TeamSingle',
    component: TeamSingle,
    props: true,
  },
    {
    path: '/auth/signin',
    name: 'SignIn',
    component: SignIn,
  },
        {
    path: '/auth/signup',
    name: 'SignUp',
    component: SignUp,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
