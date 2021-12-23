import Vue from "vue";
import VueRouter from "vue-router";
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Country from '../views/Country.vue'
import Data from '../views/Data.vue'
import Search from '../views/Search.vue'
import CountryLang from '../views/CountryLang.vue'
import Dashboard from '../views/Dashboard.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/country',
    name: 'Country',
    component: Country
  },
  {
    path: '/data',
    name: 'data',
    component: Data
  },
  {
    path: '/search',
    name: 'search',
    component: Search
  },
  {
    path: '/countrylang',
    name: 'countrylang',
    component: CountryLang
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
