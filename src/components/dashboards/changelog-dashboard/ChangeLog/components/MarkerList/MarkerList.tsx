import React from 'react';

export enum MarkerType {
  ADD,
  CHANGE,
  DELETE,
}

type MyComponentProps = {
  marker: MarkerType;
};

const MarkerList: React.FC<MyComponentProps> = ({ marker, children }) => {
  const colorMarker = getColor(marker);

  return (
    <li style={{ color: colorMarker }}>
      <span style={{ color: 'black' }}>{children}</span>
    </li>
  );
};

export default MarkerList;

const getColor = (marker: MarkerType): string => {
  switch (marker) {
    case MarkerType.ADD:
      return 'green';
    case MarkerType.CHANGE:
      return 'blue';
    default:
      return 'red';
  }
};
