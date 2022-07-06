import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const ContentWrapper = styled.div`
  max-width: 1280px;
  width: 90%;
  margin-top: -50px;
`;
