import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/home.vue')
const Category = () => import('views/category/category.vue')
const shopCar = () => import('views/shopCar/shopCar.vue')
const profile = () => import('views/profile/profile.vue')
Vue.use(VueRouter)
const routes = [
{
  path: '',
  redirect: '/home'
},
{
  path: '/home',
  component: Home
},
{
  path: '/category',
  component: Category
},
{
  path: '/shopCar',
  component: shopCar
},
{
  path: '/profile',
  component: profile
}
]
const router = new VueRouter({
  routes,
  mode: 'history'
})
export default router
