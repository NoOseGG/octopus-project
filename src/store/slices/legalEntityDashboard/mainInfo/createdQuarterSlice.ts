import { CreatedState } from '@app/store/types/dashboard/DashboardSlicesType';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { constructorUrlForDashboard, getDateLastQuarter } from '@app/utils/utils';
import { DASH } from '@app/constants/enums/Dashboards';
import axios from 'axios';
import { RequestData } from '@app/components/dashboards/dashboard/DashboardTypes';
import { TotalCountCreated } from '@app/store/slices/legalEntityDashboard/liquidatedMainInfo';

const initialState: CreatedState = {
  count: 0,
  loading: false,
  error: null,
};

export const doGetTotalCountCreatedLastQuarter = createAsyncThunk<TotalCountCreated, RequestData>(
  'getTotalCountCreatedLastQuarter',
  async ({ filters, legal_entity }) => {
    try {
      const date = getDateLastQuarter();
      const url = constructorUrlForDashboard(DASH.BASE + legal_entity + DASH.DATE_AFTER(date), filters, true, false);
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
);

const createdQuarterSlice = createSlice({
  name: 'createdYear',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetTotalCountCreatedLastQuarter.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(doGetTotalCountCreatedLastQuarter.fulfilled, (state, action) => {
      state.count = action.payload.count;
      state.loading = false;
    });
  },
});

export default createdQuarterSlice.reducer;
