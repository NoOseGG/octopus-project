import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  ResetPasswordRequest,
  LoginRequest,
  SignUpRequest,
  verifySecurityCode,
  SecurityCodePayload,
  NewPasswordAfterResetData,
  LoginResponse,
  NewPasswordData,
  ActivationEmailData,
} from '@app/api/auth.api';
import { setUser } from '@app/store/slices/userSlice';
import { deleteToken, deleteUser, persistToken, readToken } from '@app/services/localStorage.service';
import axios from 'axios';
import { TOKEN_NAME, URLS } from '@app/constants/Constants';
import { UserModel } from '@app/domain/UserModel';

export interface AuthSlice {
  token: string | null;
}

interface LoginError {
  non_field_errors: string[];
}

interface IActivateEmailError {
  detail: string;
}

interface ICheckAuthResponse {
  user: UserModel;
}

interface RegistrationError {
  phone_number?: string[];
  email?: string[];
}

const initialState: AuthSlice = {
  token: null,
};

export const doLogin = createAsyncThunk<LoginResponse, LoginRequest>(
  'auth/login',
  async (credentials, { dispatch, rejectWithValue }) => {
    try {
      const response = await axios.post(URLS.LOGIN, credentials);
      if (response.data.user !== undefined) {
        dispatch(setUser(response.data.user));
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
    console.log(JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const responseError: RegistrationError | undefined = error.response?.data;
      if (responseError) {
        const errorMessagePhone: string | undefined = responseError?.phone_number?.[0];
        const errorMessageEmail: string | undefined = responseError.email?.[0];

        if (Boolean(errorMessageEmail?.length) && Boolean(errorMessagePhone?.length))
          return rejectWithValue('Пользователь с таким номером телефона и электронной почтой уже существует');
        else if (Boolean(errorMessageEmail?.length))
          return rejectWithValue('Пользователь с такой электронной почтой уже существует');
        else if (Boolean(errorMessagePhone?.length))
          return rejectWithValue('Пользователь с таким номером телефона уже существует');
      } else {
        return rejectWithValue('Ошибка');
      }
    }
  }
});

export const doResetPassword = createAsyncThunk(
  'auth/doResetPassword',
  async (resetPassPayload: ResetPasswordRequest, { rejectWithValue }) => {
    try {
      const response = await axios.post(URLS.RESET_PASSWORD, resetPassPayload);
      console.log(JSON.stringify(response.data));
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

export const doVerifySecurityCode = createAsyncThunk(
  'auth/doVerifySecurityCode',
  async (securityCodePayload: SecurityCodePayload) => verifySecurityCode(securityCodePayload),
);

export const doSetNewPassword = createAsyncThunk(
  'auth/doSetNewPassword',
  async (newPasswordData: NewPasswordData, { rejectWithValue }) => {
    try {
      console.log(`new password -> ${JSON.stringify(newPasswordData)}`);
      const response = await axios.post(URLS.SET_NEW_PASSWORD, newPasswordData, {
        headers: { Authorization: `${TOKEN_NAME} ${readToken()}` },
      });
      console.log(JSON.stringify(response.data));
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

export const doSetNewPasswordAfterReset = createAsyncThunk(
  'auth/doSetNewPasswordAfterReset',
  async (newPasswordAfterResetData: NewPasswordAfterResetData, { rejectWithValue }) => {
    try {
      const response = await axios.post(URLS.SET_NEW_PASSWORD_AFTER_RESET, newPasswordAfterResetData);
      console.log(JSON.stringify(response.data));
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

export const doActivationEmail = createAsyncThunk(
  'auth/doActivationEmail',
  async (activationEmailData: ActivationEmailData, { rejectWithValue }) => {
    try {
      const response = await axios.post(URLS.ACTIVATE_EMAIL, activationEmailData);
      console.log(JSON.stringify(response.data));
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const responseError: IActivateEmailError | undefined = error.response?.data;
        if (responseError) {
          const errorMessage: string | null = responseError.detail;
          return rejectWithValue(errorMessage);
        } else {
          return rejectWithValue('Ошибка');
        }
      }
    }
  },
);

export const doLogout = createAsyncThunk('logout', (payload, { dispatch }) => {
  const response = axios.post(URLS.LOGOUT, null, { headers: { Authorization: `${TOKEN_NAME} ${readToken()}` } });
  deleteToken();
  deleteUser();
  dispatch(setUser(null));
  dispatch(deleteTokenInState());
  return response;
});

export const doCheckAuth = createAsyncThunk<ICheckAuthResponse>('auth/checkAuth', async () => {
  const response = await axios.get(URLS.CHECK_USER, { headers: { Authorization: `${TOKEN_NAME} ${readToken()}` } });
  return response.data;
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    deleteTokenInState: (state) => {
      state.token = null;
    },
    setTokenInState: (state) => {
      state.token = 'token';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(doLogin.fulfilled, (state, action) => {
      persistToken(action.payload.token);
      if (action.payload !== undefined) {
        state.token = action.payload.token;
      }
    });
    builder.addCase(doLogout.fulfilled, (state) => {
      state.token = null;
    });
    builder.addCase(doCheckAuth.fulfilled, (state) => {
      state.token = 'token';
    });
    builder.addCase(doCheckAuth.rejected, (state) => {
      deleteToken();
      state.token = null;
    });
  },
});

export const { deleteTokenInState, setTokenInState } = authSlice.actions;
export default authSlice.reducer;
