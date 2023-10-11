import axios from '@/api/axios';

interface IResponse<T> {
  config: object;
  error: object;
  code: number;
  data: T;
  payload: T;
  message: string;
  statusText: string;
  status: number;
}

export interface IFruitItem {
  id: number;
  name: string;
  price: number;
}

interface LUser {
  email: string;
  password: string;
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const LoginUser = async (params: LUser) => {
  try {
    const { data } = await axios.post<IResponse<IFruitItem[]>>('/auth/login', params );
    return data;
  } catch (e: any) {
    return e.data;
  }

};
