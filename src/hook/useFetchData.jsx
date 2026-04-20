import { useState, useEffect } from "react";

useState;
function useFetchData() {
  const [product, setProduct] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [showMore, setShowMore] = useState(8);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        if (res.ok) {
          const data = await res.json();
          setProduct(data);
        } else {
          throw new Error("Something went wrong...");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [showMore]);
  return {
    product,
    error,
    isLoading,
    showMore,
    setShowMore,
  };
}

export default useFetchData;
