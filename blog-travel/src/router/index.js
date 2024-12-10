import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Login from '../views/LoginView.vue'
import Register from '../views/Register.vue'
import Profile from '../views/ProfileView.vue'
import ArticleDetail from '../views/ArticleDetailView.vue'
import NewArticle from '../views/NewArticleView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      meta: { requiresAuth: true }
    },
    {
      path: '/article/:id',
      name: 'article-detail',
      component: ArticleDetail
    },
    {
      path: '/new-article',
      name: 'new-article',
      component: NewArticle,
      meta: { requiresAuth: true }
    }
  ]
})

export default router
