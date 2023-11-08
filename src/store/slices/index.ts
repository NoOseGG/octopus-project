import userReducer from '@app/store/slices/userSlice';
import authReducer from '@app/store/slices/authSlice';
import nightModeReducer from '@app/store/slices/nightModeSlice';
import themeReducer from '@app/store/slices/themeSlice';
import searchReducer from '@app/store/slices/searchSlice';
import searchProfileReducer from '@app/store/slices/searchProfileSlice';
import dashboardReducer from '@app/store/slices/legalEntityDashboard/dashboardSlice';
import searchFiltersReducer from '@app/store/slices/searchFiltersSlice';
import { typeActivitiesReducer } from '@app/store/slices/legalEntityDashboard/typeActivities';
import { typeActivitiesSoleTradeReducer } from '@app/store/slices/dashboardSoleTrader/typeActivities';
import currentSubjectsByAgeReducer from '@app/store/slices/legalEntityDashboard/currentSubjectsByAgeSlice';
import detailedInformationCompanyReducer from '@app/store/slices/legalEntityDashboard/detailedInformationCompanySlice';
import liquidatedMainInfoReducer from '@app/store/slices/legalEntityDashboard/liquidatedMainInfo';
import mainInfoSoleTradeReducer from '@app/store/slices/dashboardSoleTrader/mainInfoSoleTraderSlice';

export default {
  user: userReducer,
  auth: authReducer,
  nightMode: nightModeReducer,
  theme: themeReducer,
  // pwa: pwaReducer,
  search: searchReducer,
  searchProfile: searchProfileReducer,
  dashboard: dashboardReducer,
  searchFilters: searchFiltersReducer,
  typeActivities: typeActivitiesReducer,
  typeActivitiesSoleTrade: typeActivitiesSoleTradeReducer,
  currentSubjectsByAge: currentSubjectsByAgeReducer,
  detailedInformationCompany: detailedInformationCompanyReducer,
  liquidatedMainInfo: liquidatedMainInfoReducer,
  mainInfoSoleTrade: mainInfoSoleTradeReducer,
};
