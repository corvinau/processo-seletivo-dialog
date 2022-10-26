import React from 'react';

import { useSocial } from '../../hooks/social';

import SearchBar from '../../components/SearchBar';
import PersonalCard from '../../components/PersonalCard';

import { Container, UserDetailContainer } from './styles';

const UserDetail: React.FC = () => {
  const { search, index } = useSocial();

  const arrayIndex = Number(index);

  return (
    <Container>
      <SearchBar showSearch={false} />
      <UserDetailContainer>
        <img src={search[arrayIndex].picture} alt='Foto do perfil' />
        <div className='user-information'>
          <div>
            <b>Nome:</b> {search[arrayIndex].name}
          </div>
          <div>
            <b>Idade:</b> {search[arrayIndex].age}
          </div>
          <div>
            <b>E-mail:</b> {search[arrayIndex].email}
          </div>
        </div>
      </UserDetailContainer>
      <div className='friends'>Friends:</div>
      <PersonalCard data={search[arrayIndex].friends} />
    </Container>
  );
};

export default UserDetail;
