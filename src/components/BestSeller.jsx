import React, { useEffect, useState } from "react";
import useFetchData from "../hook/useFetchData";
import ShowProduct from "./ShowProduct";
import { Link } from "react-router-dom";

function BestSeller() {
  let { product, error, isLoading, showMore, setShowMore } = useFetchData();
  const bestSeller = [...product];

  const handleShowMore = () => {
    showMore <= bestSeller.length ? setShowMore((showMore += 4)) : null;
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
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-4xl font-bold">Best Seller</h2>
      <p>Explore our best seller products</p>
      <section className="p-5 md:p-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 cursor-pointer mt-10">
        {bestSeller.slice(0, showMore).map((i) => {
          return (
            <Link key={i.id} to={`/products/${i.id}`}>
              <ShowProduct {...i} />
            </Link>
          );
        })}
      </section>
      <button
        className="px-5 py-3 bg-orange-500 rounded-md cursor-pointer hover:bg-orange-700 hover:text-white transition-bg ease-in duration-150 mt-10"
        onClick={handleShowMore}
      >
        Explore More
      </button>
    </div>
  );
}

export default BestSeller;
