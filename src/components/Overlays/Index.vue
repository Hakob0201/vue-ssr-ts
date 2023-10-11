<script setup>
defineProps({
  data: {
    type: Object,
    required: true,
  },
  isEdite: {
    type: Boolean,
    required: true,
    default: () => false,
  },
});
</script>

<template>
  <!--
      Close button, show/hide based on slide-over state.

      Entering: "ease-in-out duration-500"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in-out duration-500"
        From: "opacity-100"
        To: "opacity-0"
    -->
  <!-- Slide-over panel, show/hide based on slide-over state. -->
  <div class="h-full bg-white px-8 overflow-y-auto">
    <div class="pb-16 space-y-6">
      <div>
        <div
          class="block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=512&amp;q=80"
            alt=""
            class="object-cover"
          />
        </div>
      </div>
      <div>
        <h3 class="font-medium text-gray-900">{{ data.name }}</h3>
        <dl
          class="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200"
        >
          <div class="py-3 flex justify-between text-sm font-medium">
            <dt class="text-gray-500">Availability</dt>
            <dd class="text-gray-900">{{ data.availability }}</dd>
          </div>
          <div class="py-3 flex justify-between text-sm font-medium">
            <dt class="text-gray-500">Start date</dt>
            <dd class="text-gray-900">June 8, 2020</dd>
          </div>
          <div class="py-3 flex justify-between text-sm font-medium">
            <dt class="text-gray-500">End date</dt>
            <dd class="text-gray-900">June 8, 2020</dd>
          </div>
        </dl>
      </div>
      <div>
        <h3 class="font-medium text-gray-900">Description</h3>
        <div class="mt-2 flex items-center justify-between">
          <p class="text-sm text-gray-500 italic" v-if="data.content">
            {{ JSON.parse(data.content).blocks[0].text }}
          </p>
        </div>
      </div>
      <div>
        <h3 class="font-medium text-gray-900">Lecturers</h3>
        <ul
          role="list"
          class="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200"
        >
          <template v-for="lecturer in data.lecturers" :key="lecturer.id">
            <li class="py-3 flex justify-between items-center">
              <div class="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=1024&amp;h=1024&amp;q=80"
                  alt=""
                  class="w-8 h-8 rounded-full"
                />
                <p class="ml-4 text-sm font-medium text-gray-900">
                  {{ lecturer.user.full_name }}
                </p>
              </div>
              <button
                v-if="isEdite"
                type="button"
                class="ml-6 bg-white rounded-md text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Remove<span class="sr-only"> Aimee Douglas</span>
              </button>
            </li>
          </template>
        </ul>
      </div>
      <div class="flex">
        <button
          type="button"
          class="flex-1 bg-indigo-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Download
        </button>
        <button
          v-if="isEdite"
          type="button"
          class="flex-1 ml-3 bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-blue-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Edit
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
