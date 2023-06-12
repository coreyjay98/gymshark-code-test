import Product from "../Product/Product";
import "./ProductList.css";
import { useProductData } from "../Hooks/useProductData";
import { useEffect } from "react";
import { ContextProps, ProductContainer } from "../Helpers/Interfaces";
import ErrorComponent from "../ErrorComponent/ErrorComponent";
const ProductList = ({
  productDataContextSetter,
  productDataContext,
}: ContextProps) => {
  // Api Call for product data
  const { data, isLoading, error } = useProductData(
    "https://cdn.develop.gymshark.com/training/mock-product-responses/algolia-example-payload.json"
  );

  useEffect(() => {
    // Sets api data to context state
    productDataContextSetter(data!);
  }, [data, isLoading, productDataContextSetter, productDataContext]);

  return (
    <div className="productList">
      {isLoading ? (
        <p className="loader">Please wait to see all our items</p>
      ) : (
        <>
          {productDataContext?.map((productAttributes: ProductContainer, i) => (
            <Product productAttributes={productAttributes} key={i} />
          ))}
        </>
      )}
      {error && <ErrorComponent />}
    </div>
  );
};
export default ProductList;
