import Styled from "styled-components";
//import shared button
import Button from "../../shared/button";
//device breakpoints
import { device } from "../../theme/device";

//styled components
const Container = Styled.footer`
  background-color: ${(props) => props.theme.colors.Black};

  @media ${device.laptop}{
    margin-top: 20px;
  }
`;
const Wrapper = Styled.div`
    padding: 20px 20px 40px;
    
    color: ${(props) => props.theme.colors.White};
    margin-top: 50px;

    h1 {
        font-family: "Montserrat", sans-serif;
        font-size: 17px;
        line-height: 20px;
        margin: 20px 0 20px;
    }
    
    .about-us {
        p {
            font-size: 14px;
            line-height: 22px;
            margin: 0 0 20px;
        }
    }
    .links {
        ul {
            list-style: none;
            padding: 0;
        }
        ul li {
            margin: 5px 0;
        }
        ul li a{
            color: ${(props) => props.theme.colors.Lime};
        }
    }
    .contact {
        p {
            font-size: 14px;
            line-height: 22px;
        }
        a {
            display: block;
            color: ${(props) => props.theme.colors.White};
            padding: 5px 0;
            font-size: 14px;
        }
    }
    .newsletter {
        input {
            width: 100%;
            border: 1px solid ${(props) => props.theme.colors.White};
            margin-bottom: 20px;
            padding : 15px 10px;
            background: ${(props) => props.theme.colors.Black};
            color: ${(props) => props.theme.colors.White};
        }
    }
    @media ${device.tablet}{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
    }
    @media ${device.laptop}{
        grid-template-columns: 1.2fr 0.8fr 0.8fr 1.4fr;
        padding: 20px 20px 100px;

        .contact {
        a {
            padding: 8px 0;
            font-size: 14px;
          }
        }
        .links {
          ul li {
              margin: 10px 0;
          }
        }
    }
    @media ${device.laptopL}{
        grid-template-columns: 1.2fr 0.5fr 1fr 1.4fr;
        max-width: 1680px;
        margin: 0 auto;
    }
  `;
const SubscribeBtn = Styled(Button)`
    border: 2px solid ${(props) => props.theme.colors.Lime};
    color: ${(props) => props.theme.colors.Lime};
    background: ${(props) => props.theme.colors.Black};
    padding: 10px 70px;
    box-shadow: none;
`;

export { Container, Wrapper, SubscribeBtn };
