import styled from "styled-components";

export const StyledListType = styled.ul`
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

        &:hover {
          color: var(--color-primary-1);
        }

        &:focus {
          outline: none;
        }
      }
    }
  }
`;

export const StyledListContact = styled.ul`
  width: 100%;
  height: 20%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 0 40px;

  li {
    width: 45%;
    height: 80%;
    border: 1px solid var(--color-grey-2);
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    padding: 15px;
    color: var(--color-grey-2);

    img {
      width: 90px;
      height: 90px;
      object-fit: cover;
    }

    .div-contact-card {
      width: 100%;
      display: flex;
      flex-direction: column;
      text-align: start;
      justify-content: space-between;
      padding: 0 20px;

      .div-personal-data {
        display: flex;
        justify-content: left;
        gap: 50px;

        .type-name {
          color: var(--color-secondary-1);
          font-weight: var(--font-weigth-black);
        }
      }
    }

    .button-li-contact {
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      button {
        color: var(--color-primary-1);
        font-size: var(--title-8);
        font-weight: var(--font-weigth-black);

        &:hover {
          color: var(--color-secondary-2);
        }

        :focus {
          outline: none;
        }
      }
    }
  }
`;
