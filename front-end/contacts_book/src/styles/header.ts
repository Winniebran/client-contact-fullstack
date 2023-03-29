import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 20px 30px;

  .header {
    width: 25%;
    display: flex;
    justify-content: end;
    gap: 30px;

    .perfil {
      width: 60%;
      display: flex;
      justify-content: start;
      align-items: center;
      background-color: var(--color-secondary-2);
      padding: 5px;
      gap: 20px;
      border-radius: 30px;

      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        object-fit: cover;
      }
    }

    svg {
      font-size: var(--title-7);
    }
  }
`;

export const StyledNav = styled.nav`
  width: 85%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  form {
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
  }
`;
