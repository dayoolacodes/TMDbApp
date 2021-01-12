import React from "react";
import { LinkR, LinkWrapper } from "../styledElements";

const Footer = () => {
  let goHome = "";

  if (
    window.location.href.includes("about") ||
    window.location.href.includes("favorites")
  ) {
    goHome = (
      <LinkWrapper>
        <LinkR to="/">Go Back Home</LinkR>
      </LinkWrapper>
    );
  }
  return (
    <>
      {goHome}
      <p onClick={() => window.scrollTo(0, 0)} style={{ textAlign: "center" }}>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 11l7-7 7 7M5 19l7-7 7 7"
          ></path>
        </svg>
      </p>
      <p style={{ textAlign: "center", color: "#cecece" }}>
        {" "}
        Dayoola &#169; 2021
      </p>
    </>
  );
};

export default Footer;
