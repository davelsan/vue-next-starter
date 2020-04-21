import { createApp } from 'vue';

/* PLUGINS */
import { registerServiceWorker } from './app.pwa';
import { router }                from './app.router';

/* STYLES */
import './css/tailwind.css';

/* ENTRY POINT */
import app from './app.vue';


registerServiceWorker();

createApp(app)
  .use(router)
  .mount('#app');
