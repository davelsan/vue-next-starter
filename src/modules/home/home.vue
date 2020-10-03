<template>
  <div
    class="flex flex-col justify-center items-center p-6"
  >

    <SvgIcon
      id="vue-logo"
      file="base-sprites"
      class="w-64 h-64"
    />

    <HelloWorld v-bind="hello" />

  </div>
</template>

<script lang="ts">

  import { defineComponent } from 'vue';
  import { fetchLinks }      from './home.store';

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
        'vEssential',
        'vEcosystem',
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
