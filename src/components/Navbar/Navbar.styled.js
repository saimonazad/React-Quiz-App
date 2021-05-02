import Styled from "styled-components";

import menuIcon from "../../assets/icons/menu.svg";
import closeIcon from "../../assets/icons/close.svg";

import { AccountCircle } from "@styled-icons/material-outlined";

const AccountIcon = Styled(AccountCircle)`
    padding-right: 6px;
    color: rgb(0, 123, 255);
    height: 1.5rem;
`;
const Nav = Styled.nav`
    max-width: 1680px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
    height: 85px;

    ul {
      display: flex;
      list-style-type: none;
      align-items: center;
      font-family: "Montserrat", sans-serif;
    }
    ul li {
      margin-left: 25px;
      white-space: nowrap;
    }
    .sign-in {
      margin-left: 220px;
    }
    ul a {
      
      font-weight: 700;
      font-size: 12px;
      color: #000;
    }
    .toggle__menu {
      display: none;
      height: 30px;
      width: 30px;
      cursor: pointer;
      background-image: url(${menuIcon});
      background-size: cover;
      background-position: 50%;
    }
    .toggle__close {
      background-image: url(${closeIcon});
      background-size: 30px 30px;
    }
    @media (max-width: 991.98px) {
      .sign-in {
        margin-left: 25px;
      }
      .toggle__menu {
        display: block;
      }
     
    }
    @media (max-width: 991.98px) {
      ul {
        z-index: 100;
        display: block;
        position: absolute;
        right: 20px;
        background-color: #fff;
        padding: 20px 30px;
        -webkit-box-shadow: 0 0 3px rgb(0 0 0 / 20%);
        box-shadow: 0 0 3px rgb(0 0 0 / 20%);
        visibility: hidden;
        opacity: 0;
        top: 100px;
        transition-duration: 0.25s;
        transition-property: opacity, visibility, top;
      }
      ul li {
        padding: 5px 0;
      }
      .show {
        visibility: visible;
        opacity: 1;
        top: 70px;
      }
    }
`;

export { Nav, AccountIcon };
