import React from 'react';

import SearchBar from '../SearchBar';
import PersonalCard from '../PersonalCard';

import { Container } from './styles';

const UserDetail: React.FC = () => {
  return (
    <Container>
      <SearchBar />
      <div>detalhes do usuário selecionado</div>
      <div className='title'>Friends:</div>
      <PersonalCard />
    </Container>
  );
};

export default UserDetail;
