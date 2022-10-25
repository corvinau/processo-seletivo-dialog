import React, { createContext, useState, useContext, useCallback } from 'react';

import axios from 'axios';
import api from '../services/api';

interface ISocial {
  children: React.ReactNode;
}

const SocialContext = createContext<ISocialContext>({} as ISocialContext);

const SocialProvider: React.FC<ISocial> = ({ children }) => {
  const [user, setUser] = useState({} as IPersonData);
  const [friends, setFriends] = useState<IFriendsData[]>();

  const updateUser = useCallback(async (user: string): Promise<void> => {
    try {
      const response = await api.get(`/${user}`);
      console.log('response', response);

      setUser(response.data);
    } catch (e) {
      if (axios.isAxiosError(e)) {
        setUser({
          _id: '',
          index: 0,
          picture: '',
          age: 0,
          eyeColor: '',
          name: '',
          company: '',
          email: '',
          phone: '',
        });
      }
    }
  }, []);

  const updateFriends = useCallback(async (user: string): Promise<void> => {
    try {
      const response = await api.get(`/users/${user}/repos`);

      setFriends(response.data);
    } catch (e) {
      if (axios.isAxiosError(e)) {
        setFriends([]);
      }
    }
  }, []);

  return (
    <SocialContext.Provider
      value={{
        updateFriends,
        // friends,
        updateUser,
        user,
      }}>
      {children}
    </SocialContext.Provider>
  );
};

/**
 * Hook utilizado para recuperar os valores do estado global.
 */
function useSocial(): ISocialContext {
  const context = useContext(SocialContext);

  return context;
}

export { SocialProvider, useSocial };
// export {};
