//import styled component
import Styled from "styled-components";

// styles
const Wrapper = Styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    max-width: 500px;
    padding: 0 2rem;
    margin: 0 auto;
    height: 100vh;
    
    h1 {
        font-size: 65px;
        font-weight: 700;
        margin-top: 0;
        margin-bottom: 10px;
    }
    h2 {
        font-size: 21px;
        font-weight: 400;
        margin: 0;
    }
    p {
        font-size: 14px;
        line-height: 22px;
        color: ${(props) => props.theme.colors.SlateGray};
    }
    a{
        color:${(props) => props.theme.colors.BlueRibbon};
        font-weight: 600;
    }

`;

export { Wrapper }