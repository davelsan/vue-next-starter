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

      // Determine Module or Global path
      const path = props.module
        ? `/src/modules/${props.module}/`
        : `/src/`;

      // Compose href path
      const href = computed(
        () => path + 'assets/svg/icon-defs.svg#' + props.id
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
