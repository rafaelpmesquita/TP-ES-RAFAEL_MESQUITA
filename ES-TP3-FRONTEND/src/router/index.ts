import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import teste from '../components/teste.vue'
import PaginaEstatisticas from '../components/estatisticas/PaginaEstatisticas.vue'
import Login from '@/components/login/Login.vue'
import Cadastro from '@/components/login/Cadastro.vue'
import EmptyLayout from '@/layout/EmptyLayout.vue'
import store from '@/store'
import DashBoardAcoes from '@/components/DashBoardAcoes/DashBoardAcoes.vue'
import EstatisticasAcoes from '@/components/Estatisticas/EstatisticasAcoes.vue'
Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/teste',
    name: 'teste',
    component: teste,
    meta: { requiresAuth: true }, // Rota protegida
  },

  {
    path: '/',
    name: 'login',
    component: Login,
    meta: { layout: EmptyLayout },
  },
  {
    path: '/cadastro',
    name: 'cadastro',
    component: Cadastro,
    meta: { layout: EmptyLayout },
  },

  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashBoardAcoes,
    meta: { requiresAuth: true }, // Rota protegida
  },

  {
    path: '/estatisticas',
    name: 'estatisticas',
    component: EstatisticasAcoes,
    meta: { requiresAuth: true }, // Rota protegida
  },

]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Verificar se o usuário está autenticado
    if (!store.getters['login/AUTENTICADO']) {
      // Redirecionar para a página de login
      next({
        path: '/',
        query: { redirect: to.fullPath },
      });
    } else {
      next();
    }
  } else {
    next();
  }
});
export default router
