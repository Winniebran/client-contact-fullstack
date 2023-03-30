import styled, { css } from "styled-components";
import { IButton } from "../interfaces/styles.interface";

export const StyledButton = styled.button`
  width: var(--width-3);
  height: var(--height-1);

  background-color: var(--color-primary-1);
  color: var(--color-grey-0);
  border-radius: var(--radius-6);
  transition: 0.5s ease-in-out;
  outline: none;

  :hover {
    background-color: var(--color-primary-focus);
    color: var(--color-grey-3);
  }

  :focus {
    outline: none;
  }
`;

export const StyledButtonDashboard = styled.button<IButton>`
  width: var(--width-1);
  height: var(--height-1);
  background-color: var(--color-primary-1);
  color: var(--color-grey-0);
  border-radius: var(--radius-6);
  transition: all 0.5s ease-in-out 0s;
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 15px;
  gap: 10px;

  :hover {
    background-color: var(--color-primary-focus);
    color: var(--color-grey-3);
    outline: none;
  }

  :focus {
    outline: none;
  }

  svg {
    font-size: var(--title-8);
  }

  ${({ color }) => {
    switch (color) {
      case "one":
        return css`
          background-color: var(--color-secondary-1);
          color: var(--color-grey-3);

          &:hover {
            background-color: var(--color-secondary-2);
          }
        `;
    }
  }}
`;
