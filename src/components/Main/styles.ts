import styled from 'styled-components';

import bgSystem from 'assets/bgSystem.png';

export const Container = styled.div`
  display: flex;
  justify-content: center;

  background-repeat: no-repeat;
  background-position: center top;
  background-color: ${({ theme }) => theme.colors.yellow};

  min-height: 100vh;
`;

export const Wrapper = styled.div`
  max-width: 746px;
  width: 100%;

  background: url(${bgSystem});
  background-size: contain;
`;
