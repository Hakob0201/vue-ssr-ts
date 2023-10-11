import { defineStore } from 'pinia';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { store } from '@/store';

// import { sleep } from '@/utils/request';
import {
  updateChangeLanguage
} from '@/modules/UserAccount/api';
// import { changeLocale } from '@/locales/useLocale';

export interface IUserAccountState {
  locale: string;
  demoList: any;
  userInfo: any;
}

export const useUserAccountStore = defineStore('UserAccount', {
  state: (): IUserAccountState => {
    return {
      locale: 'hy',
      demoList: {},
      userInfo: {}
    };
  },
  getters: {
    // demoList: state => state.demoList
  },
  actions: {
    async updateChangeLanguage (params: any) {
      const result = await updateChangeLanguage(params);
      return this.filterResponse(result);
    },
    setLanguage (data: { locale: any }) {
      this.locale = data.locale;
    }
  }
});

// Need to be used outside the setup
export function useUserAccountStoreWithOut() {
  return useUserAccountStore(store);
}
