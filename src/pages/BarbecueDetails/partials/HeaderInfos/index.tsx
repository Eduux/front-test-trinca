import React from 'react';

import iconPerson from 'assets/icon_people.svg';
import iconMoney from 'assets/icon_money.svg';

import GoBackButton from 'components/GoBackButton';
import { IBarbecue } from 'containers/barbecues/dtos';
import { dayAndMonthParse, moneySimpleParce } from 'helpers/parcers';

import { Container, SuggestionMoneyContainer } from './styles';

const HeaderInfos: React.FC<IBarbecue> = ({
  amountCollected,
  date,
  title,
  participants,
  additionalInfos,
  suggestedValueNoDrink,
  suggestedValueWithDrink,
}) => {
  return (
    <>
      <GoBackButton />
      <Container>
        <div>
          <p>{dayAndMonthParse(date)}</p>
          <h3>{title}</h3>
          <strong>{additionalInfos}</strong>
        </div>
        <div>
          <div title="Participantes">
            <img src={iconPerson} alt="Icon Person" />
            <p>{participants?.length || 0}</p>
          </div>
          <div title="Valor arrecadado">
            <img src={iconMoney} alt="Icon Money" />
            <p>{amountCollected ? moneySimpleParce(amountCollected) : 0}</p>
          </div>
        </div>
      </Container>
      <SuggestionMoneyContainer>
        <h6>Contribuição sugerida por usuário</h6>
        <div>
          <p>Com bedida: {moneySimpleParce(suggestedValueWithDrink)}</p>
          <p>Sem bebida: {moneySimpleParce(suggestedValueNoDrink)}</p>
        </div>
      </SuggestionMoneyContainer>
    </>
  );
};

export default HeaderInfos;
