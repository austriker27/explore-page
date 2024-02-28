
<template>
  <UnLazyImage
    :thumbhash="thumbhash"
    auto-sizes
    :src="image"
  />
</template>

<script setup>
import { UnLazyImage } from '@unlazy/vue/components'

defineProps({
  image: {
    type: String,
    required: true
  },
  thumbhash: {
    type: String,
    required: false
  }
})

</script>
