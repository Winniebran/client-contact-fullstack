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
