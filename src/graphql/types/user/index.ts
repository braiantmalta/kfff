import { Address, AddressInput } from '../address';
import { Contact } from '../contact';
import { Role } from '../role';

export type User = {
  id: number;
  email: string;
  name: string;
  cpf?: string;
  avatar_url?: string;
  birth_date?: Date;
  address?: Address[];
  contacts: Contact[];
  roles: Role[];
};

export type UserWithoutRelations = Omit<
  User,
  'address' | 'user_role' | 'contacts'
>;

export type UserInput = {
  email: string;
  password: string;
  name: string;
  birth_date?: Date;
  cpf?: string;
  address?: AddressInput[];
  user_role?: any[];
  contacts?: any[];
};

export type UserInputWithoutRelations = Omit<
  UserInput,
  'address' | 'user_role' | 'contacts'
>;

export type UserUpdateInput = {
  id: number;
  fields: {
    name?: string;
    birth_date?: Date;
    cpf?: string;
    user_role?: any[];
    address?: any[];
    contacts?: any[];
  };
};
