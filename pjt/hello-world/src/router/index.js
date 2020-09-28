import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hiworld from '@/components/Hiworld'
import Counter from '@/components/counter/Counter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/hi',
      name: 'Hiworld',
      component: Hiworld
    },
    {
      path: '/counter',
      name: 'Counter',
      component: Counter
    }
  ]
})
