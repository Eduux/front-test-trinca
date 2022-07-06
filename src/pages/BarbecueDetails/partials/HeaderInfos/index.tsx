import React from 'react';

import iconPerson from 'assets/icon_people.svg';
import iconMoney from 'assets/icon_money.svg';

import GoBackButton from 'components/GoBackButton';
import { IBarbecue } from 'containers/barbecues/dtos';
import { dayAndMonthParse, moneySimpleParce } from 'helpers/parcers';

import { Container } from './styles';

const HeaderInfos: React.FC<IBarbecue> = ({
  amountCollected,
  date,
  title,
  participants,
  additionalInfos,
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
          <div>
            <img src={iconPerson} alt="Icon Person" />
            <p>{participants?.length || 0}</p>
          </div>
          <div>
            <img src={iconMoney} alt="Icon Money" />
            <p>{amountCollected ? moneySimpleParce(amountCollected) : 0}</p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default HeaderInfos;
