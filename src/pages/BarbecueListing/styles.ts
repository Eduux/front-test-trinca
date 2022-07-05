import styled from 'styled-components';

export const BarbecueWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 25px 25px;
  justify-content: space-between;
`;

export const BarbecueItem = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 21px 24px 32px 24px;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.06);
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
  background-color: ${({ theme }) => theme.colors.gray};
  padding: 21px 24px 32px 24px;

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
`;

export const NoDataItem = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: 700;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.06);
  padding: 21px 24px 32px 24px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;
