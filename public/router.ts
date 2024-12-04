import { createMemoryHistory, createRouter } from 'vue-router';

import IndexView from './views/index.vue';
import LocaleView from './views/locale.vue';

const routes = [
    { path: '/', component: IndexView },
    { path: '/locale', component: LocaleView },
];

const router = createRouter({
    history: createMemoryHistory(),
    routes,
});

export default router;
