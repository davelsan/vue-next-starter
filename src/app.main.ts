import { createApp } from 'vue';

/* PLUGINS */
import { registerServiceWorker } from './app.pwa';
import { router }                from './app.router';

/* COMPONENTS */
import { registerSharedComponents } from './app.shared';

/* STYLES */
import './css/tailwind.css';

/* ENTRY POINT */
import app from './app.vue';

const createdApp = createApp(app);

registerServiceWorker();
registerSharedComponents(createdApp);

createdApp
  .use(router)
  .mount('#app');
