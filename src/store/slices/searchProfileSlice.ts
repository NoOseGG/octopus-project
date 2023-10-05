import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { SubjectType } from '@app/store/types/Subject';
import axios from 'axios';
import { TOKEN_NAME, URLS } from '@app/constants/Constants';
import { readToken } from '@app/services/localStorage.service';

interface SubjectState {
  profile: SubjectType;
  loading: boolean;
  error: string | null;
}

const initialState: SubjectState = {
  profile: {
    unn: '',
    date_reg_mns: '',
    date_reg_egr: '',
    decision_create_number: '',
    decision_liquidation_number: '',
    period_activity: '',
    age_full: '',
    age_short: '',
    emails: [],
    addresses: [],
    names: [],
    phones: [],
    web_sites: [],
    descriptions: [],
    tax_offices: [],
    tax_offices_arrears: [],
    legal_forms: [],
    types_activities: [],
    statuses: [],
    countries: [],
    statuses_types: [],
    states_bodies: [],
    licenses: [],
    vacancy: [],
    commercial_register: [],
    gias_accredited_customer: [],
    gias_accredited_participant: [],
    gias_black_list: [],
    gias_plan: [],
    gias_complaint_submit: [],
    gias_complaint_receive: [],
    icetrade_customer: [],
  },
  loading: false,
  error: '',
};

export const doSearchProfile = createAsyncThunk<SubjectType, string>(
  'auth/doSearchProfile',
  async (unn: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(URLS.SEARCH_SUBJECT, {
        headers: { Authorization: `${TOKEN_NAME} ${readToken()}` },
        params: { unn: unn },
      });

      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const searchProfileSlice = createSlice({
  name: 'searchProfile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doSearchProfile.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(doSearchProfile.fulfilled, (state, action) => {
      console.log(`DATA => ${JSON.stringify(action.payload)}`);
      state.profile = action.payload;
      state.loading = false;
    });
    builder.addCase(doSearchProfile.rejected, (state) => {
      state.error = 'ошибка загрузки профиля';
    });
  },
});

export default searchProfileSlice.reducer;
