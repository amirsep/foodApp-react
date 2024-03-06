import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <>
      <div className={classes.card}>{props.children}</div>
      <p
        style={{
          color: "white",
          display: " flex",
          justifyContent: " center",
        }}
      >
        Made by ❤️ - Mohammad Amir | ReactJs Developer
      </p>
    </>
  );
};

export default Card;
