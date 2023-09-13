import { createSlice } from '@reduxjs/toolkit';
import {
  SubjectType,
} from '@app/store/types/Subject';

interface SubjectState {
  subject: SubjectType;
  error: string | null;
}

const initialState: SubjectState = {
  subject: {
    unn: '',
    date_reg_mns: '',
    date_reg_egr: '',
    decision_create_number: '',
    decision_liquidation_number: '',
    period_activity: '',
    age_full: '',
    age_short: '',
    emails: [],
    addresses: [],
    names: [],
    phones: [],
    web_sites: [],
    descriptions: [],
    tax_offices: [],
    tax_offices_arrears: [],
    legal_forms: [],
    types_activities: [],
    statuses: [],
    countries: [],
    statuses_types: [],
    states_bodies: [],
    licenses: [],
    vacancy: [],
    commercial_register: [],
  },
  error: '',
};

export const subjectSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSubject: (state, action) => {
      console.log(`SETDATA ${action.payload}`);
      state.subject = action.payload;
    },
    setSubjectError: (state, action) => {
      console.log(`SETDATA ${action.payload}`);
      state.error = action.payload;
    },
  },
});

export const { setSubject, setSubjectError } = subjectSlice.actions;
export default subjectSlice.reducer;
