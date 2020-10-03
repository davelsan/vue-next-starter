<template>
  <a
    class="whitespace-no-wrap text-green-600"
    :href="href"
    target="_blank"
    rel="noopener"
  >
    {{ label }}
  </a>
</template>

<script lang="ts">

  import { defineComponent } from 'vue';

  export default defineComponent({

    props: {

      href: {
        type: String,
        required: true,
      },

      label: {
        type: String,
        required: true,
      }
    }

  });
</script>