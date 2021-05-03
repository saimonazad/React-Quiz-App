import Styled from "styled-components";

const Button = Styled.button`
  border: none;
  border-radius: 4px;
  display: inline-block;
  cursor: pointer;
  font-weight: 600;
  font-family: "Montserrat", sans-serif;
    
  ${(props) => {
    switch (props.size) {
      case "small":
        return "font-size: 12px;";
      case "large":
        return "font-size: 20px;";
    }
    return "font-size: 16px;";
  }}

  ${(props) => {
    if (props.block) {
      return `
          display: block;
          width: 100%;
          `;
    }
  }}
 
  /*  button text color
      default: white
  Ex: <Button textColor="#000">
*/
  ${(props) => {
    if (props.textColor) {
      return `color: ${props.textColor};`;
    }
    return "color: ${(props) => props.theme.colors.White};";
  }} 
  

/*  button background color
    Ex: <Button backgroundColor="#000">
*/
  ${(props) => {
    if (props.backgroundColor) {
      return `background-color: ${props.backgroundColor};`;
    }
    return "background-color: white;";
  }}


/*  button type.
    Ex: <Button type="signup">
*/
  ${(props) => {
    switch (props.type) {
      case "signup":
        return `
            background-color: ${(props) => props.theme.colors.Lime};
            box-shadow: 0px 10px 20px ${(props) => props.theme.colors.Lime}4d;
            padding: 8px 15px;
            border-radius: 4px;`;
      case "submit":
        return `
            box-shadow: 0px 10px 20px ${(props) => props.theme.colors.Lime}4d;
            padding: 8px 15px;
            border-radius: 4px;`;
    }
  }}
`;

export default Button;
