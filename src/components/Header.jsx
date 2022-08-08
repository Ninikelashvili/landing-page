import React, { useState } from "react";
import styled from "styled-components";
import logo from "../media/logo.svg";
import { Link } from "react-router-dom";

const Header = React.memo(() => {
  const [burgerMenu, setBurgerMenu] = useState(false);
  const burgerHandle = () => {
    setBurgerMenu((current) => !current);
  };
  return (
    <Navigation>
      <nav>
        <Link to="/">
          <li>
            <img src={logo} alt={logo} />
          </li>
        </Link>
        <div
          onClick={burgerHandle}
          className={burgerMenu ? "menuactive" : "menu"}
        >
          <span></span>
          <span></span>
        </div>
      </nav>
      <section className={burgerMenu ? "showMenu" : "hideMenu"}>
        <ul className={burgerMenu ? "showNavLinks" : "hideNavLinks"}>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/">
            <li>Projects</li>
          </Link>
          <Link to="/">
            <li>Contacts</li>
          </Link>
        </ul>
      </section>
    </Navigation>
  );
});

const Navigation = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 100;
  section {
    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      li {
        font-size: 20px;
        color: #b8b8b8;
        font-family: "Didot", sans-serif;
        letter-spacing: 2px;
        margin: 10px 0;
      }
    }
  }
  nav {
    div {
      padding: 20px;
    }
    max-width: 1366px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 30;
    background-color: #fff;
    padding: 10px;
    li {
      max-width: 60px;
      width: 100%;
      cursor: pointer;
      img {
        width: 100%;
      }
    }
  }
`;

export default Header;
