import { COUNT_CHECKED_TYPE } from '@app/components/dashboards/dashboard/components/Inspection/components/CountChecked/CountCheckedTypes';

export type InspectionsProps = {
  all: COUNT_CHECKED_TYPE;
  liquidated: COUNT_CHECKED_TYPE;
  bankrupted: COUNT_CHECKED_TYPE;
};
