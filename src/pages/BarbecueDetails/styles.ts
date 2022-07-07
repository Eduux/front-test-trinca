import styled from 'styled-components';

import BarbecueItem from 'components/BarbecueItem';

export const BarbecueDetailWrapper = styled.div`
  ${BarbecueItem}
`;

export const NoDataContainer = styled.div`
  ${BarbecueItem}

  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: 700;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;
