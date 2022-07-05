import styled from 'styled-components';

import BarbecueItemCss from 'components/BarbecueItem';

export const BarbecueWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px 25px;
  justify-content: space-between;

  @media (min-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 678px) {
    grid-template-columns: 1fr;
  }
`;

export const BarbecueItem = styled.div`
  ${BarbecueItemCss}
  cursor: pointer;

  > div:first-child {
    h3 {
      font-size: ${({ theme }) => theme.fontSize.medium};
      color: ${({ theme }) => theme.colors.black};
      margin-bottom: 8px;
      font-weight: 800;
    }

    p {
      font-size: ${({ theme }) => theme.fontSize.medium};
      color: ${({ theme }) => theme.colors.blackWithOpacity};
      font-weight: 700;
    }
  }

  > div:last-child {
    margin-top: 45px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > div {
      display: flex;
      align-items: center;

      img {
        margin-right: 10px;
      }

      p {
        font-size: ${({ theme }) => theme.fontSize.medium};
        font-weight: 500;
      }
    }
  }
`;

export const CreateNewItem = styled.div`
  ${BarbecueItemCss}
  background-color: ${({ theme }) => theme.colors.gray};

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;

  p {
    font-size: ${({ theme }) => theme.fontSize.medium};
    font-weight: 700;
  }

  img {
    background-color: ${({ theme }) => theme.colors.yellow};
    border-radius: 100%;
    padding: 23px 25px;
    margin-bottom: 8px;
  }

  @media (max-width: 678px) {
    grid-row-start: 1;
  }
`;

export const NoDataItem = styled.div`
  ${BarbecueItemCss}
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: 700;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;
