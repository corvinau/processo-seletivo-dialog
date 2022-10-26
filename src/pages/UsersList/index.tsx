import React, { useEffect } from 'react';

import { useSocial } from '../../hooks/social';

import SearchBar from '../../components/SearchBar';
import PersonalCard from '../../components/PersonalCard';

import { Container } from './styles';

const UsersList: React.FC = () => {
  const { updateData, search } = useSocial();

  useEffect(() => {
    updateData();
  }, [updateData]);

  return (
    <Container>
      <SearchBar />
      <PersonalCard data={search} />
    </Container>
  );
};

export default UsersList;
