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

export const StyledFormModal = styled.form`
  width: var(--width-1);
  height: var(--height-1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;

  .div-input-modal {
    width: var(--width-4);
    display: flex;
    align-items: center;
    border: 1px solid var(--color-grey-2);
    border-radius: var(--radius-3);

    select {
      color: var(--color-grey-2);
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
    }

    svg {
      margin-left: 10px;
      color: var(--color-secondary-2);
      font-size: var(--title-8);
      font-weight: var(--font-weight-regular);
    }
  }

  .button-modal {
    width: var(--width-6);
    height: var(--height-10);
    margin-top: 30px;
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
  }

  .button-modal-type {
    width: var(--width-7);
    height: var(--height-9);
    margin-top: 20px;
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
  }
`;
