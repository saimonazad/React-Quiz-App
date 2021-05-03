import Styled from "styled-components";
//device breakpoints
import { device } from "../../theme/device";
//icons
import menuIcon from "../../assets/icons/menu.svg";
import closeIcon from "../../assets/icons/close.svg";
import { AccountCircle } from "@styled-icons/material-outlined";

const AccountIcon = Styled(AccountCircle)`
    padding-right: 6px;
    color: rgb(0, 123, 255);
    height: 1.5rem;
`;
const Nav = Styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
    height: 85px;

      ul {
        list-style-type: none;
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
    
      
      .toggle__menu {
      display: block;
      height: 30px;
      width: 30px;
      cursor: pointer;
      background-image: url(${menuIcon});
      background-size: cover;
      background-position: 50%;
    }

    
    ul a {
      
      font-weight: 700;
      font-size: 12px;
      color: #000;
    }
    
    .toggle__close {
      background-image: url(${closeIcon});
      background-size: 30px 30px;
    }

    @media ${device.laptop} {
      max-width: 1680px;
    margin: 0 auto;
    
      ul {
        all: revert;
        list-style-type: none;
      display: flex;
      align-items: center;
      font-family: "Montserrat", sans-serif;
    }
    ul li {
      margin-left: 25px;
      white-space: nowrap;
    }
    .sign-in {
      margin-left: 100px;
    }

    .toggle__menu {
        display: none;
      }
    }

    @media ${device.laptopL}{
      .sign-in {
      margin-left: 220px;
    }
    }
`;

export { Nav, AccountIcon };
