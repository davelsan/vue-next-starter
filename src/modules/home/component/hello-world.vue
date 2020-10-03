<template>

  <!-- MAIN HEADER -->
  <div>

    <h1
      class="mt-10 mb-2 font-bold text-xl"
    >
      {{ msg }}
    </h1>

    <p>
      A Vue3 SPA re-created from scratch using
      <app-link href="https://pnpm.js.org"     label="pnpm" />,
      <app-link href="https://pnpm.js.org"     label="Webpack" />, and
      <app-link href="https://tailwindcss.com" label="TailwindCSS" />
    </p>

    <!-- LINK SECTIONS -->
    <div
      v-for="section in linkData" :key="section.title"
      class="mt-10"
    >

      <h2
        class="font-bold"
      >
        {{ section.title }}
      </h2>

      <ul
        class="list-none"
      >
        <li
          class="inline-block ml-4"
          v-for="link in section.links" :key="link.label"
        >
          <a
            class="text-green-600"
            :href="link.href"
            target="_blank"
            rel="noopener"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>

    </div>

  </div>

</template>

<script lang="ts">

  import { defineComponent, PropType } from 'vue';
  import { LinkSection }               from '../data/vue-links.schema';

  export default defineComponent({

    name: 'HelloWorld',

    props: {

      msg: {
        type: String,
        default: 'Welcome to Your Vue.js App'
      },

      linkData: {
        type: Array as PropType<LinkSection[]>,
        default: () => []
      },

    },
  });

</script>
