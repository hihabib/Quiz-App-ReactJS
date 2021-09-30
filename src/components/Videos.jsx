import React from "react";
import classes from "../styles/Videos.module.css";

const Videos = ({ children }) => {
  return <div class={classes.videos}>{children}</div>;
};

export default Videos;
