import styled from "styled-components";

export const StyledInput = styled.input`
  color: var(--color-grey-3);
  width: var(--width-1);
  padding: 10px;

  font-size: var(--title-9);
  font-weight: var(--font-weight-regular);
  border-radius: var(--radius-3);

  &::placeholder {
    font-size: var(--title-9);
    color: var(--color-grey-2);
    border-radius: var(--radius-3);
  }
`;
