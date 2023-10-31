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
  type_activities: string;
  settlements: string;
  districts: string;
  regions: string;
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
    type_activities: '',
    settlements: '',
    districts: '',
    regions: '',
  },
};

export const doGetTypeActivities = createAsyncThunk<TypeActivitiesType[]>('doGetTypeActivities', async () => {
  try {
    const response = await axios.get(SEARCH_FILTERS_URL.TYPE_ACTIVITIES);

    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const doGetSettlements = createAsyncThunk<SettlementType[]>('doGetSettlements', async () => {
  try {
    const response = await axios.get(SEARCH_FILTERS_URL.SETTLEMENT);

    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const doGetDistricts = createAsyncThunk<DistrictType[]>('doGetDistricts', async () => {
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
      console.log(`ACTION => ${action.payload}`);
      state.filters.settlements = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(doGetTypeActivities.fulfilled, (state, action) => {
      state.data_filters.type_activities = action.payload;
    });
    builder.addCase(doGetSettlements.fulfilled, (state, action) => {
      state.data_filters.settlements = action.payload;
    });
    builder.addCase(doGetDistricts.fulfilled, (state, action) => {
      state.data_filters.districts = action.payload;
    });
    builder.addCase(doGetRegions.fulfilled, (state, action) => {
      state.data_filters.regions = action.payload;
    });
  },
});

export const { setSettlement } = searchFiltersSlice.actions;
export default searchFiltersSlice.reducer;
