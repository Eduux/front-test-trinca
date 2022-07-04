import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  max-width: 285px;
  width: 100%;

  input {
    margin-bottom: 35px;
  }

  button {
    margin-top: 40px;
  }
`;

export const FeedBack = styled.div`
  font-size: ${({ theme }) => theme.fontSize.small};
`;
