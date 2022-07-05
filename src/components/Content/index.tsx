import React, { PropsWithChildren } from 'react';

import { Container, ContentWrapper } from './styles';

const Content: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container>
      <ContentWrapper>{children}</ContentWrapper>
    </Container>
  );
};

export default Content;
