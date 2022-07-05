import styled from 'styled-components';

export const Container = styled.div`
  @media (min-width: 668px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media (max-width: 668px) {
    > div:first-child {
      margin-bottom: 25px;
    }
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.medium};
    color: ${({ theme }) => theme.colors.black};
    margin-bottom: 8px;
    font-weight: 800;
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSize.big};
    color: ${({ theme }) => theme.colors.blackWithOpacity};
    font-weight: 700;
  }

  > div:last-child > div {
    display: flex;
    align-items: center;

    &:first-child {
      margin-bottom: 10px;
    }

    img {
      margin-right: 10px;
    }

    p {
      font-size: ${({ theme }) => theme.fontSize.medium};
      font-weight: 500;
      margin-bottom: 0px;
    }
  }
`;
