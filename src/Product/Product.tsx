import { useState } from "react";
import { AvailableSize, ProductAttributes, Size } from "../Helpers/Interfaces";
import "./Product.css";
import { removeSpaceCapitaliseStart } from "../Helpers/TextHelpers";
import { useNavigate } from "react-router";

const Product = ({ productAttributes }: ProductAttributes) => {
  let navigate = useNavigate();
  const [showOverlay, setShowOverlay] = useState(false);

  // Navigates to single page when item is selected
  const selectProduct = (productId: number, productSize: Size) => {
    navigate(`/product?id=${productId}&size=${productSize}`);
  };

  return (
    <div
      className="product"
      onMouseEnter={() => setShowOverlay(true)}
      onMouseLeave={() => setShowOverlay(false)}
    >
      {productAttributes?.labels?.length && (
        <div className="labelDisplay">
          <p>{removeSpaceCapitaliseStart(productAttributes.labels[0])}</p>
        </div>
      )}
      <div className="imageCover">
        {showOverlay && (
          <div className="productOverlay">
            <p>Sizes Available</p>
            <div className="productSizes">
              {productAttributes?.availableSizes.map(
                (availableSize: AvailableSize) => (
                  <div
                    className={`size ${
                      availableSize.inStock ? "active" : "notActive"
                    }`}
                    onClick={() =>
                      selectProduct(productAttributes.id, availableSize.size)
                    }
                  >
                    {availableSize.size.toUpperCase()}
                  </div>
                )
              )}
            </div>
          </div>
        )}

        <img
          className="image"
          src={
            productAttributes?.featuredMedia.src ||
            "https://placehold.co/1692x2018"
          }
          alt={productAttributes?.title}
          loading="lazy"
        />
      </div>
      <div className="productDescription">
        <div className="productText">
          <p>{productAttributes?.title}</p>
          <p>{productAttributes?.colour}</p>
        </div>
        <p className="productPrice">
          £{productAttributes?.availableSizes[4].price}
        </p>
      </div>
    </div>
  );
};
export default Product;
