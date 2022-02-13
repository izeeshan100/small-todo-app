import styled from "styled-components";
import { theme } from "constants";

export const Wrapper = styled.div`
  background: ${theme.colors.background};
`;

export const ContentWrapper = styled.div`
  padding: 0 ${theme.spacing.large};
  @media (max-width: 768px) {
    padding: 0 ${theme.spacing.small};
  }
`;
export const StyledIcon = styled.img.attrs((props) => ({
  src: props.src,
}))`
  height: 25px;
  width: 25px;
  filter: invert(1);
`;
