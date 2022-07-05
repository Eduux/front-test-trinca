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
}) => {
  return (
    <>
      <GoBackButton />
      <Container>
        <div>
          <p>{dayAndMonthParse(date)}</p>
          <h3>{title}</h3>
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
      </Container>
    </>
  );
};

export default HeaderInfos;
