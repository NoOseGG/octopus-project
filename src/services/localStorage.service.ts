import { UserModel } from '@app/domain/UserModel';
const avatarImg = process.env.REACT_APP_ASSETS_BUCKET + '/avatars/avatar5.webp';

const testUser: UserModel = {
  id: 1,
  first_name: 'Yury',
  last_name: 'Svirydzenka',
  patronymic: '',
  birthday: '04.01.1992',
  phone_number: '+375257520246',
  email: 'hoc751@gmail.com',
  created: '28.08.2023',
  updated: '29.08.2023',
  last_day_subscription: '29.08.2023',
  is_email_confirmed: true,
  type_subscription: null,
  avatar: 'https://ava-24.com/_ph/144/33740131.jpg',
  is_email_subscription: true,
};

export const persistToken = (token: string): void => {
  localStorage.setItem('accessToken', token);
};

export const readToken = (): string => {
  return localStorage.getItem('accessToken') || 'bearerToken';
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
