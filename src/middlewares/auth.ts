// auth middleware
import { useUser } from '@/store/user';

export default async function auth() {
  const authStore = useUser();

  const user = await authStore.userInfo.token;

  if (!user) {
    console.log('Not logged in');
    // return next({
    //   name: 'login'
    // });
  }
  alert();
  // return next();
}
