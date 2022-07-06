import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;

  label {
    flex: 3;

    &:first-child {
      margin-right: 15px;
    }
  }

  button {
    flex: 1;
    margin-left: 15px;
  }
`;
