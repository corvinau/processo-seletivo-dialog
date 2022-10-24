import React from 'react';

import SearchBar from '../../components/SearchBar';
import PersonalCard from '../../components/PersonalCard';

import { Container } from './styles';

const UsersList: React.FC = () => {
  return (
    <Container>
      <SearchBar />
      <PersonalCard />
    </Container>
  );
};

export default UsersList;
