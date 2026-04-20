function ShowProduct({ image, price, title }) {
  return (
    <article className="border p-2 rounded-2xl text-center hover:scale-[1.04] transition-all ease-in-out duration-150">
      <img
        src={image}
        alt="product images"
        className="w-full h-72 object-contain"
      />
      <h3>{title.substring(0, 20) + " ..."}</h3>
      <p className="text-red-700">{`$${price}`}</p>
    </article>
  );
}

export default ShowProduct;
