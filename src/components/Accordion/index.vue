<template>
  <div>
    <button
      class="w-full p-5 font-medium text-left text-gray-500 border-b-1 border-gray-200 bg-white shadow"
      :class="[isOpen ? 'rounded' : 'rounded']"
      data-accordion-target="#accordion-collapse-body-1"
      aria-expanded="true"
      aria-controls="accordion-collapse-body-1"
    >
      <div class="flex items-center justify-between w-full">
        <div class="flex gap-5">
          <div class="flex items-center">
            <input disabled type="radio" checked value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2" />
          </div>
          <slot name="title"></slot>
        </div>
        <div
          class="p-5"
          @click="toggleAccordion(data.id)"
        >
          <svg v-if="isLoading" aria-hidden="true" class="inline w-4 h-4 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
          </svg>
          <svg
            v-else
            class="w-3 transition-all duration-200 transform"
            :class="{
              'rotate-180': isOpen,
              'rotate-0': !isOpen,
            }"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 10"
            aria-hidden="true"
          >
            <path
              d="M15 1.2l-7 7-7-7"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <div
        v-show="isOpen"
        :id="`collapse${_uid}`"
        class="p-5 relative font-light"
      >
        <div
          v-if="isLoading"
          :id="`is-loading${_uid}`"
          role="status"
          class="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2"
        >
          <svg
            aria-hidden="true"
            class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span class="sr-only">Loading...</span>
        </div>
        <slot v-else name="content">
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <template v-if="modules.length && modules[data.id]">
              <div class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <div>
                  <h2>{{ JSON.parse(modules[data.id].content).blocks[0].text }}</h2>
                </div>
                <div v-for="(element, index) in modules[data.id]['elements']" :key="element.id">
                  <div class="flex items-center justify-between mt-5 w-full border-t border-gray-200">
                    <div class="flex item-center">
                      <UiIcon
                        class="flex w-6 text-gray-600 ml-5"
                        icon="text"
                      />
                      <div class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                        {{ ++index }}. {{ element.name }}
                      </div>
                    </div>
                    <div class="px-6 py-4 bg-gray-50">
                      <svg
                        class="w-3 transition-all duration-200 transform -rotate-90"
                        fill="none"
                        stroke="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 10"
                        aria-hidden="true"
                      >
                        <path
                          d="M15 1.2l-7 7-7-7"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </slot>
      </div>
    </button>
  </div>
</template>

<script lang="ts">
import { defineProps, defineComponent, ref } from 'vue';
import { useModule } from '@/store/module';
export default defineComponent({
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  async setup() {
    const isOpen = ref(false);
    const isLoading = ref(false);
    const moduleStore = useModule();
    // const emit = defineEmits(['toggleAccordion']);
    defineProps({
      data: Object
    });

    const modules = computed(() => moduleStore.moduleList);

    const toggleAccordion = (id: number) => {
      isOpen.value = !isOpen.value;
      isLoading.value = !isLoading.value;
      moduleStore.getModule(id).finally(() => {
        isLoading.value = !isLoading.value;
      });
      // emit('toggleAccordion');
    };

    return { isOpen, isLoading, modules, toggleAccordion };

  }
});
</script>
