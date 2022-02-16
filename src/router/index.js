import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '@/views/index.vue'
import user from '@/views/user.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/index' },
  { path: '/index', component: index },
  { path: '/user', component: user }
]

const router = new VueRouter({
  routes
})

export default router
