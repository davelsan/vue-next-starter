<template>
  <div
    class="flex flex-col justify-center items-center p-6"
  >

    <SvgIcon
      id="vue-logo"
      module="home"
      class="w-64 h-64"
    />

    <HelloWorld v-bind="hello" />

  </div>
</template>

<script lang="ts">

  import { defineComponent } from 'vue';
  import { fetchLinks }      from './home.store';
  //
  import './assets/svg/home.svg';
  //
  import HelloWorld from './component/hello-world.vue';

  export default defineComponent({
    name: 'Home',

    components: {
      HelloWorld
    },

    setup () {

      const msg = "Vue 3 Starter App";
      const msgHMR = "This is an observed HMR test message";

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
        hello,
        msgHMR,
      };
    }
  });
</script>
