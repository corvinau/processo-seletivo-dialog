interface IPersonData {
  _id: string;
  index: number,
  picture: string;
  age: number,
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
  user: IPersonData;
  updateUser: (user: string) => void;
  // friends: IFriendsData;
  updateFriends: (person: string) => void;
}