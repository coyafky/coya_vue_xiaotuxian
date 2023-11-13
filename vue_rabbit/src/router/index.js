import { createRouter, createWebHistory } from "vue-router";
import Layout from "@/views/Layout/Index_1.vue";
import Login from "@/views/Login/Index_2.vue";
import Home from "@/views/Home/Index_3.vue";
import Category from "@/views/Category/Index_4.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
    path: '/',
    component: Layout,
    children: [
      {
        // Home 页默认在首页显示，所以 path 为空
        path: '',
        component: Home,
      },
      {
        path: 'category',
        component: Category,
      }
    ]
  },
  {
    path: '/login',
    component: Login
  }
],


});

export default router;
