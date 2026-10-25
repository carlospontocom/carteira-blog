import { createRouter, createWebHistory } from 'vue-router';
import DefaultLayout from '@/layout/LayoutDefault.vue'; 
import HomeView from '@/views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout, 
      children: [
        {
          path: '', 
          name: 'home',
          component: HomeView,
        },
        {
          path: 'novo-registro',
          name: 'novo-registro',
          component: () => import('@/views/NovoRegistroView.vue'), 
        }
      ]
    }
  ],
});

export default router;