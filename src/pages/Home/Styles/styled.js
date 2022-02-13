import styled from "styled-components";
import { theme } from "constants";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: ${theme.spacing.medium} 0;
`;

export const ContentWrapper = styled.div`
  width: 700px;
`;
export const ButtonWrapper = styled.div`
  text-align: center;
  margin-top: ${theme.spacing.small};
`;

export const ButtonStyled = styled.button`
  background: ${(props) =>
    props.primary ? theme.colors.background : theme.colors.white};
  color: ${(props) =>
    props.primary ? theme.colors.white : theme.colors.background};
  border: 1px solid
    ${(props) => (props.primary ? theme.colors.white : theme.colors.background)};
  padding: 5px 15px;
  border-radius: ${theme.borderRadius.default};
`;
