import React from "react";
import mealsImage from "../../assets/meals.jpg";
import clasess from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={clasess.header}>
          <h1>Food App</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={clasess["main-image"]}>
        <img src={mealsImage} alt="a table full of delicious food!" />
      </div>
    </>
  );
};

export default Header;
