import styled from "styled-components";

export const LeftWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  color: ${props => props.theme.isAlpha ? "#fff": props.theme.color.primaryColor};
  
  .logo {
    margin-left: 24px;
    cursor: pointer;
  }
`
