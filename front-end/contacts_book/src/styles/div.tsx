import styled from "styled-components";

export const StyledDivInput = styled.div`
  width: var(--width-4);
  display: flex;
  align-items: center;

  border: 1px solid var(--color-grey-2);
  border-radius: var(--radius-3);

  svg {
    margin-left: 10px;
    color: var(--color-secondary-2);
    font-size: var(--title-8);
    font-weight: var(--font-weight-regular);
  }
`;

export const StyledDivHeader = styled.div`
  width: var(--width-5);
  height: var(--height-1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--gap-1);

  img {
    width: var(--width-2);
  }
`;
