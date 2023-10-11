<script setup>
import { computed } from "vue";

const props = defineProps(["href", "active"]);

const classes = computed(() =>
  props.active
    ? "bg-indigo-700 text-white rounded-md py-2 px-3 text-sm font-medium"
    : "bg-indigo-800 text-white rounded-md py-2 px-3 text-sm font-medium"
);
</script>

<template>
  <RouterLink :to="href" :class="classes">
    <slot />
  </RouterLink>
</template>
