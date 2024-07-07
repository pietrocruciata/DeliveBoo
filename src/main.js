import { createApp } from 'vue'

import App from './App.vue'
import AppHome from './pages/AppHome.vue'
import AppRestaurant from './pages/AppRestaurant.vue'
import AppCart from './pages/AppCart.vue'
import store from "./store"

//INSTALL FONT AWESOM
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

// / import font awesome icon component /
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// / add icons to the library */
library.add(fas, far, fab)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

//ROUTES
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'Home', component: AppHome },
        { path: '/restaurant/:id', name: 'restaurant.show', component: AppRestaurant, },
        { path: '/cart', name: 'Cart', component: AppCart }

    ],

    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { left: 0, top: 0 };
        }
    },
})

app.use(router).use(store).mount('#app')
