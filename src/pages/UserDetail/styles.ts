import styled from 'styled-components';

export const Container = styled.div`
  .friends {
    font-size: 32px;
    font-weight: 600;
    margin: 0 65px;
  }

  @media (max-width: 780px) {
    text-align: center;
  }
`;

export const UserDetailContainer = styled.div`
  margin: 45px 65px;
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;

  img {
    margin-right: 30px;
    border-radius: 10px;
    width: 200px;
    height: 200px;
    box-shadow: 7px 7px 7px -1px rgb(0 0 0 / 15%);
  }

  .user-information {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  @media (max-width: 500px) {
    margin: 45px 30px;
  }

  @media (max-width: 640px) {
    .user-information {
      div {
        display: flex;
        align-items: flex-start;
        flex-wrap: wrap;

        b {
          margin-right: 5px;
        }
      }
    }
  }

  @media (max-width: 780px) {
    justify-content: center;
  }
`;