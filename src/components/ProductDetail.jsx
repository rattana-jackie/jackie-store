import { Link } from "react-router-dom";
import useProductDetail from "../hook/useProductDetail";
import { useTitle } from "../hook/useTitle";
import { useState } from "react";

function ProductDetail() {
  const [cartVal, setCartVal] = useState(1);
  const { product, error, isLoading } = useProductDetail();
  useTitle(`Product-Detail | ${product.title}`);
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
    <div className="w-full">
      <div className="bg-slate-100 p-3 flex flex-wrap">
        <Link to="/">
          Home<i className="fas fa-chevron-right"></i>
        </Link>
        <Link to="/products">
          Product<i className="fas fa-chevron-right"></i>
        </Link>
        <p>{product.title}</p>
      </div>
      <div className="px-10 lg:px-0 py-10 grid grid-cols-1 xl:grid-cols-2 gap-7">
        <article>
          <img
            src={product.image}
            alt="product images"
            className="w-full h-125 object-contain border rounded-md p-3"
          />
        </article>
        <article className="flex flex-col gap-4">
          <Link to="/products">
            <button className="category">{product.category}</button>
          </Link>

          <h3 className="font-bold text-3xl">{product.title}</h3>
          <p className="text-red-700 font-bold text-2xl">{`$${product.price}`}</p>
          <div className="flex w-48 border justify-between font-bold">
            <button
              className="px-8"
              onClick={() => (cartVal > 0 ? setCartVal(cartVal - 1) : null)}
            >
              <i className="fas fa-minus"></i>
            </button>
            <p className="p-3">{cartVal}</p>
            <button className="px-8" onClick={() => setCartVal(cartVal + 1)}>
              <i className="fas fa-plus"></i>
            </button>
          </div>
          <button className="w-48 p-3 bg-black text-xl text-white">
            Add to Cart
          </button>
          <button className="w-48 p-3 bg-orange-600 text-xl text-white">
            Pay Now
          </button>
          <hr />
          <p>{product.description}</p>
        </article>
      </div>
      <div className="h-135 w-full"></div>
    </div>
  );
}

export default ProductDetail;
