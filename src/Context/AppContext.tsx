import React, { useState } from "react";

export const ContextWrapper = (props: any) => {
  const [productData, setProductData] = useState([]);

  const setData = (updateProductData: any) => {
    setProductData(updateProductData);
  };

  return (
    <ContextWrapper context={{ productData, setData }}>
      {props.children}
    </ContextWrapper>
  );
};
