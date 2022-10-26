import React, { useEffect } from 'react';

import { useSocial } from '../../hooks/social';

import { Container } from './styles';

interface ISearchBarProps extends React.HTMLProps<HTMLFormElement> {
  showSearch?: boolean;
}

const SearchBar: React.FC<ISearchBarProps> = ({ showSearch = true }) => {
  const formStyle = {
    display: showSearch ? 'initial' : 'none',
  };

  const { query, searchData, setQuery } = useSocial();

  useEffect(() => {
    searchData();
  }, [searchData]);

  return (
    <Container>
      <div>
        <div className='title'>MySocial</div>
        <form style={formStyle}>
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
