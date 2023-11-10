import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
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
import axios from 'axios';
import { RequestData } from '@app/components/dashboards/dashboard/DashboardTypes';

export interface TotalCountCreated {
  count: number;
}

interface CalculatePercent {
  count: boolean;
  next: string | null;
  previous: string | null;
  results: [
    {
      group_fields: {
        company_status_from_dttm__year: number;
      };
      Count: number;
    },
    {
      group_fields: {
        company_status_from_dttm__year: number;
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
    company_status_from_dttm__year: number;
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
  liquidatedMainInfo: {
    totalCountLiquidated: number;
    totalCountLiquidatedLastYear: number;
    totalCountLiquidatedLastQuarter: number;
    totalCountOperatingCompany: number;
    percent: number;
  };
  lineChart: ResponseForLineChart;
  columnChart: ResponseForColumnChart;
}

const initialState: IInitialState = {
  liquidatedMainInfo: {
    totalCountLiquidated: 0,
    totalCountLiquidatedLastYear: 0,
    totalCountLiquidatedLastQuarter: 0,
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

export const doGetTotalCountLiquidated = createAsyncThunk<TotalCountCreated, RequestData>(
  'doGetTotalCountLiquidated',
  async ({ filters, legal_entity }) => {
    try {
      const url = constructorUrlForDashboard(DASH.BASE + legal_entity + DASH.LIQUIDATED_ENTITY, filters, true, true);
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
);

export const doGetTotalCountLiquidatedLastYear = createAsyncThunk<TotalCountCreated, RequestData>(
  'doGetTotalCountLiquidatedLastYear',
  async ({ filters, legal_entity }) => {
    try {
      const year = getCurrentYear();
      const url = constructorUrlForDashboard(
        DASH.BASE + legal_entity + DASH.LIQUIDATED_ENTITY + DASH.DATE_AFTER_LIQUIDATED(`${year}-01-01`),
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

export const doGetTotalCountLiquidatedLastQuarter = createAsyncThunk<TotalCountCreated, RequestData>(
  'doGetTotalCountLiquidatedLastQuarter',
  async ({ filters, legal_entity }) => {
    try {
      const date = getDateLastQuarter();
      const url = constructorUrlForDashboard(
        DASH.BASE + legal_entity + DASH.LIQUIDATED_ENTITY + DASH.DATE_AFTER_LIQUIDATED(date),
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

export const doCalculatePercentLiquidatedYear = createAsyncThunk<CalculatePercent, RequestData>(
  'doCalculatePercentLiquidatedYear',
  async ({ filters, legal_entity }) => {
    try {
      const currentDate = getCurrentDate();
      const lastYear = getLastYear();

      const url = constructorUrlForDashboard(
        DASH.BASE +
          DASH.AGR_COUNT +
          DASH.GROUP_BY('company_status_from_dttm__year') +
          legal_entity +
          DASH.LIQUIDATED_ENTITY +
          DASH.DATE_BEFORE_LIQUIDATED(currentDate) +
          DASH.DATE_AFTER_LIQUIDATED(`${lastYear}-01-01`) +
          DASH.ORDERING_AGG('-company_status_from_dttm__year'),
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

export const doGetDataForLineChartLiquidated = createAsyncThunk<ResponseForLineChart, RequestData>(
  'doGetDataForLineChartLiquidated',
  async ({ filters, legal_entity }) => {
    try {
      const currentDate = getCurrentDate();
      let baseUrl =
        DASH.BASE +
        DASH.AGR_COUNT +
        DASH.GROUP_BY('company_status_from_dttm__year') +
        legal_entity +
        DASH.LIQUIDATED_ENTITY;
      if (!filters.isDate) {
        baseUrl += DASH.DATE_BEFORE_LIQUIDATED(currentDate);
        baseUrl += DASH.DATE_AFTER_LIQUIDATED('2000-01-01');
      }
      const url = constructorUrlForDashboard(baseUrl, filters, false, true);

      const response = await axios.get(url + DASH.ORDERING_AGG('company_status_from_dttm__year'));

      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
);

export const doGetDataForColumnChartLiquidated = createAsyncThunk<ResponseForColumnChart, RequestData>(
  'doGetDataForColumnChartLiquidated',
  async ({ filters, legal_entity }) => {
    try {
      let baseUrl =
        DASH.BASE +
        DASH.AGR_COUNT +
        DASH.GROUP_BY('company_status_from_dttm__month') +
        legal_entity +
        DASH.LIQUIDATED_ENTITY;

      if (filters.isDate && filters.toDate !== null) {
        const month = getPastMonthFromDate(6, new Date(filters.toDate));
        baseUrl += DASH.DATE_AFTER(month);
        baseUrl += DASH.DATE_BEFORE(filters.toDate);
      } else {
        const month = getPastMonth(6);
        baseUrl += DASH.DATE_AFTER(`${month}-01`);
      }
      const url = constructorUrlForDashboard(baseUrl, filters, false, false);
      const response = await axios.get(url + DASH.ORDERING_AGG('company_status_from_dttm__month'));

      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
);

const liquidateMainInfoSlice = createSlice({
  name: 'liquidateMainInfo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetTotalCountLiquidated.fulfilled, (state, action) => {
      state.liquidatedMainInfo.totalCountLiquidated = action.payload.count;
    });
    builder.addCase(doGetTotalCountLiquidatedLastYear.fulfilled, (state, action) => {
      state.liquidatedMainInfo.totalCountLiquidatedLastYear = action.payload.count;
    });
    builder.addCase(doGetTotalCountLiquidatedLastQuarter.fulfilled, (state, action) => {
      state.liquidatedMainInfo.totalCountLiquidatedLastQuarter = action.payload.count;
    });
    builder.addCase(doCalculatePercentLiquidatedYear.fulfilled, (state, action) => {
      if (action.payload.results.length > 0) {
        const lastYear = action.payload?.results[0]?.Count;
        const lastTwoYear = action.payload?.results[1]?.Count;

        const percent = (((lastYear - lastTwoYear) / lastYear) * 100)?.toFixed(2);
        state.liquidatedMainInfo.percent = parseInt(percent, 10);
      } else {
        state.liquidatedMainInfo.percent = 0;
      }
    });
    builder.addCase(doGetDataForLineChartLiquidated.fulfilled, (state, action) => {
      state.lineChart = action.payload;
    });
    builder.addCase(doGetDataForColumnChartLiquidated.fulfilled, (state, action) => {
      state.columnChart = action.payload;
    });
  },
});

export default liquidateMainInfoSlice.reducer;
