import userReducer from '@app/store/slices/userSlice';
import authReducer from '@app/store/slices/authSlice';
import nightModeReducer from '@app/store/slices/nightModeSlice';
import themeReducer from '@app/store/slices/themeSlice';
import searchReducer from '@app/store/slices/searchSlice';
import searchProfileReducer from '@app/store/slices/searchProfileSlice';
import searchFiltersReducer from '@app/store/slices/searchFiltersSlice';
import typeActivitiesReducer from '@app/store/slices/legalEntityDashboard/typeActivities';
import currentByAgeReducer from '@app/store/slices/legalEntityDashboard/currentByAge/index';
import detailedInformationCompanyReducer from '@app/store/slices/legalEntityDashboard/detailedInformationCompanySlice';
import liquidatedMainInfoReducer from '@app/store/slices/legalEntityDashboard/liquidatedMainInfo';
import mainInfoReducer from '@app/store/slices/legalEntityDashboard/mainInfo/index';
import chartsReducer from '@app/store/slices/legalEntityDashboard/charts';

export default {
  user: userReducer,
  auth: authReducer,
  nightMode: nightModeReducer,
  theme: themeReducer,
  // pwa: pwaReducer,
  search: searchReducer,
  searchProfile: searchProfileReducer,
  mainInfo: mainInfoReducer,
  charts: chartsReducer,
  searchFilters: searchFiltersReducer,
  typeActivities: typeActivitiesReducer,
  currentByAge: currentByAgeReducer,
  detailedInformationCompany: detailedInformationCompanyReducer,
  liquidatedMainInfo: liquidatedMainInfoReducer,
};
