import styled from "styled-components";

export const StyledButton = styled.button`
  width: var(--width-1);
  height: var(--height-1);

  background-color: var(--color-primary-1);
  color: var(--color-grey-0);
  border-radius: var(--radius-6);
  transition: 0.5s ease-in-out;

  :hover {
    background-color: var(--color-primary-focus);
    color: var(--color-grey-3);
  }
`;
