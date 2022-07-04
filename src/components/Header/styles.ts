import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;

  h1 {
    font-size: ${({ theme }) => theme.fontSize.big};
    color: ${({ theme }) => theme.colors.black};
    font-weight: 800;
  }
`;
