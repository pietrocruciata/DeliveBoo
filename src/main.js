import { createApp } from 'vue'

import App from './App.vue'
import AppHome from './pages/AppHome.vue'
import AppRestaurant from './pages/AppRestaurant.vue'

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
        {path: '/', component: AppHome},
        {path: '/restaurant', component: AppRestaurant},
	],
})

app.use(router).mount('#app')
