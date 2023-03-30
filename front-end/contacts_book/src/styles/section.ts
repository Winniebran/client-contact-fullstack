import styled from "styled-components";

export const StyledSection = styled.section`
  width: var(--width-1);
  height: var(--height-1);
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const StyledSectionType = styled.section`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  gap: 100px;
  padding-left: 40px;

  .div-button-contact {
    width: 90%;
    height: 15%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }
`;

export const StyledSectionContact = styled.section`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-grey-1);
  gap: 30px;
`;

export const StyledSectionModal = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--color-transparecy-1);
  display: flex;
  align-items: center;
  justify-content: center;

  .modal {
    width: 40%;
    height: 70%;
    background-color: var(--color-grey-0);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border-radius: 30px;

    .modal-header {
      button {
        position: absolute;
        right: 405px;
        top: 142px;
        font-size: var(--title-6);
      }
    }
  }

  .modal-type {
    width: 30%;
    height: 40%;
    background-color: var(--color-grey-0);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 10px;
    border-radius: 30px;

    .modal-header-type {
      button {
        position: absolute;
        right: 490px;
        top: 275px;
        font-size: var(--title-6);
      }
    }
  }
`;
