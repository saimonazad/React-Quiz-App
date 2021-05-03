import Styled from "styled-components";

const ProgressBar = Styled.progress`
    appearance: none;
    height: 0.625rem;
    
    width: 100%;
    display: block;
    &:-webkit-progress-bar {
      background: rgba(255, 255, 255, 0.5);
    }

    &:-webkit-progress-value {
      color: ${(props) => props.theme.colors.Lime};
      transition: all 0.5s;
    }
`;

export default ProgressBar;
