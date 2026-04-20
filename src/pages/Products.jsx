import AllProduct from "../components/AllProduct";
import { useTitle } from "../hook/useTitle";

function Products() {
  useTitle("All-Products | Jackie Store");
  return (
    <main>
      <AllProduct />
    </main>
  );
}

export default Products;
