import React, { useEffect } from 'react';

import Loading from 'components/Loading';
import Content from 'components/Content';

import iconPerson from 'assets/icon_people.svg';
import iconMoney from 'assets/icon_money.svg';
import iconBbq from 'assets/icon_bbq.svg';

import { dayAndMonthParse, moneySimpleParce } from 'helpers/parcers';

import { useBarbecueContext } from 'containers/barbecues';

import {
  BarbecueItem,
  BarbecueWrapper,
  CreateNewItem,
  NoDataItem,
} from './styles';

const BarbecueListing: React.FC = () => {
  const {
    data: { barbecues, loading },
    actions: { getBarbecues },
  } = useBarbecueContext();

  useEffect(() => {
    getBarbecues();
  }, []);

  return (
    <Content>
      {loading ? (
        <Loading />
      ) : (
        <>
          {!barbecues?.length && (
            <NoDataItem data-testid="no-data-barbecues">
              Você não tem nenhum churrasco cadastrado.
            </NoDataItem>
          )}
          <BarbecueWrapper data-testid="barbecue-items">
            {barbecues?.map(
              ({ date, title, amountCollected, uuid, participants }) => (
                <BarbecueItem key={uuid}>
                  <div>
                    <h3>{dayAndMonthParse(date)}</h3>
                    <p>{title}</p>
                  </div>
                  <div>
                    <div>
                      <img src={iconPerson} alt="Icon Person" />
                      <p>{participants?.length || 0}</p>
                    </div>
                    <div>
                      <img src={iconMoney} alt="Icon Money" />
                      <p>{moneySimpleParce(amountCollected)}</p>
                    </div>
                  </div>
                </BarbecueItem>
              ),
            )}
            <CreateNewItem>
              <img src={iconBbq} alt="Icon Barbecue" />
              <p>Adicionar churras</p>
            </CreateNewItem>
          </BarbecueWrapper>
        </>
      )}
    </Content>
  );
};

export default BarbecueListing;
