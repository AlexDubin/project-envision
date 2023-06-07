import { Loading } from 'notiflix/build/notiflix-loading-aio';

/**
 * Wraps promise with loader
 * @param {Promise} promise - Any promise to wait
 * @returns your data in promise
 */
export default async function loaderWrapper(promise) {
  Loading.circle({
    zindex: 4000,
    backgroundColor: 'rgba(0,0,0,1)',
    svgColor: '#F87719',
    clickToClose: false,
  });

  const res = await promise;
  Loading.remove(1000);
  return res;
}
