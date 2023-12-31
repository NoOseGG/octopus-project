import { MainInfoState, ResponseMainInfo } from '@app/store/types/dashboard/DashboardSlicesType';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { constructorUrlForDashboard, getCurrentYear } from '@app/utils/utils';
import { DASH } from '@app/constants/enums/Dashboards';
import axios from 'axios';
import { RequestData } from '@app/components/dashboards/dashboard/types/DashboardTypes';

const initialState: MainInfoState = {
  count: 0,
  loading: false,
  error: null,
};

export const doGetCountCreatedYear = createAsyncThunk<ResponseMainInfo, RequestData>(
  'doGetCountCreatedYear',
  async ({ filters }) => {
    try {
      const year = getCurrentYear();
      const url = constructorUrlForDashboard(
        DASH.BASE + DASH.LEGAL_ENTITY + DASH.DATE_AFTER(`${year}-01-01`),
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
    builder.addCase(doGetCountCreatedYear.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(doGetCountCreatedYear.fulfilled, (state, action) => {
      state.count = action.payload.count;
      state.loading = false;
    });
  },
});

export default createdYearSlice.reducer;
