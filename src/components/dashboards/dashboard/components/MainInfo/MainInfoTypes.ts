import { COUNT_TYPE } from '@app/components/dashboards/dashboard/components/MainInfo/components/CountCompany/CountCompanyTypes';
import {
  COUNT_YEAR_TYPE,
  PERCENT_TYPE,
} from '@app/components/dashboards/dashboard/components/MainInfo/components/CountYear/CountYearTypes';

export type MainInfoProps = {
  all: COUNT_TYPE;
  year: COUNT_YEAR_TYPE;
  quarter: COUNT_TYPE;
  operation: COUNT_TYPE;
  percent: PERCENT_TYPE;
};
