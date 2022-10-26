import React, { useEffect } from 'react';

import { useSocial } from '../../hooks/social';

import { Container } from './styles';

const SearchBar: React.FC = () => {
  const { query, searchData, setQuery } = useSocial();

  useEffect(() => {
    searchData();
  }, [searchData]);

  return (
    <Container>
      <div>
        <div className='title'>MySocial</div>
        <form>
          <div className='input'>
            <input
              id='search'
              placeholder='Pesquise um usuário'
              aria-label='Barra de busca'
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </form>
      </div>
    </Container>
  );
};

export default SearchBar;
