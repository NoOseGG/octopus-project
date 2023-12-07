import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button } from '@app/components/common/buttons/Button/Button';
import { AimOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { doDeleteFavourites, doGetFavourites, doPostFavourites } from '@app/store/slices/search/favouritesSlice';
import { FavouritesObject } from '@app/store/types/FavouritesTypes';

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
        <FavouriteButton isFavourite={isFavourite} onClick={changeFavourite}>
          Не отслеживать <AimOutlined />
        </FavouriteButton>
      ) : (
        <FavouriteButton isFavourite={isFavourite} onClick={changeFavourite}>
          Отслеживать <AimOutlined />
        </FavouriteButton>
      )}
    </>
  );
};

export default Favourite;

interface FavouriteButtonProps {
  isFavourite: boolean;
}

const FavouriteButton = styled(Button)<FavouriteButtonProps>`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-inline: 15px;
  color: #0057ff;
  height: 2rem;
  background: ${(props) => (props.isFavourite ? '#85a8da' : 'white')};
  font-weight: 500;
  font-size: 0.9375rem;
  line-height: 1.375rem;
  padding: 0.3125rem 0.9375rem;
  border: 1px solid rgba(170, 170, 170, 0.33);

  &:hover {
    color: #ff4d78;
    border-color: #aaaaaa54;
    background-color: #fbf3e9;
  }
`;

const checkFavourite = (unn: string, favourites: FavouritesObject[]): boolean => {
  return favourites.some((item) => item.legal_entity_id === unn);
};
