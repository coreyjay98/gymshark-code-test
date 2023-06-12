import React from "react";
import "./HomePage.css";
import SpecialOffers from "../SpecialOffers/SpecialOffers";
import ProductDisplay from "../ProductDisplay/ProductDisplay";
import { ContextProps } from "../Helpers/Interfaces";

const HomePage = ({
  productDataContextSetter,
  productDataContext,
}: ContextProps) => {
  return (
    <div className="homePage">
      <SpecialOffers />
      <ProductDisplay
        productDataContext={productDataContext}
        productDataContextSetter={productDataContextSetter}
      />
    </div>
  );
};

export default HomePage;
