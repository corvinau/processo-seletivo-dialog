// import React, { createContext, useState, useContext, useCallback } from 'react';

// import axios from 'axios';
// import api from '../services/api';

// const SocialContext = createContext<ISocialContext>({} as ISocialContext);

// /**
//  * Provider feito para armazenar os estados globais.
//  * Aqui, será armazenado o nome de usuário e os repositórios desse usuário, além de
//  * funções que atualizam tanto o nome do usuário quanto os repositórios.
//  */
// const SocialProvider: React.FC = ({ children }) => {
//   const [user, setUser] = useState({} as IUserData);
//   const [friends, setFriends] = useState<IFriendsData[]>();

//   const updateUser = useCallback(async (user: string): Promise<void> => {
//     try {
//       const response = await api.get(`/users/${user}`);

//       setUser(response.data);
//     } catch (e) {
//       if (axios.isAxiosError(e)) {
//         setUser({
//           _id: '',
//           index: 0,
//           picture: '',
//           age: 0,
//           eyeColor: '',
//           name: '',
//           company: '',
//           email: '',
//           phone: '',
//           friends: [],
//           greeting: '',
//         });
//       }
//     }
//   }, []);

//   const updateFriends = useCallback(async (user: string): Promise<void> => {
//     try {
//       const response = await api.get(`/users/${user}/repos`);

//       setFriends(response.data);
//     } catch (e) {
//       if (axios.isAxiosError(e)) {
//         setFriends([]);
//       }
//     }
//   }, []);

//   return (
//     <SocialContext.Provider
//       value={{
//         updateFriends,
//         friends,
//         updateUser,
//         user,
//       }}>
//       {children}
//     </SocialContext.Provider>
//   );
// };

// /**
//  * Hook utilizado para recuperar os valores do estado global.
//  */
// function useRepositorio(): ISocialContext {
//   const context = useContext(SocialContext);

//   return context;
// }

// export { SocialProvider, useRepositorio };
export {};
