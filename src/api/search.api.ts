import { httpApi } from '@app/api/http.api';
import axios, { AxiosRequestConfig } from "axios";

export interface SearchResponse {
  count: number;
  next: string;
  previous: string;
  results: Organization[];
}

interface Organization {
  unn: string;
  date_reg: string;
  full_name: string;
  full_address: string;
  status_code: string;
  status_name: string;
}

export const search = (query: string): Promise<SearchResponse> => {
  const config: AxiosRequestConfig = {
    method: 'GET',
    url: 'profile_search',
    params: {
      val: query,
    },
  };

  axios(config)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch();

  return new Promise()
}
