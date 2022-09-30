const ProductList: React.FC<{ products: String[] }> = ({ products }) => {
  return (
    <ul>
      {products.map((product, index) => (
        <li>{product}</li>
      ))}
    </ul>
  );
};

export default ProductList;
