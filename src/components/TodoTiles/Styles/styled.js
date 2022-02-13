import styled from "styled-components";
import { theme } from "constants";

export const ActionsWrapper = styled.div`
  // display: none;
  position: absolute;
  top: 10px;
  right: 0;
  @media (max-width: 768px) {
    display: block;
    right: 10px;
  }
`;
export const WrapperMain = styled.div`
  border-bottom: 1px solid #ddd;
  padding: 10px;
  position: relative;
  &:hover ${ActionsWrapper} {
    display: block;
  }
`;

export const TextStyled = styled.p`
  margin-bottom: 0;
  word-wrap: break-word;
  @media (max-width: 768px) {
    padding-right: ${theme.spacing.xLarge};
  }
`;

export const StyledIcon = styled.img.attrs((props) => ({
  src: props.src,
}))`
  height: 18px;
  width: 18px;
  margin-right: ${(props) => (props.edit ? theme.spacing.small : 0)};
  cursor: pointer;
`;
