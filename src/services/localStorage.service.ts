import { UserModel } from '@app/domain/UserModel';

const testUser: UserModel = {
  id: 0,
  first_name: '',
  last_name: '',
  patronymic: '',
  birthday: '',
  phone_number: '',
  email: '',
  created: '',
  updated: '',
  last_day_subscription: '',
  is_email_confirmed: false,
  type_subscription: null,
  avatar: '',
  is_email_subscription: false,
  is_superuser: false,
};

export const persistToken = (token: string): void => {
  localStorage.setItem('accessToken', token);
};

export const readToken = (): string | null => {
  return localStorage.getItem('accessToken');
};

export const persistUser = (user: UserModel): void => {
  localStorage.setItem('user', JSON.stringify(user));
};

export const readUser = (): UserModel | null => {
  const userStr = localStorage.getItem('user');

  return userStr ? JSON.parse(userStr) : testUser;
};

export const deleteToken = (): void => localStorage.removeItem('accessToken');
export const deleteUser = (): void => localStorage.removeItem('user');

export const clickedPayAttention = (): void => localStorage.setItem('payAttention', 'true');
export const getPayAttention = (): string | null => {
  return localStorage.getItem('payAttention');
};
