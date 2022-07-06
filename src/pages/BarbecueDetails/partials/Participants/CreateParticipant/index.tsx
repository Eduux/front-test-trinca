import React, { useState } from 'react';

import { moneyMask, moneyToNumber } from 'helpers/parcers';

import Input from 'components/Input';
import Button from 'components/Button';

import { Container } from './styles';
import { IParticipant } from 'containers/barbecues/dtos';

interface IProps {
  onSaved({ name, value }: IParticipant): void;
}

const CreateParticipant: React.FC<IProps> = ({ onSaved }) => {
  const [name, setName] = useState('');
  const [value, setValue] = useState('');

  const isCompleted = name && value;

  const handleSave = () => {
    setName('');
    setValue('');
    onSaved({ name, value: moneyToNumber(value) });
  };

  return (
    <>
      <p>Adicionar participante</p>
      <Container>
        <Input
          name="name"
          value={name}
          onChange={setName}
          withBorder
          placeholder="Nome"
        />
        <Input
          name="value"
          value={value}
          onChange={value => setValue(moneyMask(value))}
          withBorder
          placeholder="Valor"
        />
        <Button disabled={!isCompleted} onClick={handleSave}>
          Add
        </Button>
      </Container>
    </>
  );
};

export default CreateParticipant;
