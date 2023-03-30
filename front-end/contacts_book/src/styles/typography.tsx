import styled, { css } from "styled-components";
import { IText } from "../interfaces/styles.interface";
import { BaseTitle } from "./components/typography";

export const StyledTitle = styled(BaseTitle)<IText>`
  ${({ fontSize }) => {
    switch (fontSize) {
      case "one":
        return css`
          font-size: var(--title-1);
        `;
      case "two":
        return css`
          font-size: var(--title-2);
        `;
      case "three":
        return css`
          font-size: var(--title-3);
        `;
      case "four":
        return css`
          font-size: var(--title-4);
        `;
      case "five":
        return css`
          font-size: var(--title-5);
        `;
      case "six":
        return css`
          font-size: var(--title-6);
        `;
      case "seven":
        return css`
          font-size: var(--title-7);
        `;
      case "eigth":
        return css`
          font-size: var(--title-8);
        `;
      case "nine":
        return css`
          font-size: var(--title-9);
        `;
      case "ten":
        return css`
          font-size: var(--title-10);
        `;
      case "eleven":
        return css`
          font-size: var(--paragraph-1);
        `;
      case "twelve":
        return css`
          font-size: var(--paragraph-2);
        `;
      case "thirteen":
        return css`
          font-size: var(--text-1);
        `;
      case "fourteen":
        return css`
          font-size: var(--text-2);
        `;
    }
  }}

  ${({ fontFamily }) => {
    switch (fontFamily) {
      case "one":
        return css`
          font-family: var(--font-family-Flamenco);
        `;
    }
  }}
`;
