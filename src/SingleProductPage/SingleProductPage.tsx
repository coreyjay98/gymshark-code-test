import { useSearchParams } from "react-router-dom";
import "./SingleProductPage.css";
import {
  AvailableSize,
  ContextProps,
  ProductContainer,
} from "../Helpers/Interfaces";
import { useEffect, useState } from "react";
import ErrorComponent from "../ErrorComponent/ErrorComponent";

const SingleProductPage = ({ productDataContext }: ContextProps) => {
  const [searchParams] = useSearchParams();
  const [carouselCount, setCarouselCount] = useState<number>(0);
  const [selectedProduct, setSelectedProduct] = useState<ProductContainer>();

  // Get size from search param - const itemSize = searchParams.get("size");

  useEffect(() => {
    const itemId = searchParams.get("id");
    // Find item from ID in URL
    const productFinder = (itemId: string) =>
      productDataContext?.find(
        ({ id }: ProductContainer) => itemId === id.toString()
      );
    setSelectedProduct(productFinder(itemId?.toString()!));
  }, [productDataContext, searchParams]);

  // Handle user clicking carousel arrows
  const carouselCountHandler = (input: number) => {
    setCarouselCount(input === 1 ? carouselCount + 1 : carouselCount - 1);
  };

  // Choose to get image from featured media or other media
  const imageSelector = (productFinder: ProductContainer, input: number) => {
    if (input === 0) {
      return (
        productFinder?.featuredMedia?.src || "https://placehold.co/1692x2018"
      );
    } else {
      return productFinder.media[input].src || "https://placehold.co/1692x2018";
    }
  };

  return (
    <>
      {selectedProduct ? (
        <div className="singleProductPage">
          <div className="singleProductDisplay">
            <p className="title">
              {selectedProduct?.title} - {selectedProduct?.colour}
            </p>
            <div className="imageWithDescription">
              <div className="imageCarousel">
                <img
                  className="image"
                  src={imageSelector(selectedProduct!, carouselCount)}
                  alt={selectedProduct?.title}
                />
                <div className="carouselHolder">
                  {carouselCount >= 1 && (
                    <button
                      className="carouselButton"
                      onClick={() => carouselCountHandler(-1)}
                    >
                      {"<"}
                    </button>
                  )}
                  <div></div>
                  {carouselCount + 1 !== selectedProduct?.media.length && (
                    <button
                      className="carouselButton"
                      onClick={() => carouselCountHandler(1)}
                    >
                      {">"}
                    </button>
                  )}
                </div>
              </div>
              <div className="descriptionDisplay">
                <div className="price">£{selectedProduct.price}</div>
                <div className="availableSizes">
                  <p>Sizes Available</p>
                  <div className="singleProductSizes">
                    {selectedProduct?.availableSizes.map(
                      (availableSize: AvailableSize) => (
                        <div
                          className={`singleSize ${
                            availableSize.inStock ? "active" : "notActive"
                          }`}
                        >
                          {availableSize.size.toUpperCase()}
                        </div>
                      )
                    )}
                  </div>
                </div>
                <div
                  className="description"
                  dangerouslySetInnerHTML={{
                    __html: selectedProduct?.description!,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <ErrorComponent />
      )}
    </>
  );
};

export default SingleProductPage;
