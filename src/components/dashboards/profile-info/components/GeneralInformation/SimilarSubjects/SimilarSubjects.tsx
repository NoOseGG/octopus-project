import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { doSearchSimilar } from '@app/store/slices/search/searchSimilarSlice';
import OneSimilar from '@app/components/dashboards/profile-info/components/GeneralInformation/SimilarSubjects/components/OneSimilar/OneSimilar';

const SimilarSubjects: React.FC = () => {
  const { results } = useAppSelector((state) => state.searchSimilar);
  const dispatch = useAppDispatch();

  const unn = useAppSelector((state) => state.searchProfile.profile.unn);
  const settlement = useAppSelector((state) => state.searchProfile.profile.addresses[0]?.settlement);
  const taxOffice = useAppSelector((state) => state.searchProfile.profile.tax_offices[0]?.name);
  const typeActivity = useAppSelector((state) => state.searchProfile.profile.types_activities[0]?.name);

  useEffect(() => {
    dispatch(
      doSearchSimilar({
        unn,
        settlement,
        taxOffice,
        typeActivity,
      }),
    );
  }, [settlement, taxOffice, typeActivity]);

  return (
    <>
      {Boolean(results.length) && (
        <>
          <Title>Похожие организации</Title>
          <SimilarContainer>
            <>
              {results?.slice(0, 5)?.map((item, index) => (
                <OneSimilar subject={item} key={index} />
              ))}
            </>
          </SimilarContainer>
        </>
      )}
    </>
  );
};

export default SimilarSubjects;

const SimilarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: stretch;
  gap: 20px;
`;

const Title = styled.div`
  font-weight: 700;
`;
