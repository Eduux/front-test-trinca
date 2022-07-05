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
  width: 100%;

  background: url(${bgSystem});
  background-size: contain;
  background-repeat: repeat-x;
  background-position: center top;
  display: flex;
  flex-direction: column;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: absolute;
  bottom: 25px;

  @media (max-height: 630px) {
    display: none;
  }
`;
