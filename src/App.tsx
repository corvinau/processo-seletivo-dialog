import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { SocialProvider } from './hooks/social';

import UserList from './pages/UsersList';
import UserDetail from './pages/UserDetail';

import './global.css';

const App: React.FC = () => {
  return (
    <SocialProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<UserList />} />
          <Route path='/detalhes:nome' element={<UserDetail />} />
        </Routes>
      </BrowserRouter>
    </SocialProvider>
  );
};

export default App;
