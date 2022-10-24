import styled from 'styled-components';

export const Container = styled.div`
  .friends {
    font-size: 32px;
    font-weight: 600;
    margin: 0 65px;
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
  }

  .user-information {
    display: flex;
    flex-direction: column;
  }
`;