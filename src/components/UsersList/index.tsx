import React from 'react';

import PersonalCard from '../PersonalCard';

import { Container } from './styles';

const UsersList: React.FC = () => {
  return (
    <Container>
      <PersonalCard />
    </Container>
  );
};

export default UsersList;
