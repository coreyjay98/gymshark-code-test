import React, { useState } from "react";
import "./App.css";
import { AppBar, Toolbar } from "@mui/material";
import HomePage from "./HomePage/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingleProductPage from "./SingleProductPage/SingleProductPage";
import { ProductContainer } from "./Helpers/Interfaces";
import GymsharkLogo from "./images/GymsharkLogo.png";

function App() {
  // Gives a simple context of product list
  const [productDataContext, setProductDataContext] = useState<
    ProductContainer[]
  >([]);

  const productDataContextSetter = (data: ProductContainer[]) => {
    setProductDataContext(data);
  };

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <img src={GymsharkLogo} alt="Gymshark logo" className="logo" />
        </Toolbar>
      </AppBar>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                productDataContext={productDataContext}
                productDataContextSetter={productDataContextSetter}
              />
            }
          />
          <Route
            path="/product"
            element={
              <SingleProductPage
                productDataContext={productDataContext}
                productDataContextSetter={productDataContextSetter}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
