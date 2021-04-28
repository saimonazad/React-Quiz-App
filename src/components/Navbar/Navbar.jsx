import React, { useState } from "react";
import Styled from "styled-components";
import Button from "../../shared/button";

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
const Navbar = () => {
  const [open, setOpen] = useState(false);

  

  return (
    <Nav>
      <a href="#">
        <svg
          data-v-36daa3c7=""
          xmlns="http://www.w3.org/2000/svg"
          width="177"
          height="29.944"
          viewBox="0 0 177 29.944"
        >
          <g data-v-36daa3c7="" transform="translate(-478.85 106.927)">
            <g data-v-36daa3c7="" transform="translate(478.85 -106.927)">
              <g data-v-36daa3c7="">
                <path
                  data-v-36daa3c7=""
                  d="M490.888-81.862a7.169,7.169,0,0,1-7.162-7.16v-8.155h2.687v8.155a4.481,4.481,0,0,0,4.475,4.476,4.481,4.481,0,0,0,4.475-4.476V-99.364H478.85v-7.563h24.077v2.686H481.537v2.192H498.05v13.027A7.169,7.169,0,0,1,490.888-81.862Z"
                  transform="translate(-478.85 106.927)"
                ></path>
              </g>
              <g data-v-36daa3c7="" transform="translate(0 4.879)">
                <path
                  data-v-36daa3c7=""
                  d="M490.888-77.249A12.054,12.054,0,0,1,478.85-89.287v-8.155h2.687v8.155a9.361,9.361,0,0,0,9.35,9.351,9.363,9.363,0,0,0,9.351-9.351v-13.027h2.687v13.027A12.054,12.054,0,0,1,490.888-77.249Z"
                  transform="translate(-478.85 102.314)"
                ></path>
              </g>
            </g>
            <g data-v-36daa3c7="" transform="translate(511.969 -100.868)">
              <path
                data-v-36daa3c7=""
                d="M512.31-84.306a8.4,8.4,0,0,1-2.145-6.183v-10.459h3.441v10.327q0,5.456,4.713,5.455,4.686,0,4.687-5.455v-10.327H526.4v10.459a8.429,8.429,0,0,1-2.131,6.183,8.012,8.012,0,0,1-5.97,2.158A8.054,8.054,0,0,1,512.31-84.306Z"
                transform="translate(-510.165 101.212)"
              ></path>
              <path
                data-v-36daa3c7=""
                d="M546.577-100.153a6.1,6.1,0,0,1,2.74,2.277,6.368,6.368,0,0,1,.953,3.521,6.388,6.388,0,0,1-.953,3.509,6.077,6.077,0,0,1-2.74,2.29,10.262,10.262,0,0,1-4.2.794H538.2v5.348h-3.443v-18.535h7.625A10.262,10.262,0,0,1,546.577-100.153Zm-.94,8.525a3.323,3.323,0,0,0,1.164-2.728,3.322,3.322,0,0,0-1.164-2.727,5.29,5.29,0,0,0-3.416-.953H538.2v7.36h4.024A5.29,5.29,0,0,0,545.637-91.627Z"
                transform="translate(-508.748 101.212)"
              ></path>
              <path
                data-v-36daa3c7=""
                d="M559.393-82.743a8.648,8.648,0,0,1-3.163-1.615l1.191-2.675a9.373,9.373,0,0,0,2.794,1.47,10.144,10.144,0,0,0,3.322.569,5.745,5.745,0,0,0,3.085-.662,2.006,2.006,0,0,0,1.019-1.747,1.7,1.7,0,0,0-.569-1.311,4,4,0,0,0-1.444-.807q-.874-.292-2.383-.662a27.788,27.788,0,0,1-3.429-1.006,5.639,5.639,0,0,1-2.25-1.576,4.241,4.241,0,0,1-.94-2.9,4.948,4.948,0,0,1,.834-2.794,5.653,5.653,0,0,1,2.515-2,10.2,10.2,0,0,1,4.117-.741,13.313,13.313,0,0,1,3.337.424,9.215,9.215,0,0,1,2.832,1.217l-1.085,2.675a10.754,10.754,0,0,0-2.543-1.086,9.53,9.53,0,0,0-2.568-.37,5.367,5.367,0,0,0-3.032.689,2.125,2.125,0,0,0-.992,1.826,1.651,1.651,0,0,0,.569,1.3,4.111,4.111,0,0,0,1.443.794q.874.292,2.384.662a25.127,25.127,0,0,1,3.388.993,5.805,5.805,0,0,1,2.264,1.575,4.155,4.155,0,0,1,.939,2.86,4.888,4.888,0,0,1-.833,2.78,5.67,5.67,0,0,1-2.529,1.986,10.294,10.294,0,0,1-4.131.74A14.139,14.139,0,0,1,559.393-82.743Z"
                transform="translate(-507.511 101.198)"
              ></path>
              <path
                data-v-36daa3c7=""
                d="M584.717-90.171l-2.938,3.018v4.739h-3.443v-18.535h3.443v9.506l9.16-9.506h3.867l-7.785,8.289,8.261,10.246h-4.024Z"
                transform="translate(-506.237 101.212)"
              ></path>
              <path
                data-v-36daa3c7=""
                d="M601.453-100.948H604.9v18.535h-3.443Z"
                transform="translate(-504.906 101.212)"
              ></path>
              <path
                data-v-36daa3c7=""
                d="M614.093-100.948h3.443v15.623h9.691v2.912H614.093Z"
                transform="translate(-504.177 101.212)"
              ></path>
              <path
                data-v-36daa3c7=""
                d="M633.791-100.948h3.443v15.623h9.69v2.912H633.791Z"
                transform="translate(-503.043 101.212)"
              ></path>
            </g>
          </g>
        </svg>
      </a>
      <div class={`toggle__menu ${open ? "toggle__close" : ""}`} onClick={() => setOpen(!open)}></div>
      <ul id="mobile-menu" class={`${open ? "show" : ""}`}>
        <li>
          <a href="#">HOME</a>
        </li>
        <li>
          <a href="#">TRAINING</a>
        </li>
        <li>
          <a href="#">VIDEO LESSONS</a>
        </li>
        <li>
          <a href="#">EARN WITH UPSKILL</a>
        </li>
        <li class="sign-in">
          <AccountIcon></AccountIcon>
          <a href="#">SIGN IN</a>
        </li>
        <li>
          <a href="#">
            <Button type="signup" size="small">
              SIGN UP
            </Button>
          </a>
        </li>
      </ul>
    </Nav>
  );
};

export default Navbar;
