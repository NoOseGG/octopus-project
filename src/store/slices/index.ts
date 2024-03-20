import userReducer from '@app/store/slices/userSlice';
import authReducer from '@app/store/slices/authSlice';
import nightModeReducer from '@app/store/slices/nightModeSlice';
import themeReducer from '@app/store/slices/themeSlice';
import searchReducer from '@app/store/slices/search/searchSlice';
import searchHistoryReducer from '@app/store/slices/search/searchHistorySlice';
import searchProfileReducer from '@app/store/slices/search/searchProfileSlice';
import searchFiltersReducer from '@app/store/slices/search/searchFiltersSlice';
import favouritesReducer from '@app/store/slices/search/favouritesSlice';
import typeActivitiesReducer from '@app/store/slices/legalEntityDashboard/typeActivities/current';
import typeActivitiesLiquidatedReducer from '@app/store/slices/legalEntityDashboard/typeActivities/liquidated';
import typeActivitiesBankruptedReducer from '@app/store/slices/legalEntityDashboard/typeActivities/bankrupted';
import typeActivitiesCheckedReducer from '@app/store/slices/legalEntityDashboard/typeActivities/checked';
import typeActivitiesSoleTradeReducer from '@app/store/slices/soleTradeDashboard/typeActivities/current';
import typeActivitiesLiquidatedSoleTradeReducer from '@app/store/slices/soleTradeDashboard/typeActivities/liquidated';
import typeActivitiesBankruptedSoleTradeReducer from '@app/store/slices/soleTradeDashboard/typeActivities/bankrupted';
import typeActivitiesCheckedSoleTradeReducer from '@app/store/slices/soleTradeDashboard/typeActivities/checked';
import currentByAgeReducer from '@app/store/slices/legalEntityDashboard/byAge/current';
import liquidatedByAgeReducer from '@app/store/slices/legalEntityDashboard/byAge/liquidated';
import bankruptedByAgeReducer from '@app/store/slices/legalEntityDashboard/byAge/bankrupted';
import checkedByAgeReducer from '@app/store/slices/legalEntityDashboard/byAge/checked';
import currentByAgeSoleTradeReducer from '@app/store/slices/soleTradeDashboard/byAge/current';
import liquidatedByAgeSoleTradeReducer from '@app/store/slices/soleTradeDashboard/byAge/liquidated';
import bankruptedByAgeSoleTradeReducer from '@app/store/slices/soleTradeDashboard/byAge/bankrupted';
import checkedByAgeSoleTradeReducer from '@app/store/slices/soleTradeDashboard/byAge/checked';
import detailedInformationReducer from '@app/store/slices/legalEntityDashboard/detailed';
import detailedInformationSoleTradeReducer from '@app/store/slices/soleTradeDashboard/detailed';
import liquidatedMainInfoReducer from '@app/store/slices/legalEntityDashboard/mainInfo/liquidated';
import liquidatedMainInfoSoleTradeReducer from '@app/store/slices/soleTradeDashboard/mainInfo/liquidated/';
import mainInfoReducer from '@app/store/slices/legalEntityDashboard/mainInfo/created';
import mainInfoSoleTradeReducer from '@app/store/slices/soleTradeDashboard/mainInfo/created';
import mainInfoBankruptedReducer from '@app/store/slices/legalEntityDashboard/mainInfo/bankrupt';
import mainInfoBankruptedSoleTradeReducer from '@app/store/slices/soleTradeDashboard/mainInfo/bankrupted';
import chartsReducer from '@app/store/slices/legalEntityDashboard/charts';
import chartsSoleTradeReducer from '@app/store/slices/soleTradeDashboard/charts';
import checkedMainInfoReducer from '@app/store/slices/legalEntityDashboard/mainInfo/checked';
import checkedMainInfoSoleTradeReducer from '@app/store/slices/soleTradeDashboard/mainInfo/checked';
import searchSimilarReducer from '@app/store/slices/search/searchSimilarSlice';
import jumpsReducer from '@app/store/slices/legalEntityDashboard/jumps';
import feedbackReducer from '@app/store/slices/feedback/feedbackSlice';

import designReducer from '@app/store/slices/search/designSlice';
import mapBelarusReducer from '@app/store/slices/landing/mapBelarusSlice';

export default {
  user: userReducer,
  auth: authReducer,
  nightMode: nightModeReducer,
  theme: themeReducer,
  // pwa: pwaReducer,
  search: searchReducer,
  searchHistory: searchHistoryReducer,
  searchProfile: searchProfileReducer,
  searchFilters: searchFiltersReducer,
  searchSimilar: searchSimilarReducer,
  favourites: favouritesReducer,
  feedback: feedbackReducer,
  mainInfo: mainInfoReducer,
  mainInfoSoleTrade: mainInfoSoleTradeReducer,
  liquidatedMainInfo: liquidatedMainInfoReducer,
  liquidatedMainInfoSoleTrade: liquidatedMainInfoSoleTradeReducer,
  mainInfoBankrupted: mainInfoBankruptedReducer,
  mainInfoBankruptedSoleTrade: mainInfoBankruptedSoleTradeReducer,
  charts: chartsReducer,
  chartsSoleTrade: chartsSoleTradeReducer,
  typeActivities: typeActivitiesReducer,
  typeActivitiesLiquidated: typeActivitiesLiquidatedReducer,
  typeActivitiesBankrupted: typeActivitiesBankruptedReducer,
  typeActivitiesChecked: typeActivitiesCheckedReducer,
  typeActivitiesSoleTrade: typeActivitiesSoleTradeReducer,
  typeActivitiesLiquidatedSoleTrade: typeActivitiesLiquidatedSoleTradeReducer,
  typeActivitiesBankruptedSoleTrade: typeActivitiesBankruptedSoleTradeReducer,
  typeActivitiesCheckedSoleTrade: typeActivitiesCheckedSoleTradeReducer,
  currentByAge: currentByAgeReducer,
  liquidatedByAge: liquidatedByAgeReducer,
  bankruptedByAge: bankruptedByAgeReducer,
  checkedByAge: checkedByAgeReducer,
  currentByAgeSoleTrade: currentByAgeSoleTradeReducer,
  liquidatedByAgeSoleTrade: liquidatedByAgeSoleTradeReducer,
  bankruptedByAgeSoleTrade: bankruptedByAgeSoleTradeReducer,
  checkedByAgeSoleTrade: checkedByAgeSoleTradeReducer,
  detailedInformation: detailedInformationReducer,
  detailedInformationSoleTrade: detailedInformationSoleTradeReducer,
  checkedMainInfo: checkedMainInfoReducer,
  checkedMainInfoSoleTrade: checkedMainInfoSoleTradeReducer,
  design: designReducer,
  mapBelarus: mapBelarusReducer,
  jump: jumpsReducer,
};
