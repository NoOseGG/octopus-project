import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  constructorUrlForDashboard,
  getCurrentDate,
  getCurrentYear,
  getDateLastQuarter,
  getLastYear,
  getPastMonth,
  getPastMonthFromDate,
} from '@app/utils/utils';
import { DASH } from '@app/constants/enums/Dashboards';
import { FiltersType } from '@app/store/slices/searchFiltersSlice';

interface TotalCountCreated {
  count: number;
}

interface CalculatePercent {
  count: boolean;
  next: string | null;
  previous: string | null;
  results: [
    {
      group_fields: {
        company_date_registration__year: number;
      };
      Count: number;
    },
    {
      group_fields: {
        company_date_registration__year: number;
      };
      Count: number;
    },
  ];
}

interface ResponseForLineChart {
  count: number;
  next: string | null;
  previous: string | null;
  results: LineChartObject[];
}

interface ResponseForColumnChart {
  count: number;
  next: string | null;
  previous: string | null;
  results: ColumnChartObject[];
}

interface LineChartObject {
  group_fields: {
    company_date_registration__year: number;
  };
  Count: number;
}

interface ColumnChartObject {
  group_fields: {
    company_date_registration__month: number;
  };
  Count: number;
}

interface IInitialState {
  mainInfo: {
    totalCountCreated: number;
    totalCountCreatedLastYear: number;
    totalCountCreatedLastQuarter: number;
    totalCountOperatingCompany: number;
    percent: number;
  };
  lineChart: ResponseForLineChart;
  columnChart: ResponseForColumnChart;
}

const initialState: IInitialState = {
  mainInfo: {
    totalCountCreated: 0,
    totalCountCreatedLastYear: 0,
    totalCountCreatedLastQuarter: 0,
    totalCountOperatingCompany: 0,
    percent: 0,
  },
  lineChart: {
    count: 0,
    next: null,
    previous: null,
    results: [],
  },
  columnChart: {
    count: 0,
    next: null,
    previous: null,
    results: [],
  },
};

export const doGetTotalCountCreatedSoleTrade = createAsyncThunk<TotalCountCreated, FiltersType>(
  'doGetTotalCountCreatedSoleTrade',
  async (filters: FiltersType) => {
    try {
      const url = constructorUrlForDashboard(DASH.BASE + DASH.SOLE_TRADE, filters, true, true);
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
);

export const doGetTotalCountCreatedLastYearSoleTrade = createAsyncThunk<TotalCountCreated, FiltersType>(
  'doGetTotalCountCreatedLastYearSoleTrade',
  async (filters) => {
    try {
      const year = getCurrentYear();
      const url = constructorUrlForDashboard(
        DASH.BASE + DASH.SOLE_TRADE + DASH.DATE_AFTER(`${year}-01-01`),
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

export const doGetTotalCountCreatedLastQuarterSoleTrade = createAsyncThunk<TotalCountCreated, FiltersType>(
  'doGetTotalCountCreatedLastQuarterSoleTrade',
  async (filters) => {
    try {
      const date = getDateLastQuarter();
      const url = constructorUrlForDashboard(DASH.BASE + DASH.SOLE_TRADE + DASH.DATE_AFTER(date), filters, true, false);
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
);

export const doGetTotalCountOperatingCompanySoleTrade = createAsyncThunk<TotalCountCreated, FiltersType>(
  'doGetTotalCountOperatingCompanySoleTrade',
  async (filters) => {
    try {
      const url = constructorUrlForDashboard(DASH.BASE + DASH.SOLE_TRADE + DASH.STATUS_AT, filters, true, true);

      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
);

export const doCalculatePercentYearSoleTrade = createAsyncThunk<CalculatePercent, FiltersType>(
  'doCalculatePercentYearSoleTrade',
  async (filters) => {
    try {
      const currentDate = getCurrentDate();
      const lastYear = getLastYear();

      const url = constructorUrlForDashboard(
        DASH.BASE +
          DASH.AGR_COUNT +
          DASH.GROUP_BY('company_date_registration__year') +
          DASH.SOLE_TRADE +
          DASH.DATE_BEFORE(currentDate) +
          DASH.DATE_AFTER(`${lastYear}-01-01`) +
          DASH.ORDERING_AGG('-company_date_registration__year'),
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

export const doGetDataForLineChartSoleTrade = createAsyncThunk<ResponseForLineChart, FiltersType>(
  'doGetDataForLineChartSoleTrade',
  async (filters) => {
    try {
      const currentDate = getCurrentDate();
      let baseUrl = DASH.BASE + DASH.AGR_COUNT + DASH.GROUP_BY('company_date_registration__year') + DASH.SOLE_TRADE;
      if (!filters.isDate) {
        baseUrl += DASH.DATE_BEFORE(currentDate);
        baseUrl += DASH.DATE_AFTER('2000-01-01');
      }
      const url = constructorUrlForDashboard(baseUrl, filters, false, true);

      const response = await axios.get(url + DASH.ORDERING_AGG('company_date_registration__year'));

      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
);

export const doGetDataForColumnChartSoleTrade = createAsyncThunk<ResponseForColumnChart, FiltersType>(
  'doGetDataForColumnChartSoleTrade',
  async (filters) => {
    try {
      let baseUrl = DASH.BASE + DASH.AGR_COUNT + DASH.GROUP_BY('company_date_registration__month') + DASH.SOLE_TRADE;

      if (filters.isDate && filters.toDate !== null) {
        const month = getPastMonthFromDate(6, new Date(filters.toDate));
        baseUrl += DASH.DATE_AFTER(month);
        baseUrl += DASH.DATE_BEFORE(filters.toDate);
      } else {
        const month = getPastMonth(6);
        baseUrl += DASH.DATE_AFTER(`${month}-01`);
      }
      const url = constructorUrlForDashboard(baseUrl, filters, false, false);
      const response = await axios.get(url + DASH.ORDERING_AGG('company_date_registration__month'));

      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
);

const mainInfoSoleTradeSlice = createSlice({
  name: 'mainInfoSoleTradeSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetTotalCountCreatedSoleTrade.fulfilled, (state, action) => {
      state.mainInfo.totalCountCreated = action.payload.count;
    });
    builder.addCase(doGetTotalCountCreatedLastYearSoleTrade.fulfilled, (state, action) => {
      state.mainInfo.totalCountCreatedLastYear = action.payload.count;
    });
    builder.addCase(doGetTotalCountCreatedLastQuarterSoleTrade.fulfilled, (state, action) => {
      state.mainInfo.totalCountCreatedLastQuarter = action.payload.count;
    });
    builder.addCase(doGetTotalCountOperatingCompanySoleTrade.fulfilled, (state, action) => {
      state.mainInfo.totalCountOperatingCompany = action.payload.count;
    });
    builder.addCase(doCalculatePercentYearSoleTrade.fulfilled, (state, action) => {
      if (action.payload.results.length > 0) {
        const lastYear = action.payload.results[0].Count;
        const lastTwoYear = action.payload.results[1].Count;

        const percent = (((lastYear - lastTwoYear) / lastYear) * 100).toFixed(2);
        state.mainInfo.percent = parseInt(percent, 10);
      } else {
        state.mainInfo.percent = 0;
      }
    });
    builder.addCase(doGetDataForLineChartSoleTrade.fulfilled, (state, action) => {
      state.lineChart = action.payload;
    });
    builder.addCase(doGetDataForColumnChartSoleTrade.fulfilled, (state, action) => {
      state.columnChart = action.payload;
    });
  },
});

export default mainInfoSoleTradeSlice.reducer;
