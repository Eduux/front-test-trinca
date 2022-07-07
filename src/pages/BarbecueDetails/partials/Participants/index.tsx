import React from 'react';

import { useBarbecueContext } from 'containers/barbecues';
import { moneySimpleParce } from 'helpers/parcers';

import CreateParticipant from './CreateParticipant';

import {
  Container,
  ParticipantWrapper,
  ParticipantItem,
  DeleteAction,
} from './styles';

const Participants: React.FC = () => {
  const {
    data: { barbecueDetail },
    actions: { insertParticipant, findBarbecue, deleteParticipant },
  } = useBarbecueContext();

  return (
    <Container>
      {barbecueDetail && (
        <>
          <ParticipantWrapper data-testid="participants">
            {barbecueDetail.participants?.map(({ name, value }, index) => (
              <ParticipantItem key={name} data-testid={`participant-${name}`}>
                <p>{name}</p>
                <p>{moneySimpleParce(value)}</p>
                <DeleteAction
                  data-testid={`delete-participant-${name}`}
                  onClick={() => {
                    deleteParticipant(barbecueDetail.uuid, index, {
                      name,
                      value,
                    });
                    findBarbecue(barbecueDetail.uuid);
                  }}
                >
                  Deletar
                </DeleteAction>
              </ParticipantItem>
            ))}
          </ParticipantWrapper>

          <CreateParticipant
            onSaved={participant => {
              insertParticipant(barbecueDetail.uuid, participant);
              findBarbecue(barbecueDetail.uuid);
            }}
          />
        </>
      )}
    </Container>
  );
};

export default Participants;
