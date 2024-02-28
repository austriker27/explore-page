<template>
  <div class="bg-white p-8 md:p-14 lg:py-[4.5rem] lg:pr-[4.5rem] lg:pl-16 relative max-w-[36rem]">
      <button @click="$emit('closeModal')" aria-label="Close Modal" class="absolute top-4 right-4 transition-opacity duration-200 ease-out hover:opacity-80 focus-visible:ring-4 focus-visible:ring-red-900 focus-visible:outline-none">
        <XMark class="w-4 h-4" />
      </button>
      <slot/>

    </div>
</template>

<script setup>
import XMark from '@/components/icons/XMark.vue';

defineProps({
  showModal: {
    type: Boolean,
    default: false
  }
})
</script>
