<template>
  <div class="min-h-screen flex">
    <div class="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 bg-blue-600">
      <router-view v-slot="{ Component }">
        <Suspense>
          <component :is="Component" />
        </Suspense>
      </router-view>
    </div>
    <div class="hidden lg:block relative w-0 flex-1">
      <img class="absolute inset-0 h-full w-full object-cover" src="https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg?cs=srgb&dl=pexels-pixabay-301926.jpg&fm=jpg" alt="" />
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { getCookie } from '@/utils/';

export default defineComponent({
  name: 'Guest',
  setup() {
    const router = useRouter();

    onBeforeMount( () => {
      if(getCookie('access_token')) router.push(`/`);
    });

    return { };
  }
});
</script>

<style scoped></style>
