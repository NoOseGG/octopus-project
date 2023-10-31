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

interface SettlementType {
  address_settlement: string;
}

interface DistrictType {
  address_district: string;
}

interface RegionType {
  address_region: string;
}

interface SearchFiltersSlice {
  type_activities: TypeActivitiesType[];
  settlements: SettlementType[];
  districts: DistrictType[];
  regions: RegionType[];
}

const initialState: SearchFiltersSlice = {
  type_activities: [],
  settlements: [],
  districts: [],
  regions: [],
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
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetTypeActivities.fulfilled, (state, action) => {
      state.type_activities = action.payload;
    });
    builder.addCase(doGetSettlements.fulfilled, (state, action) => {
      state.settlements = action.payload;
    });
    builder.addCase(doGetDistricts.fulfilled, (state, action) => {
      state.districts = action.payload;
    });
    builder.addCase(doGetRegions.fulfilled, (state, action) => {
      state.regions = action.payload;
    });
  },
});

export default searchFiltersSlice.reducer;
