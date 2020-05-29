<template>

  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <use
      class="fill-current"
      :xlink:href="`${path}#${id}`"
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
      },
    },
    setup (props) {

      const path = computed(
        () => props.module
          ? `/src/modules/${props.module}/assets/svg/svg-defs.svg`
          : '/src/assets/svg/svg-defs.svg'
      );

      return {
        path,
      };
    }
  });
</script>