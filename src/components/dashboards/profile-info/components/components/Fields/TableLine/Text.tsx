import React from 'react';
import * as S from '@app/components/dashboards/profile-info/styles/ProfileInfoStyles';
import { formatDate } from '@app/utils/utils';
import CopyButton from '@app/components/dashboards/profile-info/components/components/Buttons/CopyButton/CopyButton';
import Link from '@app/components/dashboards/profile-info/components/components/Fields/TableLine/Link';

type MyComponentProps = {
  field: string;
  isDate?: boolean;
  isCopyable?: boolean;
  isLink?: boolean;
};

const Text: React.FC<MyComponentProps> = ({ field, isDate, isCopyable, isLink }) => {
  return (
    <S.RightCell>
      {isLink ? (
        <>
          {!isDate ? (
            <>
              {isCopyable ? (
                <S.Text>
                  <CopyButton text={field} /> <Link text={field} />
                </S.Text>
              ) : (
                <S.Text>
                  <Link text={field} />
                </S.Text>
              )}
            </>
          ) : (
            <>
              {isCopyable ? (
                <S.Text>
                  <CopyButton text={field} /> <Link text={field} />
                </S.Text>
              ) : (
                <S.Text>
                  <Link text={field} />
                </S.Text>
              )}
            </>
          )}
        </>
      ) : (
        <>
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
        </>
      )}
    </S.RightCell>
  );
};

export default Text;
