import { ResponseColumnChart } from '@app/store/types/dashboard/DashboardSlicesType';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { constructorUrlForDashboard, getPastMonth, getPastMonthFromDate, sortDataByMonth } from '@app/utils/utils';
import { DASH } from '@app/constants/enums/Dashboards';
import { RequestData } from '@app/components/dashboards/dashboard/types/DashboardTypes';
import { ColumnChartMonthState } from '@app/store/types/dashboard/ColumnChartMonthTypes';
import { httpDashboard } from '@app/api/http.api';

const initialState: ColumnChartMonthState = {
  results: [],
  loading: false,
  error: null,
};

export const doGetDataForColumnChart = createAsyncThunk<ResponseColumnChart, RequestData>(
  'doGetDataForColumnChart',
  async ({ filters }) => {
    let baseUrl = DASH.BASE + DASH.AGR_COUNT + DASH.GROUP_BY('company_date_registration__month') + DASH.LEGAL_ENTITY;

    if (filters.isDate && filters.toDate !== null) {
      const month = getPastMonthFromDate(5, new Date(filters.toDate));
      baseUrl += DASH.DATE_AFTER(month);
      baseUrl += DASH.DATE_BEFORE(filters.toDate);
    } else {
      const month = getPastMonth(5);
      baseUrl += DASH.DATE_AFTER(`${month}-01`);
    }
    const url = constructorUrlForDashboard(baseUrl, filters, false, false);
    const response = await httpDashboard.get(url);

    return response.data;
  },
);

const createdLColumnChartSlice = createSlice({
  name: 'createdLColumnChart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetDataForColumnChart.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(doGetDataForColumnChart.fulfilled, (state, action) => {
      const data = action.payload?.results?.map((item) => {
        return {
          type: item.group_fields.company_date_registration__month,
          sales: item.Count,
        };
      });
      state.results = data ? sortDataByMonth(data) : [];
      state.loading = false;
    });
    builder.addCase(doGetDataForColumnChart.rejected, (state) => {
      state.results = [];
      state.loading = false;
    });
  },
});

export default createdLColumnChartSlice.reducer;
