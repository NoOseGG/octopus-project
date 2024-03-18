import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { InnerContainer } from '../styles/MainLandingStyles';
import { regions } from '@app/components/dashboards/mainLanding/MapBelarus/data/mapBelarusData';
import './styles/styles.css';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { MapBelarusObject } from '@app/store/types/landing/MapBelarusTypes';
import { doGetCountEntitiesOfMap } from '@app/store/slices/landing/mapBelarusSlice';
import { formatNumberWithCommas } from '@app/utils/utils';

enum ENTITY_TYPE {
  LEGAL_ENTITY = 'Юридическое лицо',
  SOLE_TRADE = 'Индивидуальный предприниматель',
}

const styles = {
  subregions: { fill: '#eeeeee', stroke: '#ffffff', strokeWidth: 0.5 },
  regions: { fill: 'none', stroke: '#ffffff', strokeWidth: 2 },
  circle: { fill: '#cccccc', stroke: 'none' },
};

const MapBelarus: React.FC = () => {
  const [region, setRegion] = useState<string | null>('Минская область');
  const [countSoleTrades, setCountSoleTrades] = useState(0);
  const [countLegalEntity, setCountLegalEntity] = useState(0);
  const countEntitiesOfMap = useAppSelector((state) => state.mapBelarus.countEntitiesOfMap);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetCountEntitiesOfMap());
  }, [dispatch]);

  useEffect(() => {
    const countST = getCountFormEntityOfRegion(region, countEntitiesOfMap, ENTITY_TYPE.LEGAL_ENTITY);
    const countLE = getCountFormEntityOfRegion(region, countEntitiesOfMap, ENTITY_TYPE.SOLE_TRADE);
    setCountSoleTrades(countST);
    setCountLegalEntity(countLE);
  }, [countEntitiesOfMap, region]);

  const handleMouseOver = function (event: React.MouseEvent<SVGElement>) {
    const region = (event.target as SVGElement).getAttribute('data-region');
    setRegion(region);
  };

  return (
    <Container>
      <InnerContainer>
        <MapBelarusContainer>
          <ImageContainer>
            <svg
              version="1.1"
              id="Belarus"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 550 490"
              enableBackground="new 0 0 550 490"
              xmlSpace="preserve"
            >
              <style>
                {`
                        #subregions {${Object.entries(styles.subregions)
                          .map(([key, value]) => `${key}:${value};`)
                          .join('')}}
                        #regions {${Object.entries(styles.regions)
                          .map(([key, value]) => `${key}:${value};`)
                          .join('')}}
                        circle {${Object.entries(styles.circle)
                          .map(([key, value]) => `${key}:${value};`)
                          .join('')}}
                    `}
              </style>

              <g id="regions">
                {regions.map((region, index) => {
                  return (
                    <polygon
                      id={region.id}
                      data-region={region.region_name}
                      points={region.points}
                      onMouseOver={handleMouseOver}
                      key={index}
                    />
                  );
                })}
              </g>
            </svg>
          </ImageContainer>
          <InfoContainer>
            <InfoTitle>{region}</InfoTitle>
            <SubjectContainer>
              <FormEntityContainer>
                <EntityTitle>Юридические лица </EntityTitle>
                <InfoContent>{formatNumberWithCommas(countLegalEntity)}</InfoContent>
              </FormEntityContainer>
              <FormEntityContainer>
                <EntityTitle>Индив. предприниматели </EntityTitle>
                <InfoContent>{formatNumberWithCommas(countSoleTrades)}</InfoContent>
              </FormEntityContainer>
            </SubjectContainer>
          </InfoContainer>
        </MapBelarusContainer>
      </InnerContainer>
    </Container>
  );
};

export default MapBelarus;

const Container = styled.div`
  width: 100%;
`;

const MapBelarusContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;

  @media (max-width: 420px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 500px;

  @media (max-width: 420px) {
    max-width: 400px;
  }

  @media (max-width: 400px) {
    max-width: 340px;
  }

  @media (max-width: 370px) {
    max-width: 200px;
  }
`;

const InfoContainer = styled.div`
  padding: 5px 15px 20px 15px;
  max-width: 500px;
  height: 300px;
  display: flex;
  flex-direction: column;

  @media (max-width: 420px) {
    max-width: 100%;
  }
`;

const InfoTitle = styled.h1`
  margin: 0 auto;
  font-size: 24px;
  font-weight: 800;
  color: transparent;
  background-image: linear-gradient(to right, #74a6ff, #2775ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;

  @media (max-width: 420px) {
    font-size: 20px;
  }
`;

const SubjectContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 420px) {
    justify-content: space-between;
  }
`;

const FormEntityContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InfoContent = styled.div`
  font-size: 40px;
  color: #fff;

  @media (max-width: 420px) {
    font-size: 30px;
  }
`;

const EntityTitle = styled.h3`
  margin: 0 auto;
  font-weight: 800;
  color: transparent;
  background-image: linear-gradient(to right, #74a6ff, #2775ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 420px) {
    font-size: 14px;
  }
`;

const getCountFormEntityOfRegion = (
  region: string | null,
  entities: MapBelarusObject[],
  entityType: ENTITY_TYPE,
): number => {
  if (region === null) return 0;
  if (entities !== undefined) {
    for (const item of entities) {
      if (item?.address_region === region && item?.legal_form_entity_type === entityType) return item?.count_at;
    }
  }
  return 0;
};
