import { useEffect, useState } from 'react';

export default function useFetchData(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [url]);

  return data;
}

export { useFetchData };
