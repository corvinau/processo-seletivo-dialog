import React from 'react';

import { Container } from './styles';

const SearchBar: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const username = e.currentTarget.search.value;
    console.log(username);
  };

  return (
    <Container>
      <div>
        <div className='title'>MySocial</div>
        <form onSubmit={handleSubmit}>
          <div className='input'>
            <input
              id='search'
              placeholder='Pesquise por usuário'
              aria-label='Barra de busca'
            />
          </div>
        </form>
      </div>
    </Container>
  );
};

export default SearchBar;
