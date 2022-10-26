import styled from 'styled-components';

export const Container = styled.div`
  margin: 45px 65px;

  div {
    display: flex;
    justify-content: flex-start;
    flex-wrap: nowrap;
    flex-direction: row;
    align-items: center;
  }

  .title {
    font-size: 32px;
    font-weight: 600;
    margin-right: 25px;
  }

  form {
    width: 100%;
  }

  .input {
    display: flex;

    border: 0;
    border-radius: 10px;

    input {
      font-size: 1rem;
      width: 100%;

      padding: 12px;

      border: 2px solid #e5e5e5;
      border-radius: 10px;
    }

    input:focus {
      outline: none;
    }
  }

  @media (max-width: 500px) {
    margin: 45px 30px;
  }

  @media (max-width: 780px) {
    div {
      flex-direction: column;
    }

    .title {
      margin-right: 0;
      margin-bottom: 20px;
    }
  }
`;