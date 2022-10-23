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
`;