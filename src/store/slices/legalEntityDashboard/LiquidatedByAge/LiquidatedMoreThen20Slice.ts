import { CurrentByAgeState, ResponseCurrentByAge } from '@app/store/types/dashboard/CurrentByAgeType';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RequestData } from '@app/components/dashboards/dashboard/DashboardTypes';
import { constructorUrlForDashboard } from '@app/utils/utils';
import { DASH } from '@app/constants/enums/Dashboards';
import axios from 'axios';

const initialState: CurrentByAgeState = {
  age: 0,
  loading: false,
  error: null,
};

export const doGetLiquidatedByAgeMoreThen20 = createAsyncThunk<ResponseCurrentByAge, RequestData>(
  'doGetLiquidatedCurrentByAgeMoreThen20',
  async ({ filters }) => {
    try {
      const url = constructorUrlForDashboard(
        DASH.BASE + DASH.LEGAL_ENTITY + DASH.LIQUIDATED_ENTITY + DASH.AGE_RANGE(20, 100),
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

const liquidatedByAgeMoreThen20Slice = createSlice({
  name: 'liquidatedByAgeMoreThen20',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetLiquidatedByAgeMoreThen20.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(doGetLiquidatedByAgeMoreThen20.fulfilled, (state, action) => {
      state.age = action.payload.count;
      state.loading = false;
    });
  },
});

export default liquidatedByAgeMoreThen20Slice.reducer;
