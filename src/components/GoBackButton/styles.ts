import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 30px;
    margin-right: 10px;
  }

  p {
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSize.medium};
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;
