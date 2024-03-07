import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  ResetPasswordRequest,
  LoginRequest,
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

export interface AuthSlice {
  token: string | null;
}

interface LoginError {
  non_field_errors: string[];
}

interface RegistrationError {
  phone_number: string[];
  email: string[];
}

const initialState: AuthSlice = {
  token: readToken(),
};

export const doLogin = createAsyncThunk<LoginResponse, LoginRequest>(
  'auth/login',
  async (credentials, { dispatch, rejectWithValue }) => {
    try {
      const response = await axios.post(URLS.LOGIN, credentials);
      if (response.data.user !== undefined) {
        dispatch(setUser(response.data.user));
        persistToken(response.data.token);
      } else {
        return rejectWithValue('Вы авторизированны на другом устройстве');
      }
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const responseError: LoginError | undefined = error.response?.data;
        if (responseError) {
          const errorMessage: string | null = responseError.non_field_errors[0];
          return rejectWithValue(errorMessage);
        } else {
          return rejectWithValue('Ошибка');
        }
      }
    }
  },
);

export const doSignUp = createAsyncThunk('auth/doSignUp', async (signUpPayload: SignUpRequest, { rejectWithValue }) => {
  try {
    const response = await axios.post(URLS.SIGNUP, signUpPayload);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const responseError: RegistrationError | undefined = error.response?.data;
      if (responseError) {
        const errorMessage: string | null = responseError.email[0];
        return rejectWithValue(errorMessage);
      } else {
        return rejectWithValue('Ошибка');
      }
    }
  }
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
  dispatch(deleteTokenInState());
  return response;
});

export const doCheckAuth = createAsyncThunk('auth/checkAuth', async () => {
  await axios.get(URLS.CHECK_USER, { headers: { Authorization: `${TOKEN_NAME} ${readToken()}` } });
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    deleteTokenInState: (state) => {
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(doLogin.fulfilled, (state, action) => {
      if (action.payload.user !== undefined) {
        state.token = action.payload.token;
      }
    });
    builder.addCase(doLogout.fulfilled, (state) => {
      state.token = null;
    });
    builder.addCase(doCheckAuth.rejected, (state) => {
      state.token = null;
    });
  },
});

const { deleteTokenInState } = authSlice.actions;
export default authSlice.reducer;
