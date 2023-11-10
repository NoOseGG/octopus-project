import { CreatedState } from '@app/store/types/dashboard/DashboardSlicesType';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { constructorUrlForDashboard, getCurrentYear } from '@app/utils/utils';
import { DASH } from '@app/constants/enums/Dashboards';
import axios from 'axios';
import { RequestData } from '@app/components/dashboards/dashboard/DashboardTypes';
import { TotalCountCreated } from '@app/store/slices/legalEntityDashboard/liquidatedMainInfo';

const initialState: CreatedState = {
  count: 0,
  loading: false,
  error: null,
};

export const doGetTotalCountCreatedLastYear = createAsyncThunk<TotalCountCreated, RequestData>(
  'getTotalCountCreatedLastYear',
  async ({ filters, legal_entity }) => {
    try {
      const year = getCurrentYear();
      const url = constructorUrlForDashboard(
        DASH.BASE + legal_entity + DASH.DATE_AFTER(`${year}-01-01`),
        filters,
        true,
        false,
      );
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
);

const createdYearSlice = createSlice({
  name: 'createdYear',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetTotalCountCreatedLastYear.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(doGetTotalCountCreatedLastYear.fulfilled, (state, action) => {
      state.count = action.payload.count;
      state.loading = false;
    });
  },
});

export default createdYearSlice.reducer;
