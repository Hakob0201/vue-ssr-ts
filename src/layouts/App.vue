<template>
  <div>
    <!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->
    <div
      class="fixed inset-0 flex z-40 md:hidden"
      role="dialog"
      aria-modal="true"
      :class="{ hidden: isLeftNav }"
      @click="() => (isLeftNav = true)"
    >
      <div
        class="fixed inset-0 bg-gray-600 bg-opacity-75"
        aria-hidden="true"
      ></div>
      <div class="relative flex-1 flex flex-col max-w-xs w-full bg-indigo-700">
        <div class="absolute top-0 right-0 -mr-12 pt-2">
          <button
            type="button"
            class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <span class="sr-only">Close sidebar</span>
            <!-- Heroicon name: outline/x -->
            <svg
              class="h-6 w-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div class="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
          <div class="flex-shrink-0 flex items-center px-4">
            <img
              class="h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-logo-indigo-300-mark-white-text.svg"
              alt="Workflow"
            />
          </div>
          <nav class="mt-5 px-2 space-y-1">
            <!-- Current: "bg-indigo-800 text-white", Default: "text-white hover:bg-indigo-600 hover:bg-opacity-75" -->
            <Test
              :href="`/${$route.params.organization_id}`"
              name="home"
              img-src=""
            >
              <template #icon>
                <IconHome />
              </template>
            </Test>
          </nav>
        </div>
        <div class="flex-shrink-0 flex border-t border-indigo-800 p-4">
          <RouterLink
            to=""
            class="flex-shrink-0 group block"
          >
            <!--            `/${$route.params.organization_id}/account`-->
            <div class="flex items-center">
              <div>
                <img
                  class="inline-block h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                  alt=""
                />
              </div>
              <div class="ml-3">
                <p class="text-base font-medium text-white">
                  {{ userInfo.user.first_name }} {{ userInfo.user.last_name }}
                </p>
                <p
                  class="text-sm font-medium text-indigo-200 group-hover:text-white"
                >
                  View profile
                </p>
              </div>
            </div>
          </RouterLink>
        </div>
      </div>

      <div class="flex-shrink-0 w-14" aria-hidden="true">
        <!-- Force sidebar to shrink to fit close icon -->
      </div>
    </div>

    <div class="flex flex-col flex-1">
      <div class="min-h-full">
        <div class="pb-32">
          <nav
            class="bg-blue-600 border-b border-indigo-300 border-opacity-25 lg:border-none"
          >
            <div class="mx-auto px-2 sm:px-4 lg:px-8">
              <div
                class="relative h-16 flex items-center justify-between lg:border-b lg:border-indigo-400 lg:border-opacity-25"
              >
                <div class="px-2 flex items-center lg:px-0">
                  <div class="flex-shrink-0">
                    <router-link :to="$route.params.organization_id">
                      <img
                        class="block h-8 w-8"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-300.svg"
                        alt="Workflow"
                      />
                    </router-link>
                  </div>
                  <div class="hidden lg:block lg:ml-10">
                    <div class="flex space-x-4">
                      <!-- Current: "bg-indigo-700 text-white", Default: "text-white hover:bg-indigo-500 hover:bg-opacity-75" -->
                      <Link
                        :href="`/${$route.params.organization_id}/courses`"
                        class="bg-indigo-700 text-white rounded-md py-2 px-3 text-sm font-medium"
                        aria-current="page"
                      >
                        Curses
                      </Link>
                    </div>
                  </div>
                </div>
                <div class="hidden lg:py-2 lg:flex lg:space-x-4" aria-label="Global">
                  <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                  <router-link :to="`/${$route.params.organization_id}`" class="bg-blue-350 font-bold shadow-lg text-white rounded-md py-2 px-3 inline-flex items-center text-sm">
                    Dashboard
                  </router-link>
                </div>
                <div
                  class="flex-1 px-2 flex justify-center lg:ml-6 lg:justify-end"
                >
                  <div class="max-w-lg w-full lg:max-w-xs">
                    <label for="search" class="sr-only">Search</label>
                    <div
                      class="relative text-gray-400 focus-within:text-gray-600"
                    >
                      <div
                        class="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center"
                      >
                        <!-- Heroicon name: solid/search -->
                        <svg
                          class="h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                      <input
                        id="search"
                        class="block w-full bg-white py-2 pl-10 pr-3 border border-transparent rounded-md leading-5 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white focus:border-white sm:text-sm"
                        placeholder="Search"
                        type="search"
                        name="search"
                      />
                    </div>
                  </div>
                </div>
                <div class="flex lg:hidden">
                  <!-- Mobile menu button -->
                  <button
                    type="button"
                    class="bg-blue-350 shadow-lg p-2 rounded-md inline-flex items-center justify-center text-indigo-200 hover:text-white hover:bg-blue-450 hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white"
                    aria-controls="mobile-menu"
                    aria-expanded="false"
                    @click="() => (isTopNav = !isTopNav)"
                  >
                    <span class="sr-only">Open main menu</span>
                    <!--
                      Heroicon name: outline/menu

                      Menu open: "hidden", Menu closed: "block"
                    -->
                    <svg
                      class="block h-6 w-6"
                      :class="{ hidden: !isTopNav }"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                    <!--
                      Heroicon name: outline/x

                      Menu open: "block", Menu closed: "hidden"
                    -->
                    <svg
                      class="h-6 w-6"
                      :class="{ hidden: isTopNav }"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div class="hidden lg:block lg:ml-4">
                  <div class="flex items-center">
                    <button
                      type="button"
                      class="bg-blue-350 shadow flex-shrink-0 rounded-full p-1 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white"
                    >
                      <span class="sr-only">View notifications</span>
                      <!-- Heroicon name: outline/bell -->
                      <svg
                        class="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                        />
                      </svg>
                    </button>
                    <!-- Profile dropdown -->
                    <Dropdown>
                      <template #trigger>
                        <div class="ml-3 relative flex-shrink-0">
                          <div>
                            <button
                              id="user-menu-button"
                              type="button"
                              class="bg-indigo-600 rounded-full flex text-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white"
                              aria-expanded="false"
                              aria-haspopup="true"
                            >
                              <span class="sr-only">Open user menu</span>
                              <img
                                class="rounded-full h-8 w-8"
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                                alt=""
                              />
                            </button>
                          </div>
                        </div>
                      </template>
                      <template #content>
                        <DropdownLink
                          :href="`/${$route.params.organization_id}/account`"
                          :active="true"
                        >
                          Your Profile
                        </DropdownLink>
                        <DropdownLink
                          href="#"
                          :active="false"
                          @click="
                            () => {
                              $store.dispatch('user/sendLogOut');
                              $router.push({ name: 'login' });
                            }
                          "
                        >
                          Log out
                        </DropdownLink>
                      </template>
                    </Dropdown>
                  </div>
                </div>
              </div>
            </div>

            <!-- Mobile menu, show/hide based on menu state. -->
            <div
              id="mobile-menu"
              class="lg:hidden"
              :class="{ hidden: isTopNav }"
            >
              <div class="pt-4 pb-3 border-t border-indigo-700">
                <div class="px-5 flex items-center">
                  <div class="flex-shrink-0">
                    <img
                      class="rounded-full h-10 w-10"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                      alt=""
                    />
                  </div>
                  <div class="ml-3">
                    <div class="text-base font-medium text-white">
                      {{ userInfo.user.first_name }} {{ userInfo.user.last_name }}
                    </div>
                    <div class="text-sm font-medium text-indigo-300">
                      {{ userInfo.user.email }}
                    </div>
                  </div>
                  <button
                    type="button"
                    class="ml-auto bg-indigo-600 flex-shrink-0 rounded-full p-1 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white"
                  >
                    <span class="sr-only">View notifications</span>
                    <!-- Heroicon name: outline/bell -->
                    <svg
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      />
                    </svg>
                  </button>
                </div>
                <div class="mt-3 px-2 space-y-1">
                  <RouterLink
                    :to="`/${$route.params.organization_id}/account`"
                    class="block rounded-md py-2 px-3 text-base font-medium text-white hover:bg-indigo-500 hover:bg-opacity-75"
                  >
                    Your Profile
                  </RouterLink>

                  <a
                    href="#"
                    class="block rounded-md py-2 px-3 text-base font-medium text-white hover:bg-indigo-500 hover:bg-opacity-75"
                  >
                    Settings
                  </a>

                  <a
                    href="#"
                    class="block rounded-md py-2 px-3 text-base font-medium text-white hover:bg-indigo-500 hover:bg-opacity-75"
                  >
                    Sign out
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <main class="-mt-32">
          <!-- Replace with your content -->
          <RouterView />
          <!-- /End replace -->
        </main>
      </div>
      <main class="flex-1">
        <!--        <RouterView/>-->
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { useUser } from '@/store/user';
import Dropdown from '@/components/nav/Dropdown.vue';
import DropdownLink from '@/components/nav/DropdownLink.vue';
import auth from '@/middlewares/auth';

import { getCookie } from '@/utils';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'App',
  components: { Dropdown, DropdownLink },
  setup() {
    const router = useRouter();

    onBeforeMount( () => {
      if(!getCookie('access_token')) router.push(`/auth/login`);
    });

    const userStore = useUser();
    const userInfo = computed(() => userStore.userInfo);

    const isLeftNav = ref(true);
    const isTopNav = ref(true);

    return { isLeftNav, isTopNav, userInfo, auth };
  }

});
</script>

<style scoped></style>
