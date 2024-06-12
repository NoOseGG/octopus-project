import React, { useState } from 'react';
import styled from 'styled-components';
import { ApartmentOutlined } from '@ant-design/icons';
import { Modal, Popover } from 'antd';
import { httpDashboard } from '@app/api/http.api';
import { URLS } from '@app/constants/Constants';
import { useMutation } from '@tanstack/react-query';
import { AffiliationResponse } from '@app/components/dashboards/profile-info/components/components/Buttons/AffiliationButton/types';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { MyStyles } from '@app/styles/themes/myStyles/myStyles';

const fetchAffiliation = async (value: string) => {
  return httpDashboard.get<AffiliationResponse>(`${URLS.SEARCH}?val=${value}`);
};

type AffiliationButtonProps = {
  query: string;
};

const AffiliationButton: React.FC<AffiliationButtonProps> = ({ query }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const unn = useAppSelector((state) => state.searchProfile.profile.unn);
  const { data, mutate } = useMutation({
    mutationFn: () => fetchAffiliation(query),
    onSuccess: () => {
      setIsModalOpen(true);
    },
  });

  return (
    <AffiliationButtonContainer>
      <Popover content={'Проверить аффелированность'}>
        <ApartmentOutlined onClick={() => mutate()} />
      </Popover>
      <Modal title="Basic Modal" visible={isModalOpen} onOk={() => setIsModalOpen(false)}>
        <p>Проверяем на аффилированость {query}</p>
        {!!data && data?.data.results.length > 1 ? (
          <>
            {data?.data.results
              .filter((item) => item.unn !== unn)
              .map((item) => (
                <div key={item.unn}>{item.unn}</div>
              ))}
          </>
        ) : (
          <div>Других субъектов не найдено</div>
        )}
      </Modal>
    </AffiliationButtonContainer>
  );
};

export default AffiliationButton;

const AffiliationButtonContainer = styled.div`
  color: ${MyStyles.primaryColor};
  cursor: pointer;
`;
