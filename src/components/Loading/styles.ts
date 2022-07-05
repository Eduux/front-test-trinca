import styled from 'styled-components';

export const Container = styled.div`
  font-size: ${({ theme }) => theme.fontSize.big};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  font-weight: bold;
`;
