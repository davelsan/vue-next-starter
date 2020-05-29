import { reactive }    from 'vue';
import { LinkSection } from '../../types/app';
import vueLinks        from '../../data/vue-links.json';


const links = vueLinks as LinkSection[];

export function fetchLinks (ids: string[]): LinkSection[] | undefined {

  const data = links.filter(x => ids.includes(x.id));

  if (data) return reactive(data);
}