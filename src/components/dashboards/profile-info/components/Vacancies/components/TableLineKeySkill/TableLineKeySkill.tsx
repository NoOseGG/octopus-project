import React from 'react';
import * as S from '@app/components/dashboards/profile-info/styles/ProfileInfoStyles';
import Text from '@app/components/dashboards/profile-info/components/components/Fields/TableLine/Text';

type MyComponentProps = {
  name: string | null | undefined;
  field: string | null | undefined;
  isDate?: boolean;
  isCopyable?: boolean;
};

const TableLine: React.FC<MyComponentProps> = ({ name, field, isDate = false, isCopyable = false }) => {
  const keySkills = field
    ?.split(';')
    .map((item) => `- ${item}\n`)
    .join('');

  console.log(`keySkills ${keySkills?.toString()}`);

  return (
    <>
      {name && keySkills && (
        <S.StyledRow>
          <S.LeftCell>
            <S.Text>{name}</S.Text>
          </S.LeftCell>
          <Text field={keySkills} isDate={isDate} isCopyable={isCopyable} />
        </S.StyledRow>
      )}
    </>
  );
};

export default TableLine;
