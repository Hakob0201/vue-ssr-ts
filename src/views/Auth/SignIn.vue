<template>
  <div class="mx-auto w-full max-w-sm lg:w-96">
    <div>
      <img
        class="h-12 w-auto"
        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
        alt="Workflow"
      />
      <h2 class="mt-6 text-3xl font-extrabold text-blue-50">
        Sign in to your account
      </h2>
      <p class="mt-2 text-sm text-blue-900">
        Or
        <RouterLink
          to="/auth/sign-up"
          class="font-medium text-blue-50 hover:text-blue-350"
        >
          Sign up
        </RouterLink>
      </p>
    </div>

    <div class="mt-8">
      <div>
        <div>
          <p class="text-sm font-medium text-blue-900">Sign in with</p>

          <div class="mt-1 grid grid-cols-3 gap-3">
            <div>
              <a
                href="#"
                class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span class="sr-only">Sign in with Facebook</span>
                <svg
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </div>

            <div>
              <a
                href="#"
                class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span class="sr-only">Sign in with Twitter</span>
                <svg
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
                  />
                </svg>
              </a>
            </div>

            <div>
              <a
                href="#"
                class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span class="sr-only">Sign in with GitHub</span>
                <svg
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div class="mt-6 relative">
          <div class="absolute inset-0 flex items-center" aria-hidden="true">
            <div class="w-full border-t border-blue-900/20"></div>
          </div>
          <div class="relative flex justify-center text-sm"></div>
        </div>
      </div>

      <div class="mt-6">
        <form
          action="#"
          method="POST"
          class="space-y-6"
          @submit.prevent="submitHandle()"
        >
          <div>
            <label for="email" class="block text-sm font-medium text-blue-900">
              Email address
            </label>
            <div class="mt-1">
              <input
                id="email"
                v-model="params.email"
                name="email"
                type="email"
                autocomplete="email"
                class="peer appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <span class="mt-2 text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                {{ error(errors, 'email')?.message }}
              </span>
            </div>
          </div>

          <div class="space-y-1">
            <label
              for="password"
              class="block text-sm font-medium text-blue-900"
            >
              Password
            </label>
            <div class="mt-1">
              <input
                id="password"
                v-model="params.password"
                name="password"
                type="password"
                autocomplete="current-password"
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <!--              <template v-if="ErrorMessages.password">-->
              <!--                <div-->
              <!--                  class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-1"-->
              <!--                  role="alert"-->
              <!--                >-->
              <!--                  <span class="block sm:inline">{{-->
              <!--                    ErrorMessages.password-->
              <!--                  }}</span>-->
              <!--                </div>-->
              <!--              </template>-->
            </div>
          </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label for="remember-me" class="ml-2 block text-sm text-blue-900">
                Remember me
              </label>
            </div>

            <div class="text-sm">
              <a
                href="#"
                class="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md text-sm font-medium text-blue-50 bg-black-900 hover:bg-black-900/30 focus:outline-none"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// import { useRouter } from 'vue-router';
import { computed, defineComponent, reactive, ref } from 'vue';
import { useUser } from '@/store/user';
import { error, setCookie } from '@/utils';
import { useRouter } from 'vue-router';
// import { toast } from 'vue3-toastify';
// import { mapActions } from 'pinia';
// import useToast from '@/composition/useToast';
// import userLogin from '@/composition/login';

export default defineComponent({
  name: 'SignIn',
  setup() {
    const params = reactive({
      email: '',
      password: ''
    });
    const userStore = useUser();
    const router = useRouter();
    const loading = ref(false);
    const errors = computed(() => userStore.errors);
    const isLogin = computed(() => !!userStore.userInfo.token);
    const userInfo = computed(() => userStore.userInfo);
    const submitHandle = async () => {
      const result = await userStore.login(params);
      console.log(result);
      if (result) {
        router.push(`/`);
        setCookie('access_token', userInfo.value.token, 1);
      }
      // const { email, password } = params;
      // if (!email) {
      //   toast('Wow so easy !', { position: toast.POSITION.BOTTOM_RIGHT });
      //   // ElNotification({
      //   //   type: 'error',
      //   //   title: 'Error',
      //   //   message: 'Username is required'
      //   // });
      //   return;
      // }
      // if (!password) {
      //   // ElNotification({
      //   //   type: 'error',
      //   //   title: 'Error',
      //   //   message: 'Password is required'
      //   // });
      //   return;
      // }
      loading.value = true;
      // window.setTimeout(() => {
      //   userStore.updateUser({
      //     name: email,
      //     userId: '1',
      //     token: Math.random().toString(36).slice(-8)
      //   });
      //   loading.value = false;
      // }, 1500);
    };
    return { params, loading, submitHandle, userInfo, isLogin, errors };
  },
  methods: { error }
});
</script>

<style scoped></style>
