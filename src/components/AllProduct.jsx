import { useState } from "react";
import { useEffect } from "react";
import useFetchData from "../hook/useFetchData";
import ShowProduct from "./ShowProduct";
import { Link } from "react-router-dom";

function AllProduct() {
  const { product, error, isLoading } = useFetchData();
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    setFilter(product);
  }, [product]);

  const handleFilter = (category) => {
    const manFilter = product.filter((i) => {
      return i.category === category;
    });
    setFilter(manFilter);
  };

  if (error) return <h2>{error}</h2>;

  if (isLoading)
    return (
      <div className="w-full h-170 flex justify-center items-center">
        <button type="button" className="bg-orange-600 text-white p-2" disabled>
          <i className="fa-solid fa-spinner animate-spin"></i>
          Processing…
        </button>
      </div>
    );

  return (
    <div className="flex flex-col gap-20 items-center w-[90vw] md:w-[inherit] m-auto">
      <h2 className="pt-10 text-4xl font-bold">All Product</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-5">
        <button className="category" onClick={() => setFilter(product)}>
          All Products
        </button>
        <button
          onClick={() => handleFilter("men's clothing")}
          className="category"
        >
          Man's Clothes
        </button>
        <button
          className="category"
          onClick={() => handleFilter("women's clothing")}
        >
          women's Clothes
        </button>
        <button className="category" onClick={() => handleFilter("jewelery")}>
          jewelery
        </button>
        <button
          className="category"
          onClick={() => handleFilter("electronics")}
        >
          electronics
        </button>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 cursor-pointer">
        {filter.map((i) => (
          <Link key={i.id} to={`/products/${i.id}`}>
            <ShowProduct {...i} />
          </Link>
        ))}
      </section>
    </div>
  );
}

export default AllProduct;
