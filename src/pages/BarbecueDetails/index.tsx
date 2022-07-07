import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Loading from 'components/Loading';
import Content from 'components/Content';

import HeaderInfos from './partials/HeaderInfos';
import Participants from './partials/Participants';

import { useBarbecueContext } from 'containers/barbecues';

import { BarbecueDetailWrapper, NoDataContainer } from './styles';

const BarbecueDetails: React.FC = () => {
  const {
    data: { barbecueDetail, loading },
    actions: { findBarbecue },
  } = useBarbecueContext();

  const params = useParams();

  useEffect(() => {
    findBarbecue(params.id as string);
  }, []);

  return (
    <Content>
      {loading ? (
        <Loading />
      ) : (
        <>
          {barbecueDetail ? (
            <BarbecueDetailWrapper>
              <HeaderInfos {...barbecueDetail} />
              <Participants />
            </BarbecueDetailWrapper>
          ) : (
            <NoDataContainer data-testid="no-data-found">
              Churrasco não encontrado
            </NoDataContainer>
          )}
        </>
      )}
    </Content>
  );
};

export default BarbecueDetails;
