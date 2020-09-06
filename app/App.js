import React from "react";
import ReactDOM, { render } from "react-dom";
import { Nav, Footer, Routes } from "./components";
export default function App() {
  return (
    <div id="app">
      <Nav />
      <div id="main">
        <Routes />
      </div>

      <Footer />
    </div>
  );
}
