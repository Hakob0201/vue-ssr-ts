export const isPromise = (obj: any) =>
  !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';

export const error = (errors: any, key: string | null) => errors.length ? key ? errors.find((error: any) => error.validation === key) : errors.find((error: any) => !error.validation) : null;

export const setCookie = (name: string, value: string | number | boolean, days = 7, path = '/') => {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=' + path;
};

export const getCookie = (name: string) => {
  return document.cookie.split('; ').reduce((r, v) => {
    const parts = v.split('=');
    return parts[0] === name ? decodeURIComponent(parts[1]) : r;
  }, '');
};

export const deleteCookie = (name: string, path: string | undefined) => {
  setCookie(name, '', -1, path);
};
