import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  ResetPasswordRequest,
  login,
  LoginRequest,
  signUp,
  SignUpRequest,
  resetPassword,
  verifySecurityCode,
  SecurityCodePayload,
  NewPasswordData,
  setNewPassword,
  LoginResponse,
} from '@app/api/auth.api';
import { setUser } from '@app/store/slices/userSlice';
import { deleteToken, deleteUser, persistToken, readToken } from '@app/services/localStorage.service';
import axios, { AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';

export interface AuthSlice {
  token: string | null;
}

const initialState: AuthSlice = {
  token: readToken(),
};

export const doLogin = createAsyncThunk('login', async (loginPayload: LoginRequest, { dispatch }) => {
  // Отправьте POST-запрос на сервер для авторизации и получения токена
  const navigate = useNavigate();

  console.log('LOGINNNNN');
  try {
    const response = await axios
      .post<LoginRequest, AxiosResponse<LoginResponse>>('http://93.125.0.140:1338/api/v1/auth/login/', loginPayload)
      .then((response) => {
        console.log('SUCCES');
        dispatch(setUser(response.data.user));
        persistToken(response.data.token);
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {}
});

export const doSignUp = createAsyncThunk('auth/doSignUp', async (signUpPayload: SignUpRequest) =>
  signUp(signUpPayload),
);

export const doResetPassword = createAsyncThunk(
  'auth/doResetPassword',
  async (resetPassPayload: ResetPasswordRequest) => resetPassword(resetPassPayload),
);

export const doVerifySecurityCode = createAsyncThunk(
  'auth/doVerifySecurityCode',
  async (securityCodePayload: SecurityCodePayload) => verifySecurityCode(securityCodePayload),
);

export const doSetNewPassword = createAsyncThunk('auth/doSetNewPassword', async (newPasswordData: NewPasswordData) =>
  setNewPassword(newPasswordData),
);

export const doLogout = createAsyncThunk('logout', async (_, { dispatch }) => {
  try {
    // Отправьте POST-запрос на сервер для авторизации и получения токена
    console.log('TOKEN');
    const token = readToken();
    const response = await axios.post('http://93.125.0.140:1338/api/v1/auth/logout/', null, {
      headers: {
        Authorization: `Welcome ${token}`,
      },
    });

    if (response.status === 200) {
      // Обработайте ошибку, если запрос завершился неуспешно
      console.log('LOGOUT SUCCESS');
    } else {
      console.log('LOGOUT ERROR');
    }
  } catch (error) {
    // Обработайте другие ошибки, которые могли возникнуть
    throw error;
  }
  console.log('logout');
  deleteToken();
  deleteUser();
  dispatch(setUser(null));
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doLogin.fulfilled, (state, action) => {
      state.token = action.payload;
    });
    builder.addCase(doLogout.fulfilled, (state) => {
      state.token = '';
    });
  },
});

export default authSlice.reducer;
