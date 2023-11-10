import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { DASH } from '@app/constants/enums/Dashboards';
import { constructorUrlForDashboard } from '@app/utils/utils';
import { RequestData } from '@app/components/dashboards/dashboard/DashboardTypes';

export interface IInitialState {
  results: ResponseDate[];
}

interface ResponseDate {
  legal_entity_id: string | null;
  company_short_name: string | null;
  type_activity_name: string | null;
  company_date_registration: string | null;
  company_status_name: string | null;
  address_full: string | null;
  contact_web_site: string | null;
  contact_email: string | null;
  contact_phone_number: string | null;
  tax_office_name: string | null;
}

const initialState: IInitialState = {
  results: [],
};

export const doGetDetailedInformationCompany = createAsyncThunk<IInitialState, RequestData>(
  'doGetInDetailedInformationCompany',
  async ({ filters }) => {
    try {
      const url = constructorUrlForDashboard(
        DASH.BASE +
          DASH.PAGE_SIZE(30) +
          DASH.LEGAL_ENTITY +
          DASH.ORDERING('-company_date_registration') +
          DASH.IS_NULL_FALSE('company_date_registration'),
        filters,
        false,
        false,
      );

      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
);

const detailedInformationCompanySlice = createSlice({
  name: 'detailedInformationCompanySlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetDetailedInformationCompany.fulfilled, (state, action) => {
      state.results = action.payload.results;
    });
  },
});

export default detailedInformationCompanySlice.reducer;
