import styled from "styled-components";

export const StyledList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 10px;

  li {
    width: 90%;
    height: 100%;
    border-bottom: 1px solid var(--color-grey-2);
    display: flex;
    justify-content: space-between;
    padding: 5px 10px;
    color: var(--color-grey-2);

    .button-li {
      display: flex;
      gap: 10px;

      button {
        color: var(--color-secondary-2);
      }
    }
  }
`;
