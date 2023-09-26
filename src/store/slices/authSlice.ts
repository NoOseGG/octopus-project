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
  logout,
} from '@app/api/auth.api';
import { setUser } from '@app/store/slices/userSlice';
import { deleteToken, deleteUser, persistToken, readToken } from '@app/services/localStorage.service';
import axios from 'axios';

const LOGIN_URL = 'http://93.125.0.140:1338/api/v1/auth/login/';
const LOGOUT_URL = 'http://93.125.0.140:1338/api/v1/auth/logout/';

export interface AuthSlice {
  token: string | null;
}

const initialState: AuthSlice = {
  token: readToken(),
};

export const doLogin = createAsyncThunk<LoginResponse, LoginRequest>(
  'auth/login',
  async (credentials, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.post(LOGIN_URL, credentials);
      dispatch(setUser(response.data.user));
      persistToken(response.data.token);
      return response.data;
    } catch (error) {
      return rejectWithValue('Произошла ошибка');
    }
  },
);

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

export const doLogout = createAsyncThunk('logout', (payload, { dispatch }) => {
  const headers = {
    Authorization: `Welcome ${readToken()}`,
  };

  const response = axios
    .post(LOGOUT_URL, null, { headers: headers })
    .then((res) => {})
    .catch((error) => {});

  deleteToken();
  deleteUser();
  dispatch(setUser(null));
  return response;
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
