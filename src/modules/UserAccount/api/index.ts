export function updateChangeLanguage (data: any) {
  return request({
    url: '/acl/changelanguage',
    method: 'post',
    data
  });
}