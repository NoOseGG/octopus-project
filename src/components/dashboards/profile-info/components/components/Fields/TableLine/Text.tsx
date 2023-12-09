import React from 'react';
import * as S from '@app/components/dashboards/profile-info/styles/ProfileInfoStyles';
import { formatDate } from '@app/utils/utils';
import CopyButton from '@app/components/dashboards/profile-info/components/components/Buttons/CopyButton/CopyButton';

type MyComponentProps = {
  field: string | null | undefined;
  isDate?: boolean;
  isCopyable?: boolean;
};

const Text: React.FC<MyComponentProps> = ({ field, isDate, isCopyable }) => {
  return (
    <S.RightCell>
      {!isDate ? (
        <>
          {isCopyable ? (
            <S.Text>
              <CopyButton text={field} /> {field}
            </S.Text>
          ) : (
            <S.Text>{field}</S.Text>
          )}
        </>
      ) : (
        <>
          {isCopyable ? (
            <S.Text>
              <CopyButton text={field} /> {formatDate(field)}
            </S.Text>
          ) : (
            <S.Text>{formatDate(field)}</S.Text>
          )}
        </>
      )}
    </S.RightCell>
  );
};

export default Text;
