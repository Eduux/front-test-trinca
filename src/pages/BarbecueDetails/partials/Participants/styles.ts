import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 45px;
`;

export const ParticipantWrapper = styled.div`
  margin-bottom: 25px;
`;

export const ParticipantItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.blackWithOpacity};

  p {
    font-size: ${({ theme }) => theme.fontSize.small};
    font-weight: 700;
    color: ${({ theme }) => theme.colors.blackWithOpacity};
    flex: 1;
  }
`;

export const DeleteAction = styled.div`
  cursor: pointer;
`;
