export function callAPI(path, method = 'GET', params={}) {
  const headers = new Headers({
    'Content-Type': 'application/json',
    Accept: 'application/json',
  });

  let url = `https://sec.meetkaruna.com/api/v1${path}?user_id=danigro77`;
  if (params.page) {
    url += `&page=${params.page}`;
  }
  if (params.per_page) {
    url += `&per_page=${params.per_page}`;
  }
  return fetch(url, { headers, method })
    .then(resp => {
      return resp.json();
    });
}