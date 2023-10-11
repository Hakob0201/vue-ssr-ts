<script setup>
import { computed } from 'vue';

const props = defineProps(['active']);

const classes = computed(() =>
  props.active
    ? 'block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out'
    : 'block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out'
);
</script>

<template>
  <button :class="classes">
    <slot></slot>
  </button>
</template>
