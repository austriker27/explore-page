<template>
  <a :href="url" target="_blank" class="uppercase font-sans font-bold text-base md:text-lg tracking-widest py-4 px-12 md:px-14 text-white bg-gradient-to-r from-red-900 to-red-300 inline-flex self-start hover:shadow-lg hover:shadow-red-900/50 transition-all duration-200 ease-out hover:opacity-80  focus-visible:ring-red-900 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-offset-4">
    {{ label }}
  </a>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
})
</script>
