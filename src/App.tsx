import React from 'react';

import SearchBar from './components/SearchBar';
import UsersList from './components/UsersList';

import './global.css';

const App: React.FC = () => {
  return (
    <>
      <SearchBar />
      <UsersList />
    </>
  );
};

export default App;
