import { CreatedState } from '@app/store/types/dashboard/DashboardSlicesType';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { constructorUrlForDashboard } from '@app/utils/utils';
import { DASH } from '@app/constants/enums/Dashboards';
import axios from 'axios';
import { RequestData } from '@app/components/dashboards/dashboard/DashboardTypes';
import { TotalCountCreated } from '@app/store/slices/legalEntityDashboard/liquidatedMainInfo';

const initialState: CreatedState = {
  count: 0,
  loading: false,
  error: null,
};

export const doGetTotalCountOperatingCompany = createAsyncThunk<TotalCountCreated, RequestData>(
  'getTotalCountOperatingCompany',
  async ({ filters, legal_entity }) => {
    try {
      const url = constructorUrlForDashboard(DASH.BASE + legal_entity + DASH.STATUS_AT, filters, true, true);

      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
);

const createdOperatingSlice = createSlice({
  name: 'createdYear',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetTotalCountOperatingCompany.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(doGetTotalCountOperatingCompany.fulfilled, (state, action) => {
      state.count = action.payload.count;
      state.loading = false;
    });
  },
});

export default createdOperatingSlice.reducer;
