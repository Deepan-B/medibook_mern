import { useEffect, useState, useContext } from "react";
import { authContext } from "../context/AuthContext";

const useFetchData = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { token, user } = useContext(authContext);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url, {
          headers: {Authorization: `Bearer ${token}`},
        });

        const result = await res.json();


        if (!res.ok) {
          setLoading(false);
          setError(result.message + "😭");
          return;
        }

        setData(result.data);   // the data is changed
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(err.message);
      }
    };

    fetchData();
  }, [url]);


  return {
    data,
    loading,
    error,
  };
};

export default useFetchData;
