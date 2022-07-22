import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import BlogPost from '@/components/BlogPost.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/faq",
      name: "Frequently Asked Questions",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/FrequentlyAskedQuestions.vue"),
    },

    {
      path: "/contact",
      name: "Contact Robert",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/ContactView.vue"),
    },

    {
      path: "/portfolio",
      name: "Portfolio Robert",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/PortfolioView.vue"),
    },

    {
      path: "/blog",
      name: "Blogs about an Arcadian",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/BlogView.vue"),
      children: [
        {
          path: 'post',
          component: () => import("../views/BlogPostView.vue"),
        }],
      
    },

    {
      path: '/:pathMatch(.*)*',
      name: "404 page not found",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/ErrorView.vue"),
    },
  ],
});

export default router;
