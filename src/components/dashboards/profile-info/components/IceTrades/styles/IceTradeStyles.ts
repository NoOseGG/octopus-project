import styled from 'styled-components';

const TITLE_FONT_SIZE = '16px';
const TITLE_FONT_WEIGHT = 550;
const TABLE_TITLE_FONT_SIZE = '12px';
const TABLE_TITLE_FONT_WEIGHT = 600;
const TABLE_CONTENT_FONT_SIZE = '12px';

export const TableTitle = styled.div`
  font-size: ${TABLE_TITLE_FONT_SIZE};
  font-weight: ${TABLE_TITLE_FONT_WEIGHT};
  text-align: center;
`;

export const Title = styled.div`
  font-size: ${TITLE_FONT_SIZE};
  font-weight: ${TITLE_FONT_WEIGHT};
  text-align: center;
`;

export const TableContent = styled.div`
  font-size: ${TABLE_CONTENT_FONT_SIZE};
  text-align: center;
`;
