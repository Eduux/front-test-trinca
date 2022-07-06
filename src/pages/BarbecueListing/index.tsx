import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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

  const navigate = useNavigate();

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
                <BarbecueItem
                  key={uuid}
                  onClick={() => navigate(`/barbecue/${uuid}`)}
                  data-testid={`barbecue-${title}`}
                >
                  <div>
                    <h3>{dayAndMonthParse(date)}</h3>
                    <p>{title}</p>
                  </div>
                  <div>
                    <div title="Participantes">
                      <img src={iconPerson} alt="Icon Person" />
                      <p>{participants?.length || 0}</p>
                    </div>
                    <div title="Valor arrecadado">
                      <img src={iconMoney} alt="Icon Money" />
                      <p>
                        {amountCollected
                          ? moneySimpleParce(amountCollected)
                          : 0}
                      </p>
                    </div>
                  </div>
                </BarbecueItem>
              ),
            )}
            <CreateNewItem
              onClick={() => navigate('/barbecue/')}
              data-testid="create-new-barbecue"
            >
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
