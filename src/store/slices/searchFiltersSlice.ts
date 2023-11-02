import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const SEARCH_FILTERS_URL = {
  TYPE_ACTIVITIES: 'http://93.125.0.140:1338/api/v1/dashboard/ref/type_activity',
  SETTLEMENT: 'http://93.125.0.140:1338/api/v1/dashboard/ref/settlement',
  DISTRICTS: 'http://93.125.0.140:1338/api/v1/dashboard/ref/district',
  REGION: 'http://93.125.0.140:1338/api/v1/dashboard/ref/region',
};

interface TypeActivitiesType {
  type_activity_code: string;
  type_activity_name: string;
}

export interface SettlementType {
  address_settlement: string;
}

interface DistrictType {
  address_district: string;
}

interface RegionType {
  address_region: string;
}

export interface FiltersType {
  type_activities: string | null;
  settlements: string | null;
  districts: string | null;
  regions: string | null;
  fromDate: string | null;
  toDate: string | null;
  isDate: boolean;
}

interface SearchFiltersSlice {
  data_filters: {
    type_activities: TypeActivitiesType[];
    settlements: SettlementType[];
    districts: DistrictType[];
    regions: RegionType[];
  };
  filters: FiltersType;
}

const initialState: SearchFiltersSlice = {
  data_filters: {
    type_activities: [],
    settlements: [],
    districts: [],
    regions: [],
  },
  filters: {
    type_activities: null,
    settlements: null,
    districts: null,
    regions: null,
    fromDate: null,
    toDate: null,
    isDate: false,
  },
};

export const doGetTypeActivitiesList = createAsyncThunk<TypeActivitiesType[]>('doGetTypeActivities', async () => {
  try {
    const response = await axios.get(SEARCH_FILTERS_URL.TYPE_ACTIVITIES);

    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const doGetSettlementsList = createAsyncThunk<SettlementType[]>('doGetSettlements', async () => {
  try {
    const response = await axios.get(SEARCH_FILTERS_URL.SETTLEMENT);

    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const doGetDistrictsList = createAsyncThunk<DistrictType[]>('doGetDistricts', async () => {
  try {
    const response = await axios.get(SEARCH_FILTERS_URL.DISTRICTS);

    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const doGetRegions = createAsyncThunk<RegionType[]>('doGetRegions', async () => {
  try {
    const response = await axios.get(SEARCH_FILTERS_URL.REGION);

    return response.data;
  } catch (error) {
    console.log(error);
  }
});

const searchFiltersSlice = createSlice({
  name: 'searchFilters',
  initialState,
  reducers: {
    setSettlement: (state, action) => {
      state.filters = { ...state.filters, settlements: action.payload, districts: null, regions: null };
    },
    setDistrict: (state, action) => {
      state.filters = { ...state.filters, districts: action.payload, settlements: null, regions: null };
    },
    setRegion: (state, action) => {
      state.filters = { ...state.filters, regions: action.payload, settlements: null, districts: null };
    },
    setDate: (state, action) => {
      state.filters = { ...state.filters, fromDate: action.payload[0], toDate: action.payload[1], isDate: true };
    },
    deleteDate: (state) => {
      state.filters = { ...state.filters, fromDate: null, toDate: null, isDate: false };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(doGetTypeActivitiesList.fulfilled, (state, action) => {
      state.data_filters.type_activities = action.payload;
    });
    builder.addCase(doGetSettlementsList.fulfilled, (state, action) => {
      state.data_filters.settlements = action.payload;
    });
    builder.addCase(doGetDistrictsList.fulfilled, (state, action) => {
      state.data_filters.districts = action.payload;
    });
    builder.addCase(doGetRegions.fulfilled, (state, action) => {
      state.data_filters.regions = action.payload;
    });
  },
});

export const { setSettlement, setDistrict, setRegion, setDate, deleteDate } = searchFiltersSlice.actions;
export default searchFiltersSlice.reducer;
