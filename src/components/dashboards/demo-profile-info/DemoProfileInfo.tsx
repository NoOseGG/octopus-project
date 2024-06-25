import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { URLS } from '@app/constants/Constants';
import { SearchResponse } from '@app/api/search.api';
import { Organization } from '@app/store/slices/search/searchSlice';
import styled from 'styled-components';

const DemoProfileInfo: React.FC = () => {
  const [subject, setSubject] = useState<Organization>();
  const { unp } = useParams();

  useEffect(() => {
    if (Boolean(unp)) {
      const response = axios.get<SearchResponse>(URLS.SEARCH, {
        params: { val: unp },
      });

      response.then((res) => {
        setSubject(res.data.results[0]);
      });
    }
  }, [unp]);

  return (
    <Container>
      <div>DEMO PROFILE</div>
      <div>{subject?.full_name}</div>
    </Container>
  );
};

export default DemoProfileInfo;

const Container = styled.div`
  flex-grow: 1;
`;
