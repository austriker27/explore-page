
<template>
  <a :aria-label="type + ' link'" :href="url" target="_blank" class="shadow-sm hover:shadow-lg transition-all duration-200 ease-out hover:opacity-80  focus-visible:ring-red-900 focus-visible:outline-none focus-visible:ring-4">
    <LogoFacebook v-if="type === 'Facebook'" class="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16" />
    <LogoInstagram v-if="type === 'Instagram'" class="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16" />
  </a>
</template>

<script setup>
import LogoFacebook from '@/components/LogoFacebook.vue';
import LogoInstagram from '@/components/LogoInstagram.vue';

defineProps({
  type: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
})
</script>
