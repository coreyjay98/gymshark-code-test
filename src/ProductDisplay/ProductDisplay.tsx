import { ContextProps } from "../Helpers/Interfaces";
import ProductList from "../ProductList/ProductList";
import "./ProductDisplay.css";
const ProductDisplay = ({
  productDataContextSetter,
  productDataContext,
}: ContextProps) => {
  return (
    <div className="productDisplay">
      <p className="productTitle">Products</p>
      <ProductList
        productDataContextSetter={productDataContextSetter}
        productDataContext={productDataContext}
      />
    </div>
  );
};

export default ProductDisplay;
