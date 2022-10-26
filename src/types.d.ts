interface IPersonData {
  id: string;
  index: number;
  picture: string;
  age: number;
  eyeColor: string;
  name: string;
  company: string;
  email: string;
  phone: string;
}

interface IFriendsData {
  friends: IPersonData[];
}

interface IUserData extends IPersonData, IFriendsData {
  greeting: string;
}

interface ISocialContext {
  data: IUserData[];
  updateData: () => void;
  search: IUserData[];
  searchData: () => void;
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  index: string;
  setIndex: React.Dispatch<React.SetStateAction<string>>;
}

interface ICard {
  data: IUserData[] | IPersonData[];
}