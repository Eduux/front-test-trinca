import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useBarbecueContext } from 'containers/barbecues';
import { moneyMask, moneyToNumber } from 'helpers/parcers';

import Content from 'components/Content';
import GoBackButton from 'components/GoBackButton';
import Input from 'components/Input';
import Button from 'components/Button';

import { Container, Wrapper } from './styles';

const BarbecueCreate: React.FC = () => {
  const {
    actions: { createBarbecue },
  } = useBarbecueContext();

  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [additionalInfos, setAdditionalInfos] = useState('');
  const [date, setDate] = useState('');
  const [suggestedValueWithDrink, setSuggestedValueWithDrink] = useState('');
  const [suggestedValueNoDrink, setSuggestedValueNoDrink] = useState('');

  const isCompleted =
    title && date && suggestedValueNoDrink && suggestedValueWithDrink;

  const handleSubmit = () => {
    const idReturned = createBarbecue({
      title,
      date,
      suggestedValueWithDrink: moneyToNumber(suggestedValueWithDrink),
      suggestedValueNoDrink: moneyToNumber(suggestedValueNoDrink),
      additionalInfos,
    });

    navigate(`/barbecue/${idReturned}`);
  };

  return (
    <Content>
      <Container>
        <GoBackButton />

        <Wrapper>
          <Input
            name="date"
            placeholder="Selecione a data"
            value={date}
            onChange={setDate}
            label="Data"
            type="date"
            data-testid="date-input"
            withBorder
          />
          <Input
            name="title"
            placeholder="Digite o titulo"
            value={title}
            onChange={setTitle}
            label="Titulo"
            data-testid="title-input"
            withBorder
          />
          <Input
            name="additionalInfos"
            placeholder="Digite as informações adicionais"
            value={additionalInfos}
            onChange={setAdditionalInfos}
            label="Informações adicionais"
            data-testid="additionalInfos-input"
            withBorder
          />

          <Input
            name="additionalInfos"
            placeholder="Com bedida"
            value={suggestedValueWithDrink}
            onChange={value => setSuggestedValueWithDrink(moneyMask(value))}
            label="Seguestão de valores"
            data-testid="suggestedValueWithDrink-input"
            withBorder
          />

          <Input
            name="additionalInfos"
            placeholder="Sem bedida"
            value={suggestedValueNoDrink}
            onChange={value => setSuggestedValueNoDrink(moneyMask(value))}
            data-testid="suggestedValueNoDrink-input"
            withBorder
          />

          <Button
            data-testid="button-submit"
            disabled={!isCompleted}
            onClick={handleSubmit}
          >
            Criar churrasco
          </Button>
        </Wrapper>
      </Container>
    </Content>
  );
};

export default BarbecueCreate;
