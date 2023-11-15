import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { FavouritesObject } from '@app/store/types/FavouritesTypes';
import { doDeleteFavourites, doPostFavourites } from '@app/store/slices/search/favouritesSlice';
import { HeartFilled, HeartOutlined } from '@ant-design/icons';

type MyComponentProps = {
  unn: string;
};

const FavouritesButton: React.FC<MyComponentProps> = ({ unn }) => {
  const { favourites } = useAppSelector((state) => state.favourites);
  const [isFavourite, setIsFavourite] = useState(() => {
    return checkFavourite(unn, favourites.results);
  });
  const dispatch = useAppDispatch();

  useEffect(() => {
    changeFavourite();
  }, [dispatch, favourites, isFavourite]);

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

  return <>{isFavourite ? <HeartFilled onClick={changeFavourite} /> : <HeartOutlined onClick={changeFavourite} />}</>;
};

export default FavouritesButton;

const checkFavourite = (unn: string, favourites: FavouritesObject[]): boolean => {
  console.log(`fav ${JSON.stringify(favourites)}`);
  favourites.forEach((item) => {
    if (item.legal_entity_id === unn) return true;
  });
  return false;
};
