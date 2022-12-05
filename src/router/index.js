import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TeamList from "@/views/TeamList";
import TeamSingle from "@/views/TeamSingle";

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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
