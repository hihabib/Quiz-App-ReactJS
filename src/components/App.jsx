import React from "react";
import "../styles/App.css";
import Layout from "./Layout";
import Nav from "./Nav";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Nav></Nav>
      <Layout>
        <Home></Home>
      </Layout>
    </>
  );
};

export default App;
