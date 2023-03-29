import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: var(--width-2);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: var(--color-grey-3);

  .links {
    width: var(--width-10);
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    a {
      &:hover {
        color: var(--color-secondary-2);
      }
    }
  }
`;
