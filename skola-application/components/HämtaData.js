// components/DataFetcher.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataFetcher = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('URL_TILL_API').then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Hämtad Data:</h2>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};

export default DataFetcher;
