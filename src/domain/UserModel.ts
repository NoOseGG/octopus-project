// export interface UserModel {
//   id: number;
//   firstName: string;
//   lastName: string;
//   imgUrl: string;
//   userName: string;
//   email: {
//     name: string;
//     verified: boolean;
//   };
//   phone: {
//     number: string;
//     verified: boolean;
//   };
//   sex: 'male' | 'female';
//   birthday: string;
//   lang: 'en' | 'de' | 'ru';
//   country: string;
//   city: string;
//   address1: string;
//   address2?: string;
//   zipcode: number;
//   website?: string;
//   socials?: {
//     twitter?: string;
//     facebook?: string;
//     linkedin?: string;
//   };
// }

export interface UserModel {
  id: number;
  first_name: string;
  last_name: string;
  patronymic: string;
  birthday: string | null;
  phone_number: string;
  email: string;
  created: string;
  updated: string;
  last_day_subscription: string;
  is_email_confirmed: boolean;
  type_subscription: string | null;
  avatar: string;
  is_email_subscription: boolean;
}
