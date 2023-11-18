import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { FavouritesObject } from '@app/store/types/FavouritesTypes';
import { doDeleteFavourites, doGetFavourites, doPostFavourites } from '@app/store/slices/search/favouritesSlice';
import { StarFilled, StarOutlined } from '@ant-design/icons';

export enum FavouritesButtonSize {
  SMALL = 16,
  MIDDLE = 24,
  BIG = 32,
}

type MyComponentProps = {
  unn: string;
  size: FavouritesButtonSize;
};

const FavouritesButton: React.FC<MyComponentProps> = ({ unn, size }) => {
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
    console.log(favourites.results);
    if (checkFavourite(unn, favourites.results)) {
      dispatch(doDeleteFavourites(unn));
      setIsFavourite(false);
    } else {
      dispatch(doPostFavourites(unn));
      setIsFavourite(true);
    }
  };

  return (
    <>
      {isFavourite ? (
        <StarFilled onClick={changeFavourite} style={{ fontSize: size }} />
      ) : (
        <StarOutlined onClick={changeFavourite} style={{ fontSize: size }} />
      )}
    </>
  );
};

export default FavouritesButton;

const checkFavourite = (unn: string, favourites: FavouritesObject[]): boolean => {
  return favourites.some((item) => item.legal_entity_id === unn);
};
