import { useState } from 'react';

export default function useFetch(baseUrl: string) {
  const [loading, setLoading] = useState<boolean>(false);

  function get(url: string) {
    return new Promise((resolve, reject) => {
      fetch(baseUrl + url)
        .then(response => response.json())
        .then(data => {
          if (!data) {
            reject(data)
          }
          resolve(data);
        })
        .catch(error => console.error(error))
        .finally(() => setLoading(false));
    })
  }

  return { get, loading };
}
