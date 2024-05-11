import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { SEARCH_FILTERS_URL } from '@app/constants/Constants';
import { httpDashboard } from '@app/api/http.api';

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

interface TaxOfficeType {
  tax_office_id: string;
  tax_office_name: string;
  region_code: string;
  region_name: string;
}

export interface FiltersType {
  settlements: string | null;
  districts: string | null;
  regions: string | null;
  taxOffices: string | null;
  typeActivities: string | null;
  codeActivities: string | null;
  fromDate: string | null;
  toDate: string | null;
  isDate: boolean;
  isLegalEntity: boolean;
}

interface SearchFiltersSlice {
  data_filters: {
    codeActivities: string[];
    typeActivities: string[];
    settlements: SettlementType[];
    districts: DistrictType[];
    regions: RegionType[];
    taxOffices: TaxOfficeType[];
  };
  filters: FiltersType;
}

const initialState: SearchFiltersSlice = {
  data_filters: {
    codeActivities: [],
    typeActivities: [],
    settlements: [],
    districts: [],
    regions: [],
    taxOffices: [],
  },
  filters: {
    settlements: null,
    districts: null,
    regions: null,
    taxOffices: null,
    typeActivities: null,
    codeActivities: null,
    fromDate: null,
    toDate: null,
    isDate: false,
    isLegalEntity: true,
  },
};

export const doGetTypeActivitiesList = createAsyncThunk<TypeActivitiesType[]>('doGetTypeActivities', async () => {
  const response = await httpDashboard.get(SEARCH_FILTERS_URL.TYPE_ACTIVITIES);

  return response.data;
});

export const doGetSettlementsList = createAsyncThunk<SettlementType[]>('doGetSettlements', async () => {
  const response = await httpDashboard.get(SEARCH_FILTERS_URL.SETTLEMENT);

  return response.data;
});

export const doGetDistrictsList = createAsyncThunk<DistrictType[]>('doGetDistricts', async () => {
  const response = await httpDashboard.get(SEARCH_FILTERS_URL.DISTRICTS);

  return response.data;
});

export const doGetRegions = createAsyncThunk<RegionType[]>('doGetRegions', async () => {
  const response = await httpDashboard.get(SEARCH_FILTERS_URL.REGION);

  return response.data;
});

export const doGetTaxOfficesList = createAsyncThunk<TaxOfficeType[]>('doGetTaxOffices', async () => {
  const response = await httpDashboard.get(SEARCH_FILTERS_URL.TAX_OFFICES);

  return response.data;
});

const searchFiltersSlice = createSlice({
  name: 'searchFilters',
  initialState,
  reducers: {
    setSettlement: (state, action) => {
      state.filters = {
        ...state.filters,
        settlements: action.payload,
        districts: null,
        regions: null,
        taxOffices: null,
      };
    },
    setDistrict: (state, action) => {
      state.filters = {
        ...state.filters,
        districts: action.payload,
        settlements: null,
        regions: null,
        taxOffices: null,
      };
    },
    setRegion: (state, action) => {
      state.filters = {
        ...state.filters,
        regions: action.payload,
        settlements: null,
        districts: null,
        taxOffices: null,
      };
    },
    setTaxOffice: (state, action) => {
      state.filters = {
        ...state.filters,
        taxOffices: action.payload,
        settlements: null,
        districts: null,
        regions: null,
      };
    },
    setTypeActivity: (state, action) => {
      state.filters = { ...state.filters, typeActivities: action.payload, codeActivities: null };
    },
    setCodeActivity: (state, action) => {
      state.filters = { ...state.filters, codeActivities: action.payload, typeActivities: null };
    },
    setDate: (state, action) => {
      state.filters = { ...state.filters, fromDate: action.payload[0], toDate: action.payload[1], isDate: true };
    },
    deleteDate: (state) => {
      state.filters = { ...state.filters, fromDate: null, toDate: null, isDate: false };
    },
    setLegalEntity: (state) => {
      state.filters = { ...state.filters, isLegalEntity: true };
    },
    deleteLegalEntity: (state) => {
      state.filters = { ...state.filters, isLegalEntity: false };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(doGetTypeActivitiesList.fulfilled, (state, action) => {
      const codes = action.payload?.map((item) => item.type_activity_code);
      const activities = action.payload?.map((item) => item.type_activity_name);
      state.data_filters.codeActivities = codes ? Array.from(new Set(codes)) : [];
      state.data_filters.typeActivities = activities ? Array.from(new Set(activities)) : [];
    });
    builder.addCase(doGetSettlementsList.fulfilled, (state, action) => {
      state.data_filters.settlements = action?.payload;
    });
    builder.addCase(doGetDistrictsList.fulfilled, (state, action) => {
      state.data_filters.districts = action?.payload;
    });
    builder.addCase(doGetRegions.fulfilled, (state, action) => {
      state.data_filters.regions = action?.payload;
    });
    builder.addCase(doGetTaxOfficesList.fulfilled, (state, action) => {
      state.data_filters.taxOffices = action?.payload;
    });
  },
});

export const {
  setSettlement,
  setDistrict,
  setRegion,
  setDate,
  deleteDate,
  setLegalEntity,
  deleteLegalEntity,
  setTypeActivity,
  setCodeActivity,
  setTaxOffice,
} = searchFiltersSlice.actions;
export default searchFiltersSlice.reducer;
