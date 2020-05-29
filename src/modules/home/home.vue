<template>
  <div
    class="flex flex-col justify-center items-center p-6"
  >

    <img alt="Vue logo" src="@/assets/logo.png">

    <HelloWorld
      v-bind="hello"
    >
      <div> This is a non-reactive HMR test message </div>
      <div> {{ msgHMR }} </div>
    </HelloWorld>


  </div>
</template>

<script lang="ts">

  import { defineComponent } from 'vue';
  import { fetchLinks }      from './home.store';
  //
  import HelloWorld          from './component/hello-world.vue';

  export default defineComponent({
    name: 'Home',

    components: {
      HelloWorld,
    },

    setup () {

      const msg = 'Vue 3 Starter App';
      const msgHMR = 'This is a reactive HMR test message';

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
