import styled from 'styled-components';

export const HomeBlock = styled.div`
  padding: 0 46px;
  // padding-left: 4px;
  // padding-right: 4px;
  font-size: 14px;
  text-align: center;
`;

export const MovieCardContainer = styled.div`
display: grid;
grid-template-columns: repeat(5, 1fr);
gap: 16px;
justify-items: center;
`;
