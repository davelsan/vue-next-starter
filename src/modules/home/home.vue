<template>
  <div
    class="flex flex-col justify-center items-center p-6"
  >

    <SvgIcon
      id="vue-logo"
      module="home"
    />

    <HelloWorld v-bind="hello" />

  </div>
</template>

<script lang="ts">

  import { defineComponent } from 'vue';
  import { fetchLinks }      from './home.store';
  //
  import HelloWorld from './component/hello-world.vue';
  import SvgIcon from '../shared/component/svg-icon/svg-icon.vue';

  export default defineComponent({
    name: 'Home',

    components: {
      HelloWorld,
      SvgIcon,
    },

    setup () {

      const msg = "Vue 3 Starter App";

      const linkData = fetchLinks([
        'vCLI',
        'vEssential',
        'vEcosystem'
      ]);

      const hello = {
        msg,
        linkData
      };

      return {
        hello
      };
    }
  });
</script>
