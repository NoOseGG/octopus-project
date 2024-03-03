import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Container, InnerContainer } from '../styles/MainLandingStyles';
import { ScrollType } from '@app/components/dashboards/mainLanding/Header/Header';
import { regions } from '@app/components/dashboards/mainLanding/MapBelarus/data/mapBelarusData';
import './styles/styles.css';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { MapBelarusObject } from '@app/store/types/landing/MapBelarusTypes';
import {
  doGetCountLegalEntitiesOfRegions,
  doGetCountSoleTradesOfRegions,
} from '@app/store/slices/landing/mapBelarusSlice';

const styles = {
  subregions: { fill: '#eeeeee', stroke: '#ffffff', strokeWidth: 0.5 },
  regions: { fill: 'none', stroke: '#ffffff', strokeWidth: 2 },
  circle: { fill: '#cccccc', stroke: 'none' },
};

const MapBelarus: React.FC = () => {
  const [region, setRegion] = useState<string | null>('Минская область');
  const [countSoleTrades, setCountSoleTrades] = useState(0);
  const [countLegalEntity, setCountLegalEntity] = useState(0);
  const { soleTrades, legalEntities } = useAppSelector((state) => state.mapBelarus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetCountSoleTradesOfRegions());
    dispatch(doGetCountLegalEntitiesOfRegions());
  }, [dispatch]);

  useEffect(() => {
    const countST = getCountFormEntityOfRegion(region, soleTrades.results);
    const countLE = getCountFormEntityOfRegion(region, legalEntities.results);
    setCountSoleTrades(countST);
    setCountLegalEntity(countLE);
  }, [legalEntities.results, region, soleTrades.results]);

  const handleMouseOver = function (event: React.MouseEvent<SVGElement>) {
    const region = (event.target as SVGElement).getAttribute('data-region');
    setRegion(region);
  };

  return (
    <Container backgroundColor={'#b9dbf4'} id={ScrollType.Map}>
      <InnerContainer>
        <Title>Интерактивная карта</Title>
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
                <h3>Юридические лица </h3>
                <InfoContent>{countLegalEntity}</InfoContent>
              </FormEntityContainer>
              <FormEntityContainer>
                <h3>Индив. предпрениматели </h3>
                <InfoContent>{countSoleTrades}</InfoContent>
              </FormEntityContainer>
            </SubjectContainer>
          </InfoContainer>
        </MapBelarusContainer>
      </InnerContainer>
    </Container>
  );
};

export default MapBelarus;

const Title = styled.h1`
  text-align: center;
`;

const MapBelarusContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 500px;
`;

const InfoContainer = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.21);
  padding: 5px 15px 20px 15px;
  width: 500px;
  height: 300px;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
`;

const InfoTitle = styled.h1`
  font-family: Inter, sans-serif;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
`;

const SubjectContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-evenly;
`;

const FormEntityContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InfoContent = styled.div`
  font-size: 40px;
`;

const getCountFormEntityOfRegion = (region: string | null, soleTrades: MapBelarusObject[]): number => {
  if (region === null) return 0;
  for (const item of soleTrades) {
    if (item.group_fields.address_region === region) return item.Count;
  }
  return 0;
};