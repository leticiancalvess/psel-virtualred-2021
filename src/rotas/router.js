import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
import Conteudo from '../conteudos/conteudo.vue';
import DiplomaCreate from '../conteudos/diplomacreate.vue'
const routes = [
    {
        path: '/',
        component: Conteudo
    },
    {
        path: '/diplomacreate',
        component: DiplomaCreate
    }
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router; 