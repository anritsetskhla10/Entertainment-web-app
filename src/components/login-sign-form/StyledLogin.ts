import styled from "styled-components";


export  const StyledLogin = styled.div`
width: 100vw;
display: flex;
flex-direction: column;
align-items: center;
padding: 40px 24px 170px;

@media only screen and (min-width: 768px) {
  padding: 80px 0 473px;
}

@media only screen and (min-width: 1440px) {
  padding: 78px 0 250px;
}

& > img {
  width: 32px;
  height: 25.6px;
  margin-bottom: 58.5px;

  @media only screen and (min-width: 768px) {
    margin-bottom: 72.4px;
  }

  @media only screen and (min-width: 1440px) {
    margin-bottom: 83px;
  }
}

& > div {
  width: 327px;
  padding: 24px 24px 32px;
  margin: 0 auto;
  border-radius: 10px;
  background-color: #161d2f;

  @media only screen and (min-width: 768px) {
    width: 400px;
    padding: 32px;
    border-radius: 20px;
  }

  & > form {
    display: flex;
    flex-direction: column;
    gap: 40px;

    & > h3 {
      font-size: 32px;
      font-weight: 300;
      letter-spacing: -0.5px;
      color: #fff;
    }

    & > .input-container {
      display: flex;
      flex-direction: column;
      gap: 24px;

      & > div {
        position: relative;


        & > .error {
          position: absolute;
          right: 0;
          top: 0;
          font-size: 13px;
          font-weight: 300;
          color: #fc4747;
        }
      }
    }

    button {
      padding: 14px 67.5px 15px 68.5px;
      border-radius: 6px;
      background-color: #fc4747;
      font-size: 15px;
      font-weight: 300;
      color: #fff;

      &:hover {
        cursor: pointer;
        color: #161d2f;
        background-color: #fff;
      }
    }
  }

  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 9px;
    margin-top: 24px;

    & > p {
      font-size: 15px;
      font-weight: 300;
      color: #fff;
    }

    & > a {
      font-size: 15px;
      font-weight: 300;
      color: #fc4747;
    }
  }
}
`;



 export const StyledInput = styled.input<{ error?: string }>`
  width: 100%;
  padding: 0 0 17px 16px;
  border-bottom: 1px solid ${({ error }) => (error ? "#fc4747" : "#5a698f")};
  background-color: transparent;
  font-size: 15px;
  font-weight: 300;
  color: #fff;

  &::placeholder {
    font-size: 15px;
    font-weight: 300;
    color: #fff;
    opacity: 0.5;
  }

  &:hover {
    border-bottom: 1px solid #fff;
  }

  &:focus {
    outline: none;
  }
`;