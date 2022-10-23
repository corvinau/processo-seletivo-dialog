interface IPersonData {
  _id: string;
  index: 0,
  picture: string;
  age: 37,
  eyeColor: string;
  name: string;
  company: string;
  email: string;
  phone: string;
}

interface IFriendsData {
  friends: [IPersonData];
}

interface IUserData extends IPersonData {
  greeting: string;
}

interface ISocialContext {
  person: IUserData;
  updatePerson: (person: string) => void;
  friends?: IFriendsData;
  updateFriends: (person: string) => void;
}