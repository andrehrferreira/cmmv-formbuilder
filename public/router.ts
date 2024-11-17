import { createMemoryHistory, createRouter } from 'vue-router';

import IndexView from "./components/index.vue";
import LocaleView from "./components/localeForm.vue";

const routes = [
    { path: '/', component: IndexView },
    { path: '/locale', component: LocaleView },
  ]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router;