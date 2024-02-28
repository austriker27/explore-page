<template>
  <main class="relative min-h-screen w-screen grid grid-cols-12 gap-4 p-9 selection:bg-red-800 selection:text-red-100 debug-screens">
    <div aria-hidden class="bg-red-900 h-full w-[30%] absolute left-0 top-0"></div>
    <div aria-hidden class="h-full absolute w-[70%] left-[30%]">
      <img
        :src="forestPic"
        alt="A beatuiful forest"
        class="h-full w-full object-cover"/>
    </div>


    <div class="z-10 relative col-span-11 sm:col-start-2 sm:col-span-10 md:col-start-2 md:col-span-10 xl:col-span-8 xl:col-start-2 flex items-end mb-12 sm:mb-24 md:mb-36">
      <Transition name="fade">
        <div v-if="!showModal" class="absolute bottom-0 left-0 will-change-transform flex flex-col gap-4 sm:gap-0">
          <h1 class="text-7xl sm:text-9xl md:text-[10rem] lg:text-[14rem] font-bold font-serif text-white">
            Explore
          </h1>
          <button
            @click="handleModalOpen()"
            class="flex items-center gap-4 md:gap-[0.72rem] focus-visible:ring-4 focus-visible:ring-white focus-visible:outline-none focus-visible:ring-offset-4 transition-opacity hover:opacity-80 duration-150 ease-out"
          >
            <PlusMarkIcon
              class="lg:w-11 w-7 lg:h-11 h-7 transition-transform duration-500 ease-in-out delay-0"
              :class="{ 'transform scale-75': buttonClicked }"
            />
            <span class="font-sans text-lg md:text-xl tracking-wide text-white">
              More Details
            </span>
          </button>
        </div>
      </Transition>
      <Transition name="grow">
        <Modal
          v-if="showModal"
          class="absolute bottom-0 left-0 z-50 will-change-transform"
          :showModal="showModal"
          @closeModal="handleCloseModal()"
        >
          <Transition name="fade-in-right" appear>
            <div v-if="showModalContent" class="flex flex-col gap-4 lg:gap-6">
              <h2 class="font-serif font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-red-900">
                Explore
              </h2>
              <p class="font-sans text-sm md:text-base lg:text-lg tracking-wider md:leading-5">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
              </p>
              <LinkButton label="Read more" url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
            </div>
          </Transition>
        </Modal>
      </Transition>
    </div>

    <div class="col-start-12 flex items-end relative z-10">
      <ul class="flex flex-col gap-4">
        <li v-for="link in socialMediaLinks" :key="link.name" >
          <IconLink  :type="link.name" :url="link.url" />
        </li>
      </ul>
    </div>
  </main>
</template>

<style scoped>
</style>

<script setup>
import { ref } from 'vue'

import PlusMarkIcon from '@/components/icons/Plus.vue';
import IconLink from '@/components/IconLink.vue';
import Modal from '@/components/Modal.vue';
import LinkButton from '@/components/LinkButton.vue';

import forestPic from '@/assets/forest.png'


const showModal = ref(false)
const buttonClicked = ref(false)
const showModalContent = ref(false)

const handleModalOpen = () => {
  buttonClicked.value = true;
  setTimeout(() => {
    showModal.value = true
    buttonClicked.value = false;
    showModalContent.value = true;
  }, 250);
}

const handleCloseModal = () => {
  showModalContent.value = false;
  setTimeout(() => {
    showModal.value = false;
  }, 500);
}


const socialMediaLinks = [
  {
    name: 'Facebook',
    url: 'https://facebook.com/'
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/'
  }
]
</script>
