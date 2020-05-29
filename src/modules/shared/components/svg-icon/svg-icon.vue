<template>

  <svg
    id="#svg"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >

    <use
      class="fill-current"
      :xlink:href="href"
    ></use>

  </svg>

</template>

<script lang="ts">

  import { defineComponent, computed } from 'vue';

  export default defineComponent({

    props: {

      id: {
        type: String,
        required: true,
      },

      module: {
        type: String,
      }
    },

    setup (props) {

      // Common svg assets path
      const path = 'assets/svg/icon-defs.svg';

      // Determine Module or Global file
      const file = props.module
        ? `/src/modules/${props.module}/${path}`
        : `/src/${path}`;

      // Construct href path
      const href = computed(
        () => file + '#' + props.id
      );

      return {
        href,
      };
    },
  });
</script>

<style>

  /*
    Style the referencing <use> element, from which the shadow svg
    element inherits.
  */
  #svg {
    all: inherit;
  }

</style>
