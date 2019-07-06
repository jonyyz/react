export interface IGeoLocation {
  lat: string;
  lng: string;
}

export interface IAddress {
  street: string;
  suite?: string;
  city: string;
  zipcode: string;
  geo: IGeoLocation;
}

export interface ICompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddress;
  phone: string;
  website: string;
  company: ICompany;
}

export interface IUserBasicInfo {
  id: number;
  name: string;
  website: string;
  city: string;
  companyName: string;
}

export interface IUsersState {
  fetching: boolean;
  fetched: boolean;
  users?: IUserBasicInfo[];
  fetchError?: string;
  actionError?: string;
}
