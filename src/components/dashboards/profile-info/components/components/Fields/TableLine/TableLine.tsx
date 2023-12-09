import React from 'react';
import * as S from '@app/components/dashboards/profile-info/styles/ProfileInfoStyles';
import Text from '@app/components/dashboards/profile-info/components/components/Fields/TableLine/Text';

type MyComponentProps = {
  name: string | null | undefined;
  field: string | null | undefined;
  isDate?: boolean;
  isCopyable?: boolean;
  isLink?: boolean;
};

const TableLine: React.FC<MyComponentProps> = ({ name, field, isDate, isCopyable, isLink }) => {
  return (
    <>
      {name && field && (
        <S.StyledRow>
          <S.LeftCell>
            <S.Text>{name}</S.Text>
          </S.LeftCell>
          <Text field={field} isDate={isDate} isCopyable={isCopyable} isLink={isLink} />
        </S.StyledRow>
      )}
    </>
  );
};

export default TableLine;
