import { CurrentByAgeState, ResponseCurrentByAge } from '@app/store/types/dashboard/CurrentByAgeType';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RequestData } from '@app/components/dashboards/dashboard/types/DashboardTypes';
import { constructorUrlForDashboard } from '@app/utils/utils';
import { DASH } from '@app/constants/enums/Dashboards';
import { httpDashboard } from '@app/api/http.api';

const initialState: CurrentByAgeState = {
  age: 0,
  loading: false,
  error: null,
};

export const doGetLiquidatedByAgeFrom5To10 = createAsyncThunk<ResponseCurrentByAge, RequestData>(
  'doGetLiquidatedCurrentByAgeFrom5To10',
  async ({ filters }) => {
    const url = constructorUrlForDashboard(
      DASH.BASE + DASH.LEGAL_ENTITY + DASH.LIQUIDATED_ENTITY + DASH.AGE_RANGE(5, 10),
      filters,
      true,
      false,
    );
    const response = await httpDashboard.get(url);
    return response.data;
  },
);

const liquidatedFrom5To10Slice = createSlice({
  name: 'liquidatedFrom5To10',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetLiquidatedByAgeFrom5To10.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(doGetLiquidatedByAgeFrom5To10.fulfilled, (state, action) => {
      state.age = action.payload?.count;
      state.loading = false;
    });
    builder.addCase(doGetLiquidatedByAgeFrom5To10.rejected, (state) => {
      state.age = 0;
      state.loading = false;
    });
  },
});

export default liquidatedFrom5To10Slice.reducer;
