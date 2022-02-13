import styled from "styled-components";
import { theme } from "constants";

export const Wrapper = styled.div`
  border: 1px solid ${theme.colors.borderDefault};
  padding: ${theme.spacing.xSmall};
  border-radius: ${theme.borderRadius.default};
  margin-top: ${theme.spacing.xSmall};
`;

export const InputWrapper = styled.div`
  margin-bottom: ${theme.spacing.medium};
`;

export const InputStyled = styled.input`
  padding: ${theme.spacing.small};
  width: 100%;
  border: none;
  outline: none;
  word-wrap: break-word;
`;

export const ButtonStyled = styled.button`
  background: ${(props) =>
    props.primary ? theme.colors.background : theme.colors.white};
  color: ${(props) =>
    props.primary ? theme.colors.white : theme.colors.background};
  border: 1px solid ${theme.colors.background};
  padding: 0 15px;
  height: 32px;
  margin-right: 15px;
  border-radius: ${theme.borderRadius.default};
  opacity: ${(props) =>
    props.disabled ? theme.opacity.fade : theme.opacity.normal};
`;
