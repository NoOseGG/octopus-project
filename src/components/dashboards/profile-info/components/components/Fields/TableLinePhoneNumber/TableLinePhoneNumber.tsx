import React from 'react';
import * as S from '@app/components/dashboards/profile-info/styles/ProfileInfoStyles';
import Text from '@app/components/dashboards/profile-info/components/components/Fields/TableLine/Text';
import { formatPhoneNumber } from '@app/utils/utils';

type MyComponentProps = {
  name: string | null | undefined;
  field: string | null | undefined;
  isDate?: boolean;
  isCopyable?: boolean;
  isLink?: boolean;
};

const TableLinePhoneNumber: React.FC<MyComponentProps> = ({ name, field, isCopyable }) => {
  return (
    <>
      {name && field && (
        <S.StyledRow>
          <S.LeftCell>
            <S.Text>{name}</S.Text>
          </S.LeftCell>
          <Text field={formatPhoneNumber(field)} isCopyable={isCopyable} />
        </S.StyledRow>
      )}
    </>
  );
};

export default TableLinePhoneNumber;
