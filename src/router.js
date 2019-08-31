import Vue from 'vue'
import Router from 'vue-router'
import Dogs from './views/Dogs.vue'
import NewDog from './views/NewDog.vue'

Vue.use(Router);
var router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Dogs
    },
    {
      path: '/dogs',
      name: 'dogs',
      component: Dogs
    },
    {
      path:'/new-dog',
      name:'new-dog',
      component:NewDog
    }
  ]
})

export default router;
