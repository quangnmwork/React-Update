import { generateProducts } from "./data";
import { ChangeEvent, useState, useTransition } from "react";
import ProductList from "./components/ProductList";

const dummyProducts: String[] = generateProducts();
function filterProducts(filterTerm: string) {
  if (!filterTerm) {
    return dummyProducts;
  }
  return dummyProducts.filter((product: String) =>
    product.includes(filterTerm)
  );
}

function App() {
  const [filterTerm, setFilterTerm] = useState<string>("");

  const [isPending, startTransition] = useTransition();
  const filteredProducts = filterProducts(filterTerm);
  console.log(isPending);

  return (
    <div className="App">
      <input
        type="text"
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          console.log(event.target.value);
          startTransition(() => setFilterTerm(event.target.value));
          // setFilterTerm(event.target.value);
        }}
      />

      <ProductList products={filteredProducts} />
    </div>
  );
}

export default App;

