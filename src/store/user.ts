import { defineStore } from 'pinia';
import { LoginUser } from '@/api/user';
import { toast } from 'vue3-toastify';
import { error } from '@/utils';

interface IUser {
  organization: string | null;
  user: object;
  token: string | null;
}

interface LUser {
  email: string;
  password: string;
}
export interface IUserState {
  userInfo: IUser;
  errors: any[];
}

export const useUser = defineStore('user', {
  state(): IUserState {
    return {
      userInfo: {
        organization: null,
        user: {},
        token: null
      },
      errors: []
    };
  },
  actions: {
    updateUser(info: IUser) {
      this.userInfo = info;
    },
    updateToken(token: string) {
      this.userInfo.token = token;
    },
    async login(params: LUser) {
      try {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const user = await LoginUser(params);

        if (user.status === 'fail') {
          this.errors = user.errors;
          toast(error(this.errors)?.message, {
            position: toast.POSITION.BOTTOM_RIGHT
          });

          return false;
        }
        this.updateToken(user.access_token);

        return true;
      } catch (error) {
        return false;
      }
    }
  }
});
