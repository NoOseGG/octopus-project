import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { SubjectType } from '@app/store/types/Subject';
import axios from 'axios';
import { TOKEN_NAME, URLS } from '@app/constants/Constants';
import { readToken } from '@app/services/localStorage.service';

interface SubjectState {
  profile: SubjectType;
  loading: boolean;
  error: boolean;
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
    news: [],
    gias_accredited_customer: [],
    gias_accredited_participant: [],
    gias_black_list: [],
    gias_plan: [],
    gias_complaint_submit: [],
    gias_complaint_receive: [],
    icetrade_customer: [],
    icetrade_participant: [],
    icetrade_other_participant: [],
    icetrade_organizer: [],
    icetrade_organizer_negotiations: [],
    government_inspection: [],
    constituent_doc: [],
    economic_high_risk_registry: [],
    legal_entity_type: [],
    resume: [],
    metric_address_main: [],
    metric_address_2: [],
    metric_change_constituent_doc: [],
    metric_change_director: [],
    metric_entity_contact: [],
    metric_level_competition: [],
    metric_probability_liquidation: [],
    metric_address_economic_high_risk_registry: [],
  },
  loading: false,
  error: false,
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
      state.error = false;
    });
    builder.addCase(doSearchProfile.fulfilled, (state, action) => {
      state.profile = action.payload;
      state.loading = false;
      state.error = false;
    });
    builder.addCase(doSearchProfile.rejected, (state) => {
      state.error = true;
    });
  },
});

export default searchProfileSlice.reducer;
