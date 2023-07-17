import React from "react";
import classes from "./Layout.module.css";
import MainNavgation from "./MainNavgation";

export default function layout(props) {
  return (
    <div>
      <MainNavgation />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}
