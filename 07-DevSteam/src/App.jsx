import React from "react";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Promotion from "./components/Promotion";

const App = () => {
  return (
    <>
      <Header />
      <Promotion />
    </>
  );
};

export default App;
