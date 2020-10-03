<template>
  <svg id="svg" >

    <use
      class="fill-current"
      :xlink:href="href"
    />

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

      file: {
        type: String,
        required: true,
      }
    },

    setup (props) {

      const href = `${props.file}.svg#${props.file}_${props.id}`;

      return {
        href,
      };
    },
  });
</script>

<style lang="postcss" scoped>

  /*
    Style the referencing <use> element, from which the shadow svg
    element inherits.
  */
  svg-icon {
    all: inherit;
  }

</style>
