import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button } from '@app/components/common/buttons/Button/Button';
import { AimOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { doDeleteFavourites, doGetFavourites, doPostFavourites } from '@app/store/slices/search/favouritesSlice';
import { FavouritesObject } from '@app/store/types/FavouritesTypes';
import { MyStyles } from '@app/styles/themes/myStyles/myStyles';

type MyComponentProps = {
  unn: string;
};

const Favourite: React.FC<MyComponentProps> = ({ unn }) => {
  const { favourites } = useAppSelector((state) => state.favourites);
  const [isFavourite, setIsFavourite] = useState(() => {
    return checkFavourite(unn, favourites.results);
  });
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetFavourites);
  });

  useEffect(() => {
    setIsFavourite(checkFavourite(unn, favourites.results));
  }, [favourites]);

  const changeFavourite = () => {
    if (checkFavourite(unn, favourites.results)) {
      dispatch(doDeleteFavourites(unn));
      dispatch(doGetFavourites());
    } else {
      dispatch(doPostFavourites(unn));
      dispatch(doGetFavourites());
    }
  };

  return (
    <>
      {isFavourite ? (
        <FavouriteButtonFavourite onClick={changeFavourite}>
          Не отслеживать <AimOutlined />
        </FavouriteButtonFavourite>
      ) : (
        <FavouriteButtonNotFavourite onClick={changeFavourite}>
          Отслеживать <AimOutlined />
        </FavouriteButtonNotFavourite>
      )}
    </>
  );
};

export default Favourite;

const FavouriteButtonFavourite = styled(Button)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: #fff;
  height: 2rem;
  background: ${MyStyles.primaryColor};
  font-weight: 500;
  font-size: 0.9375rem;
  line-height: 1.375rem;
  padding: 0.3125rem 0.9375rem;
  border: 1px solid rgba(170, 170, 170, 0.33);

  &:hover {
    color: ${MyStyles.primaryColor};
    border-color: #aaaaaa54;
    background-color: #fff;
  }
`;

const FavouriteButtonNotFavourite = styled(Button)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: ${MyStyles.primaryColor};
  height: 2rem;
  background: white;
  font-weight: 500;
  font-size: 0.9375rem;
  line-height: 1.375rem;
  padding: 0.3125rem 0.9375rem;
  border: 1px solid rgba(170, 170, 170, 0.33);

  &:hover {
    color: #fff;
    border-color: #aaaaaa54;
    background-color: ${MyStyles.primaryColor};
  }
`;

const checkFavourite = (unn: string, favourites: FavouritesObject[]): boolean => {
  return favourites.some((item) => item.legal_entity_id === unn);
};
