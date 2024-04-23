import { useEffect, useState, useContext } from "react";
import { authContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const useFetchData = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { token } = useContext(authContext);

  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url, {
          headers: {Authorization: `Bearer ${token}`},
        });

        const result = await res.json();

        if (!res.ok) {
          toast.error("login to see the details")
          navigate("/login");
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
