import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  flex-direction: row;
  margin: 0 45px;

  a {
    text-decoration: none;
    color: #000000;
  }
`;

export const Card = styled.div`
  border-radius: 10px;
  margin: 10px 20px;
  width: 308px;
  padding: 15px 20px;
  background-color: #FFFFFF;
  box-shadow: 7px 7px 7px -1px rgb(0 0 0 / 15%);

  img {
    margin-bottom: 10px;
    border-radius: 10px;
  }
`