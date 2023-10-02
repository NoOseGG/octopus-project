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
import axios from 'axios';
import { TOKEN_NAME, URLS } from '@app/constants/Constants';
import {UserInfo} from "@app/store/types/UserInfo";

export interface AuthSlice {
  token: string | null;
}

const initialState: AuthSlice = {
  token: readToken(),
};

export const doLogin = createAsyncThunk<LoginResponse, LoginRequest>(
  'auth/login',
  async (credentials, { dispatch }) => {
    const response = await axios.post(URLS.LOGIN, credentials);
    dispatch(setUser(response.data.user));
    persistToken(response.data.token);
    return response.data;
  },
);

export const doSignUp = createAsyncThunk('auth/doSignUp', async (signUpPayload: SignUpRequest) => {
  const response = await axios.post(URLS.SIGNUP, signUpPayload);
  return response.data;
});

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
  const response = axios.post(URLS.LOGOUT, null, { headers: { Authorization: `${TOKEN_NAME} ${readToken()}` } });
  deleteToken();
  deleteUser();
  dispatch(setUser(null));
  return response;
});

export const doCheckAuth = createAsyncThunk('auth/checkAuth', async () => {
  await axios.get(URLS.CHECK_USER, { headers: { Authorization: `${TOKEN_NAME} ${readToken()}` } });
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doLogin.fulfilled, (state, action) => {
      state.token = action.payload.token;
    });
    builder.addCase(doLogout.fulfilled, (state) => {
      state.token = null;
    });
    builder.addCase(doCheckAuth.rejected, (state) => {
      state.token = null;
    });
  },
});

export default authSlice.reducer;
