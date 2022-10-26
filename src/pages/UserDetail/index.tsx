import React from 'react';

// import { useSocial } from '../../hooks/social';

// import PersonalCard from '../../components/PersonalCard';

import { Container, UserDetailContainer } from './styles';

const UserDetail: React.FC = () => {
  // const { data } = useSocial();

  return (
    <Container>
      <UserDetailContainer>
        <img
          src='https://www.proativaalimentos.com.br/image/cache/catalog/img_prod/kiwi[1]-1000x1000.jpg'
          alt='Foto do perfil'
          width='180'
          height='180'
        />
        <div className='user-information'>
          <div>Nome: ...</div>
          <div>Idade: ...</div>
          <div>E-mail: ...</div>
        </div>
      </UserDetailContainer>
      <div className='friends'>Friends:</div>
      {/* <PersonalCard data={data} /> */}
    </Container>
  );
};

export default UserDetail;
