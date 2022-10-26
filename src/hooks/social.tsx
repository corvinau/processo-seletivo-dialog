import React, { createContext, useState, useContext, useCallback } from 'react';

import axios from 'axios';
import api from '../services/api';

interface ISocial {
  children: React.ReactNode;
}

const SocialContext = createContext<ISocialContext>({} as ISocialContext);

const SocialProvider: React.FC<ISocial> = ({ children }) => {
  const [data, setData] = useState({} as IUserData[]);
  const [search, setSearch] = useState({} as IUserData[]);
  const [query, setQuery] = useState<string>('');
  const [index, setIndex] = useState<string>('');

  const updateData = useCallback(async (): Promise<void> => {
    try {
      const response = await api.get('/all');

      setData(response.data);
    } catch (e) {
      if (axios.isAxiosError(e)) {
        setData([]);
      }
    }
  }, []);

  const searchData = useCallback(
    async (items: IUserData[] = data): Promise<void> => {
      try {
        const filteredUser = items.filter((item) => {
          return (
            item.name.toString().toLowerCase().indexOf(query.toLowerCase()) > -1
          );
        });

        setSearch(filteredUser);
      } catch (e) {
        if (axios.isAxiosError(e)) {
          setSearch([]);
        }
      }
    },
    [data, query]
  );

  return (
    <SocialContext.Provider
      value={{
        data,
        updateData,
        search,
        searchData,
        query,
        setQuery,
        index,
        setIndex,
      }}>
      {children}
    </SocialContext.Provider>
  );
};

function useSocial(): ISocialContext {
  const context = useContext(SocialContext);

  return context;
}

export { SocialProvider, useSocial };
