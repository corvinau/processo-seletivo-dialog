import React from 'react';

import { useSocial } from '../../hooks/social';

import { Container } from './styles';

const SearchBar: React.FC = () => {
  const { updateFriends, updateUser } = useSocial();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const username = e.currentTarget.search.value;
    console.log('target', username);
    // updateFriends(username);
    updateUser(username);
  };

  return (
    <Container>
      <div>
        <div className='title'>MySocial</div>
        <form onSubmit={handleSubmit}>
          <div className='input'>
            <input
              id='search'
              placeholder='Pesquise usuário'
              aria-label='Barra de busca'
            />
          </div>
        </form>
      </div>
    </Container>
  );
};

export default SearchBar;
