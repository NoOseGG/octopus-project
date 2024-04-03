import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ApartmentOutlined } from '@ant-design/icons';
import { Modal, Popover } from 'antd';
import { httpDashboard } from '@app/api/http.api';
import { URLS } from '@app/constants/Constants';
import { useMutation } from '@tanstack/react-query';
import { AffiliationResponse } from '@app/components/dashboards/profile-info/components/components/Buttons/AffiliationButton/types';

const fetchAffiliation = async (value: string) => {
  return httpDashboard.get<AffiliationResponse>(`${URLS.SEARCH}?val=${value}`);
};

type AffiliationButtonProps = {
  query: string;
};

const AffiliationButton: React.FC<AffiliationButtonProps> = ({ query }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(`query -> ${query}`);
  const { data, mutate } = useMutation({
    mutationFn: () => fetchAffiliation(query),
    onSuccess: () => {
      setIsModalOpen(true);
    },
  });

  useEffect(() => {
    console.log(JSON.stringify(data));
  }, [data]);

  return (
    <AffiliationButtonContainer>
      <Popover content={'Проверить аффелированность'}>
        <ApartmentOutlined onClick={() => mutate()} />
      </Popover>
      <Modal
        title="Basic Modal"
        visible={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
      >
        <p>Проверяем на аффилированость {query}</p>
        {data?.data.results.map((item) => (
          <div key={item.unn}>{item.unn}</div>
        ))}
      </Modal>
    </AffiliationButtonContainer>
  );
};

export default AffiliationButton;

const AffiliationButtonContainer = styled.div`
  color: dodgerblue;
  cursor: pointer;
`;
