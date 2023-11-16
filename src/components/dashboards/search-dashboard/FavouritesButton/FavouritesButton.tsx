import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { FavouritesObject } from '@app/store/types/FavouritesTypes';
import { doDeleteFavourites, doGetFavourites, doPostFavourites } from '@app/store/slices/search/favouritesSlice';
import { HeartFilled, HeartOutlined } from '@ant-design/icons';

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
    const aaa = checkFavourite(unn, favourites.results);
    console.log(`return => ${aaa}`);
    if (checkFavourite(unn, favourites.results)) {
      dispatch(doDeleteFavourites(unn));
      console.log('delete');
      setIsFavourite(false);
    } else {
      dispatch(doPostFavourites(unn));
      console.log('post');
      setIsFavourite(true);
    }
  };

  return (
    <>
      {isFavourite ? (
        <HeartFilled onClick={changeFavourite} style={{ fontSize: size }} />
      ) : (
        <HeartOutlined onClick={changeFavourite} style={{ fontSize: size }} />
      )}
    </>
  );
};

export default FavouritesButton;

const checkFavourite = (unn: string, favourites: FavouritesObject[]): boolean => {
  return favourites.some((item) => item.legal_entity_id === unn);
};
