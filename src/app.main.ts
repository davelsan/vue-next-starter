import { createApp } from 'vue';

/* PLUGINS */
import { router }                from '@/app.router';

/* COMPONENTS */
import { registerSharedComponents } from '@/app.shared';

/* STYLES */
import '@/css/tailwind.css';
import '@/assets/svg/base-sprites.svg';

/* ENTRY POINT */
import app from './app.vue';

const createdApp = createApp(app);

registerSharedComponents(createdApp);

createdApp
  .use(router)
  .mount('#app');
