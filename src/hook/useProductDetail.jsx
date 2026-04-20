import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function useProductDetail() {
  const route = useParams();
  const [product, setProduct] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://fakestoreapi.com/products/${route.id}`,
        );
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
  }, []);
  return {
    product,
    error,
    isLoading,
  };
}

export default useProductDetail;
