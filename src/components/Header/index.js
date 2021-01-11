import React from "react";
import { LinkR } from "../styledElements";

const Header = () => {
  return (
    <div className="title">
      <LinkR to="/">
        <h1> TMDb App </h1>
      </LinkR>
      <LinkR to="/favorites">
         <span className="favorite"> My Favourites</span>
      </LinkR>
    </div>
  );
};

export default Header;
