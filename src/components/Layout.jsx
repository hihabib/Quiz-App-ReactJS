import React from "react";
import classes from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <main class={classes.main}>
      <div class={classes.container}>{children}</div>
    </main>
  );
};

export default Layout;
