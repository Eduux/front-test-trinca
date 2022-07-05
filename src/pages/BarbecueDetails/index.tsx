import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Loading from 'components/Loading';
import Content from 'components/Content';

import { useBarbecueContext } from 'containers/barbecues';

import { BarbecueDetailWrapper } from './styles';
import HeaderInfos from './partials/HeaderInfos';

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
          {barbecueDetail && (
            <BarbecueDetailWrapper>
              <HeaderInfos {...barbecueDetail} />
            </BarbecueDetailWrapper>
          )}
        </>
      )}
    </Content>
  );
};

export default BarbecueDetails;
