import Styled from "styled-components";

//import quiz thumbnail
import QuizImg from "../../../assets/img/quiz-thumbnails/adobe-photoshop-2020-latest-version-free-download-for-windows-10.png";

//icons
import { LinkedinSquare } from "@styled-icons/boxicons-logos/LinkedinSquare";
import { Facebook } from "@styled-icons/entypo-social/Facebook";

//device breakpoints
import device from "../../../theme/device";

//styled components
const Wrapper = Styled.div`
    flex: 1 1 100%;
    position: relative;

    @media ${device.tablet} {
      margin-right: 1.5625rem;
    }
    @media ${device.laptop} {
      margin-right: 1.875rem;
    }
    @media ${device.laptopL} {
      margin-right: 3.125rem;
    }

    .container {
      background:linear-gradient(180deg,rgba(0,0,0,.4),rgba(0,0,0,.5)),url(${QuizImg}) 50%/cover no-repeat;
      border-radius: 0.625rem;
      padding-top: 1.35rem;
      height: 28.125rem;
      margin-bottom: 1.25rem;

      @media ${device.tablet} {
        padding-top: 2.25rem;
        height: 34.5rem;
      }
      @media ${device.laptop} {
        padding-top: 3.75rem;
        height: 40.625rem;
      }
      @media ${device.laptopL} {
        padding-top: 3.75rem;
        height: 46.875rem;
      }
    }

    .quiz__info--wrapper {
      padding: 20px 15px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      color: white;

      @media ${device.tablet} {
        padding: 30px 20px;
      }
      @media ${device.laptop} {
        padding: 50px 30px;
      }
      @media ${device.laptopL} {
        padding: 100px;
      }

    }
    .quiz__info--top {
      p {
        color: ${(props) => props.theme.colors.Black};
        background-color: ${(props) => props.theme.colors.White};
        border-radius: 20px;
        display: inline-block;
        padding: 7px 18px;
        box-shadow: 0px 10px 20px ${(props) => props.theme.colors.Lime}4D;
        font-size: 12px;
        font-weight: 600;
        font-family: "Montserrat", sans-serif;
        margin: 0 0 20px;
      }
      h1 {
        font-size: 22px;
        line-height: 35px;
        margin: 0 0 20px;
      }
      desc {
        font-size: 15px;
        line-height: 20px;
      }

      @media ${device.tablet} {
        p {
          font-size: 13px;
          margin: 0 0 30px;
        }
        h1 {
          font-size: 26px;
          line-height: 34px;
          margin: 0 0 30px;
        }
        desc {
          font-size: 16px;
          line-height: 24px;
        }
      }
      @media ${device.laptop} {
        p {
          font-size: 14px;
          margin: 0 0 30px;
        }
        h1 {
          font-size: 32px;
          line-height: 40px;
          margin: 0 0 30px;
        }
        desc {
          font-size: 18px;
          line-height: 24px;
        }
      }
      @media ${device.laptopL} {
        p {
          font-size: 14px;
          margin: 0 0 30px;
        }
        h1 {
          font-size: 32px;
          line-height: 40px;
          margin: 0 0 30px;
        }
        desc {
          font-size: 18px;
          line-height: 24px;
        }
      }
    }

    .quiz__info--bottom {
      display: flex;
      justify-content: space-between;
    }
    .quiz__info--bottom--text {
      h3 {
        font-size: 14px;
        line-height: 24px;
        margin: 0 0 10px;
      }
      h4 {
        font-size: 14px;
        line-height: 24px;
        font-weight: 400;
        margin: 0;
      }
    }
    .quiz__info--bottom--icon{
      align-self: flex-end;
    }
`;

const FacebookIcon = Styled(Facebook)`
  margin: 0 20px;
`;
const LinkedinIcon = Styled(LinkedinSquare)`
  
`;

export { Wrapper, FacebookIcon, LinkedinIcon };
