import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
import Conteudo from '../conteudos/conteudo.vue';
const routes = [
    {
        path: '/',
        component: Conteudo
    }
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router; 