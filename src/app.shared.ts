import { App } from 'vue';

/* COMPONENTS */
import SvgIcon from './modules/shared/components/svg-icon.vue';
import AppLink from './modules/shared/components/app-link.vue';

/**
 * Register components from the shared module. This function __mutates__
 * the passed "app".
 * @param app created Vue app
 */
export function registerSharedComponents (app: App<Element>): void {

  // TODO: implement automated registration
  app.component('AppLink', AppLink);
  app.component('SvgIcon', SvgIcon);
}