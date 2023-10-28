import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { getCurrentDate, getCurrentYear, getDateLastQuarter, getLastYear } from '@app/utils/utils';
import { DASH } from '@app/constants/enums/Dashboards';

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

interface LineChartObject {
  group_fields: {
    company_date_registration__year: number;
  };
  Count: number;
}

interface DashBoardSlice {
  mainInfo: {
    totalCountCreated: number;
    totalCountCreatedLastYear: number;
    totalCountCreatedLastQuarter: number;
    totalCountOperatingCompany: number;
    percent: number;
  };
  lineChart: ResponseForLineChart;
}

const initialState: DashBoardSlice = {
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
};

export const doGetTotalCountCreated = createAsyncThunk<TotalCountCreated>('getTotalCountCreated', async () => {
  try {
    const response = await axios.get(DASH.BASE + DASH.LEGAL_ENTITY + DASH.COUNT);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const doGetTotalCountCreatedLastYear = createAsyncThunk<TotalCountCreated>(
  'getTotalCountCreatedLastYear',
  async () => {
    try {
      const year = getCurrentYear();
      const response = await axios.get(DASH.BASE + DASH.LEGAL_ENTITY + DASH.DATE_AFTER(`${year}-01-01`) + DASH.COUNT);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
);

export const doGetTotalCountCreatedLastQuarter = createAsyncThunk<TotalCountCreated>(
  'getTotalCountCreatedLastQuarter',
  async () => {
    try {
      const date = getDateLastQuarter();
      const response = await axios.get(DASH.BASE + DASH.LEGAL_ENTITY + DASH.DATE_AFTER(date) + DASH.COUNT);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
);

export const doGetTotalCountOperatingCompany = createAsyncThunk<TotalCountCreated>(
  'getTotalCountOperatingCompany',
  async () => {
    try {
      const response = await axios.get(DASH.BASE + DASH.LEGAL_ENTITY + DASH.STATUS_AT + DASH.COUNT);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
);

export const doCalculatePercentYear = createAsyncThunk<CalculatePercent>('doCalculatePercentYear', async () => {
  try {
    const currentDate = getCurrentDate();
    const lastYear = getLastYear();

    const response = await axios.get(
      DASH.BASE +
        DASH.AGR_COUNT +
        DASH.GROUP_BY('company_date_registration__year') +
        DASH.LEGAL_ENTITY +
        DASH.DATE_BEFORE(currentDate) +
        DASH.DATE_AFTER(`${lastYear}-01-01`) +
        DASH.ORDERING_AGG('-company_date_registration__year'),
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const doGetDataForLineChart = createAsyncThunk<ResponseForLineChart>('doGetDataForLineChart', async () => {
  try {
    const currentDate = getCurrentDate();
    const response = await axios.get(
      DASH.BASE +
        DASH.AGR_COUNT +
        DASH.GROUP_BY('company_date_registration__year') +
        DASH.LEGAL_ENTITY +
        DASH.DATE_BEFORE(currentDate) +
        DASH.DATE_AFTER('2000-01-01') +
        DASH.ORDERING_AGG('company_date_registration__year'),
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
});

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetTotalCountCreated.fulfilled, (state, action) => {
      state.mainInfo.totalCountCreated = action.payload.count;
    });
    builder.addCase(doGetTotalCountCreatedLastYear.fulfilled, (state, action) => {
      state.mainInfo.totalCountCreatedLastYear = action.payload.count;
    });
    builder.addCase(doGetTotalCountCreatedLastQuarter.fulfilled, (state, action) => {
      state.mainInfo.totalCountCreatedLastQuarter = action.payload.count;
    });
    builder.addCase(doGetTotalCountOperatingCompany.fulfilled, (state, action) => {
      state.mainInfo.totalCountOperatingCompany = action.payload.count;
    });
    builder.addCase(doCalculatePercentYear.fulfilled, (state, action) => {
      const lastYear = action.payload.results[0].Count;
      const lastTwoYear = action.payload.results[1].Count;
      console.log(`${lastYear} ${lastTwoYear}`);

      const percent = (((lastYear - lastTwoYear) / lastYear) * 100).toFixed(2);
      state.mainInfo.percent = parseInt(percent, 10);
    });
    builder.addCase(doGetDataForLineChart.fulfilled, (state, action) => {
      state.lineChart = action.payload;
    });
  },
});

export default dashboardSlice.reducer;
