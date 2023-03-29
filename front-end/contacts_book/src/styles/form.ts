import styled from "styled-components";

export const StyledForm = styled.form`
  width: var(--width-7);
  height: var(--height-1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--gap-1);

  .div-form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--gap-6);
  }

  .div-button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: var(--height-10);
    width: var(--width-4);
    gap: var(--gap-5);
  }
`;
