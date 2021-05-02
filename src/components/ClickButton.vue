<template>
  <button>
    <slot>{{ label }}</slot>
  </button>
</template>

<script>
export default {
  emits: ["btn-click"],
  props: {
    label: {
      type: String,
      required: true,
    },
  },
};
</script>